import { TextOrTranslationData, UiApi } from "newui/INewUi";
import Button, { ButtonOptions } from "newui/util/Button";
import { Refreshable } from "newui/util/Refreshable";
export interface CheckButtonOptions extends ButtonOptions {
    effect?: never;
    checked?: boolean;
    description?: TextOrTranslationData;
    refresh?(): boolean;
    onChange?(checkButton: CheckButton, checked: boolean): Promise<boolean | void> | void;
}
export declare enum CheckButtonEvent {
    Change = "Change",
}
export declare class CheckButton<T = {}> extends Button<T> implements Refreshable {
    private readonly heading;
    private _checked;
    private readonly _refresh;
    checked: boolean;
    constructor(uiApi: UiApi, options?: CheckButtonOptions);
    setChecked(checked: boolean, triggerEvent?: boolean): Promise<boolean>;
    toggleChecked(): void;
    refresh(): void;
    getText(): string | undefined;
    setText(text: TextOrTranslationData, refreshTranslationData?: boolean): void;
}
