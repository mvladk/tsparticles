import type { EmittersEngine } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 */
export function loadEmittersShapeSquare(engine: Engine): void {
    engine.register(async (engine) => {
        const emittersEngine = engine as EmittersEngine,
            { EmittersSquareShapeGenerator } = await import("./EmittersSquareShapeGenerator.js");

        emittersEngine.addEmitterShapeGenerator?.("square", new EmittersSquareShapeGenerator());
    });
}
