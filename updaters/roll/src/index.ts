import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine instance
 */
export function loadRollUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("roll", async () => {
            const { RollUpdater } = await import("./RollUpdater.js");

            return new RollUpdater();
        });
    });
}
