import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadCircleShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { CircleDrawer } = await import("./CircleDrawer.js");

        engine.addShape("circle", new CircleDrawer());
    });
}
