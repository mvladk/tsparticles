import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadLineShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { LineDrawer } = await import("./LineDrawer.js");

        engine.addShape("line", new LineDrawer());
    });
}
