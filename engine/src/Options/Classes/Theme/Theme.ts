import type { IOptionLoader, IOptions, ITheme } from "../../Interfaces";
import type { RecursivePartial } from "../../../Types";
import { ThemeDefault } from "./ThemeDefault";
import { deepExtend } from "../../../Utils";

export class Theme implements ITheme, IOptionLoader<ITheme> {
    name;
    default;
    options?: RecursivePartial<IOptions>;

    constructor() {
        this.name = "";
        this.default = new ThemeDefault();
    }

    load(data?: RecursivePartial<ITheme>): void {
        if (!data) {
            return;
        }

        if (data.name !== undefined) {
            this.name = data.name;
        }

        this.default.load(data.default);

        this.options = deepExtend({}, data.options) as RecursivePartial<IOptions>;
    }
}
