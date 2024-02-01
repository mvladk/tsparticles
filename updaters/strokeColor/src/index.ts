import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadStrokeColorUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("strokeColor", async (container) => {
            const { StrokeColorUpdater } = await import("./StrokeColorUpdater.js");

            return new StrokeColorUpdater(container);
        });
    });
}
