import { EasingType, addEasing } from "@tsparticles/engine";

/**
 */
export function loadEasingLinearPlugin(): void {
    addEasing(EasingType.easeInLinear, (value) => {
        return value;
    });
    addEasing(EasingType.easeOutLinear, (value) => {
        return value;
    });
    addEasing(EasingType.easeInOutLinear, (value) => {
        return value;
    });
}
