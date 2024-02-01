import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadParticlesAttractInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("particlesAttract", async (container) => {
            const { Attractor } = await import("./Attractor.js");

            return new Attractor(container);
        });
    });
}
