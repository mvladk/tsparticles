import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalTrailInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalTrail", async (container) => {
            const { TrailMaker } = await import("./TrailMaker.js");

            return new TrailMaker(container);
        });
    });
}

export * from "./Options/Classes/Trail.js";
export * from "./Options/Interfaces/ITrail.js";
