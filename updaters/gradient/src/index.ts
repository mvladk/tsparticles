import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadGradientUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("gradient", async () => {
            const { GradientUpdater } = await import("./GradientUpdater.js");

            return new GradientUpdater();
        });
    });
}
