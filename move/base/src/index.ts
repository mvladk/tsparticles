import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadBaseMover(engine: Engine): void {
    engine.register((engine) => {
        engine.addMover("base", async () => {
            const { BaseMover } = await import("./BaseMover.js");

            return new BaseMover();
        });
    });
}
