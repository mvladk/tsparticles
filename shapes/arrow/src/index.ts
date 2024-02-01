import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadArrowShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { ArrowDrawer } = await import("./ArrowDrawer.js");

        engine.addShape("arrow", new ArrowDrawer());
    });
}
