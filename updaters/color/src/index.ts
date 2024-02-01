import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadColorUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("color", async (container) => {
            const { ColorUpdater } = await import("./ColorUpdater.js");

            return new ColorUpdater(container);
        });
    });
}
