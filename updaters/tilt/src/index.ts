import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine to load the updater for
 */
export function loadTiltUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("tilt", async (container) => {
            const { TiltUpdater } = await import("./TiltUpdater.js");

            return new TiltUpdater(container);
        });
    });
}
