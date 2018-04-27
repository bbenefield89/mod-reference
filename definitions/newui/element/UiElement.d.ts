import { ITooltipOptionsVague, IUiElement, IUiElementOptions, SelectableLayer } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
import { AttributeManipulator, ClassListManipulator } from "newui/util/ElementManipulator";
import Emitter from "utilities/Emitter";
export default class UiElement extends Emitter implements IUiElement {
    protected uiApi: UiApi;
    static findDescendants(inElement: IUiElement | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IUiElement | HTMLElement): number | false;
    static append(elementToMove: string | IUiElement | HTMLElement, placeToAppendTo: string | IUiElement | HTMLElement): Promise<void>;
    private static removeFromParent(elementToRemove);
    static remove(elementToRemove: string | IUiElement | HTMLElement): Promise<void>;
    readonly classes: ClassListManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly element: HTMLElement;
    readonly data: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    protected children: UiElement[];
    protected parent: UiElement;
    private readonly internalElement;
    private scrollingChild?;
    private readonly _data;
    private _tooltipOptions?;
    selectable: SelectableLayer | false;
    constructor(uiApi: UiApi, options?: IUiElementOptions);
    jsonData<T>(): DOMStringMap & T;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible?: boolean, ...args: any[]): Promise<void>;
    appendTo(where: string | HTMLElement | IUiElement): this;
    append(...elements: Array<HTMLElement | IUiElement | undefined | IterableOf<HTMLElement | IUiElement | undefined>>): this;
    remove(): Promise<void>;
    contains(what: string | HTMLElement | IUiElement): boolean;
    dump(filter?: (element: UiElement) => boolean): Promise<void>;
    setContents(html: string, escape?: boolean): this;
    store(): void;
    findDescendants(selector: string): NodeListOf<Element>;
    showTooltip(): Promise<void>;
    setTooltip(tooltipOptions?: ITooltipOptionsVague): void;
    getBox(): ClientRect | DOMRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild(nth?: number): UiElement;
    getChildren(): UiElement[];
    scrollTo(child: UiElement, ms?: number): void;
    getStyle(styleName: string): string;
    schedule(cb: (this: this, button: this) => any, ...args: any[]): this;
    schedule(ms: number, cb: (this: this, button: this) => any, ...args: any[]): this;
    repaint(): void;
    private initializeTooltip();
}
