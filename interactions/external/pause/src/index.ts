import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalPauseInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalPause", async (container) => {
            const { Pauser } = await import("./Pauser.js");

            return new Pauser(container);
        });
    });
}
