import { type Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadSoundsPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { SoundsPlugin } = await import("./SoundsPlugin.js");

        engine.addPlugin(new SoundsPlugin(engine));
    });
}
