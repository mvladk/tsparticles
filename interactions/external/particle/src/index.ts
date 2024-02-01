import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalParticleInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalParticle", async (container) => {
            const { InteractivityParticleMaker } = await import("./InteractivityParticleMaker.js");

            return new InteractivityParticleMaker(container);
        });
    });
}
