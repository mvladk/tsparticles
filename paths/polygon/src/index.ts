import type { Engine } from "@tsparticles/engine";

export const polygonPathName = "polygonPathGenerator";

/**
 * @param engine -
 */
export function loadPolygonPath(engine: Engine): void {
    engine.register(async (engine) => {
        const { PolygonPathGenerator } = await import("./PolygonPathGenerator.js");

        engine.addPathGenerator(polygonPathName, new PolygonPathGenerator());
    });
}
