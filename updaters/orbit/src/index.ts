import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadOrbitUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("orbit", async (container) => {
            const { OrbitUpdater } = await import("./OrbitUpdater.js");

            return new OrbitUpdater(container);
        });
    });
}
