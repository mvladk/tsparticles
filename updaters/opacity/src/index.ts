import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine instance to load the updater for
 */
export function loadOpacityUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("opacity", async (container) => {
            const { OpacityUpdater } = await import("./OpacityUpdater.js");

            return new OpacityUpdater(container);
        });
    });
}
