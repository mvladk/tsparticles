import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine to use for the interaction
 */
export function loadParticlesCollisionsInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("particlesCollisions", async (container) => {
            const { Collider } = await import("./Collider.js");

            return new Collider(container);
        });
    });
}
