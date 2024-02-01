import { type Engine, addColorManager } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadHsvColorPlugin(engine: Engine): void {
    engine.register(async () => {
        const { HsvColorManager } = await import("./HsvColorManager.js");

        addColorManager(new HsvColorManager());
    });
}
