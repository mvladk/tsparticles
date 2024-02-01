import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadHeartShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { HeartDrawer } = await import("./HeartDrawer.js");

        engine.addShape("heart", new HeartDrawer());
    });
}
