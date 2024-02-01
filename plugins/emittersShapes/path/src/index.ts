import type { EmittersEngine } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 */
export function loadEmittersShapePath(engine: Engine): void {
    engine.register(async (engine) => {
        const emittersEngine = engine as EmittersEngine,
            { EmittersPathShapeGenerator } = await import("./EmittersPathShapeGenerator.js");

        emittersEngine.addEmitterShapeGenerator?.("path", new EmittersPathShapeGenerator());
    });
}
