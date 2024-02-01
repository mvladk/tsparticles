import type { EmittersEngine } from "@tsparticles/plugin-emitters";
import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 */
export function loadEmittersShapePolygon(engine: Engine): void {
    engine.register(async (engine) => {
        const emittersEngine = engine as EmittersEngine,
            { EmittersPolygonShapeGenerator } = await import("./EmittersPolygonShapeGenerator.js");

        emittersEngine.addEmitterShapeGenerator?.("polygon", new EmittersPolygonShapeGenerator());
    });
}
