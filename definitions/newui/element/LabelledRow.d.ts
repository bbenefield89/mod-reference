import { BlockRow } from "newui/element/BlockRow";
import { IUiElementOptions, TextOrTranslationData } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
export interface LabelledRowOptions extends IUiElementOptions {
    label?: TextOrTranslationData;
}
export declare class LabelledRow extends BlockRow {
    private readonly label;
    constructor(uiApi: UiApi, options?: LabelledRowOptions);
    setLabel(label: TextOrTranslationData): this;
    /**
     * Safe — removes all children except for the label
     */
    dump(): Promise<void>;
}
