// the native SDK uses properties with snake_case
export interface NativeInAppMessageAction {
    closes_message  : boolean;
    first_click     : boolean;
    click_name      ?: string;
    click_url       ?: string;
    outcomes        ?: object[];
    tags            ?: object;
}

export class OSInAppMessageAction {
    closesMessage   : boolean;
    firstClick      : boolean;
    clickName       ?: string;
    clickUrl        ?: string;
    outcomes        ?: object[];
    tags            ?: object;

    constructor(nativeInAppMessageAction: NativeInAppMessageAction) {
        this.closesMessage = nativeInAppMessageAction.closes_message;
        this.firstClick = nativeInAppMessageAction.first_click;
        this.clickName = nativeInAppMessageAction.click_name;
        this.clickUrl = nativeInAppMessageAction.click_url;
        this.outcomes = nativeInAppMessageAction.outcomes;
        this.tags = nativeInAppMessageAction.tags;
    }
}
