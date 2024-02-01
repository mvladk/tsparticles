import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadParallaxMover(engine: Engine): void {
    engine.register((engine) => {
        engine.addMover("parallax", async () => {
            const { ParallaxMover } = await import("./ParallaxMover.js");

            return new ParallaxMover();
        });
    });
}
