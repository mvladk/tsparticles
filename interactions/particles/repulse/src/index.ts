import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadParticlesRepulseInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("particlesRepulse", async (container) => {
            const { Repulser } = await import("./Repulser.js");

            return new Repulser(container);
        });
    });
}
