import type { EmittersEngine } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 */
export function loadEmittersShapeCanvas(engine: Engine): void {
    engine.register(async (engine) => {
        const emittersEngine = engine as EmittersEngine,
            { EmittersCanvasShapeGenerator } = await import("./EmittersCanvasShapeGenerator.js");

        emittersEngine.addEmitterShapeGenerator?.("canvas", new EmittersCanvasShapeGenerator());
    });
}
