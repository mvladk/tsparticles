import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalPopInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalPop", async (container) => {
            const { Popper } = await import("./Popper.js");

            return new Popper(container);
        });
    });
}
