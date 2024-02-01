import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadDestroyUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("destroy", async (container) => {
            const { DestroyUpdater } = await import("./DestroyUpdater.js");

            return new DestroyUpdater(engine, container);
        });
    });
}
