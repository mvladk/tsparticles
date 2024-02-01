import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine instance loading this plugin
 */
export function loadOutModesUpdater(engine: Engine): void {
    engine.register((engine) => {
        engine.addParticleUpdater("outModes", async (container) => {
            const { OutOfCanvasUpdater } = await import("./OutOfCanvasUpdater.js");

            return new OutOfCanvasUpdater(container);
        });
    });
}
