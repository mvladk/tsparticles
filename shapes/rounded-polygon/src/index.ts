import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadRoundedPolygonShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { RoundedPolygonDrawer } = await import("./RoundedPolygonDrawer.js");

        engine.addShape("rounded-polygon", new RoundedPolygonDrawer());
    });
}
