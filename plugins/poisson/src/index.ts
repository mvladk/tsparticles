import { type Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine to add the plugin to
 */
export function loadPoissonDiscPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { PoissonDiscPlugin } = await import("./PoissonDiscPlugin.js");

        engine.addPlugin(new PoissonDiscPlugin(engine));
    });
}
