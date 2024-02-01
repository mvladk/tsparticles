import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadRotateUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("rotate", async (container) => {
            const { RotateUpdater } = await import("./RotateUpdater.js");

            return new RotateUpdater(container);
        });
    });
}
