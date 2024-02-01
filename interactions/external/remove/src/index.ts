import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalRemoveInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalRemove", async (container) => {
            const { Remover } = await import("./Remover.js");

            return new Remover(container);
        });
    });
}

export * from "./Options/Classes/Remove.js";
export * from "./Options/Interfaces/IRemove.js";
