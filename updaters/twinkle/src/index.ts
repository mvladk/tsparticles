import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadTwinkleUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("twinkle", async () => {
            const { TwinkleUpdater } = await import("./TwinkleUpdater.js");

            return new TwinkleUpdater();
        });
    });
}
