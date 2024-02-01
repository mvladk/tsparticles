import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadRoundedRectShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { RoundedRectDrawer } = await import("./RoundedRectDrawer.js");

        engine.addShape("rounded-rect", new RoundedRectDrawer());
    });
}
