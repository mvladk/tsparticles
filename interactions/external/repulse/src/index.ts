import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalRepulseInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalRepulse", async (container) => {
            const { Repulser } = await import("./Repulser.js");

            return new Repulser(engine, container);
        });
    });
}

export * from "./Options/Classes/RepulseBase.js";
export * from "./Options/Classes/RepulseDiv.js";
export * from "./Options/Classes/Repulse.js";
export * from "./Options/Interfaces/IRepulseBase.js";
export * from "./Options/Interfaces/IRepulseDiv.js";
export * from "./Options/Interfaces/IRepulse.js";
