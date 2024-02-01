import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadCanvasMaskPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { CanvasMaskPlugin } = await import("./CanvasMaskPlugin.js");

        engine.addPlugin(new CanvasMaskPlugin());
    });
}
