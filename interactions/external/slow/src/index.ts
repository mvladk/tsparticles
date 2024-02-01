import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalSlowInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalSlow", async (container) => {
            const { Slower } = await import("./Slower.js");

            return new Slower(container);
        });
    });
}

export * from "./Options/Classes/Slow.js";
export * from "./Options/Interfaces/ISlow.js";
