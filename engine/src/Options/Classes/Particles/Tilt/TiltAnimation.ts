import type { IOptionLoader, ITiltAnimation } from "../../../Interfaces";
import type { RangeValue, RecursivePartial } from "../../../../Types";
import { setRangeValue } from "../../../../Utils";

/**
 * @category Options
 */
export class TiltAnimation implements ITiltAnimation, IOptionLoader<ITiltAnimation> {
    enable;
    speed: RangeValue;
    sync;

    constructor() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }

    load(data?: RecursivePartial<ITiltAnimation>): void {
        if (!data) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }

        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
