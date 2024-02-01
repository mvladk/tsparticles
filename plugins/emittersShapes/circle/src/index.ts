import type { EmittersEngine } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 */
export function loadEmittersShapeCircle(engine: Engine): void {
    engine.register(async (engine) => {
        const emittersEngine = engine as EmittersEngine,
            { EmittersCircleShapeGenerator } = await import("./EmittersCircleShapeGenerator.js");

        emittersEngine.addEmitterShapeGenerator?.("circle", new EmittersCircleShapeGenerator());
    });
}
