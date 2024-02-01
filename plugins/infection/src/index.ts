import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadInfectionPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { InfectionPlugin } = await import("./InfectionPlugin.js"),
            plugin = new InfectionPlugin();

        engine.addPlugin(plugin);
        engine.addInteractor("particlesInfection", async (container) => {
            const { ParticlesInfecter } = await import("./ParticlesInfecter.js");

            return new ParticlesInfecter(container);
        });
    });
}

export * from "./Options/Interfaces/IInfection.js";
export * from "./Options/Interfaces/IInfectionStage.js";
