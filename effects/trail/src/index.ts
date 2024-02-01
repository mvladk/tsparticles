import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadTrailEffect(engine: Engine): void {
    engine.register(async (engine) => {
        const { TrailDrawer } = await import("./TrailDrawer.js");

        engine.addEffect("trail", new TrailDrawer());
    });
}
