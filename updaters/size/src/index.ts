import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadSizeUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("size", async () => {
            const { SizeUpdater } = await import("./SizeUpdater.js");

            return new SizeUpdater();
        });
    });
}
