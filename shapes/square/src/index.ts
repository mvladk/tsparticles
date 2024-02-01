import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadSquareShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { SquareDrawer } = await import("./SquareDrawer.js");

        engine.addShape(["edge", "square"], new SquareDrawer());
    });
}
