import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadSpiralShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { SpiralDrawer } = await import("./SpiralDrawer.js");

        engine.addShape("spiral", new SpiralDrawer());
    });
}
