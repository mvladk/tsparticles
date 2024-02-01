import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadStarShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { StarDrawer } = await import("./StarDrawer.js");

        engine.addShape("star", new StarDrawer());
    });
}
