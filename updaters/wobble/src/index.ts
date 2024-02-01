import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadWobbleUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("wobble", async (container) => {
            const { WobbleUpdater } = await import("./WobbleUpdater.js");

            return new WobbleUpdater(container);
        });
    });
}
