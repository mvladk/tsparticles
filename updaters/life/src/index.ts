import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadLifeUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("life", async (container) => {
            const { LifeUpdater } = await import("./LifeUpdater.js");

            return new LifeUpdater(container);
        });
    });
}
