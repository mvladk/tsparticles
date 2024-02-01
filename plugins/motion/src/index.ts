import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine instance
 */
export function loadMotionPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { MotionPlugin } = await import("./MotionPlugin.js");

        engine.addPlugin(new MotionPlugin(engine));
    });
}
