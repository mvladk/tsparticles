import type { IRandom } from "./IRandom";
import type { RangeValue } from "../../Types/RangeValue";

export interface IValueWithRandom {
    /**
     * @deprecated Use the new {@link Types/RangeValue!RangeValue} type instead of random
     */
    random: boolean | IRandom;

    value: RangeValue;
}
