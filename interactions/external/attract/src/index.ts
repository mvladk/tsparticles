import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalAttractInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalAttract", async (container) => {
            const { Attractor } = await import("./Attractor.js");

            return new Attractor(engine, container);
        });
    });
}

export * from "./Options/Classes/Attract.js";
export * from "./Options/Interfaces/IAttract.js";
