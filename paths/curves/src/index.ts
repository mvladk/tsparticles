import type { Engine } from "@tsparticles/engine";

export const curvesPathName = "curvesPathGenerator";

/**
 * @param engine -
 */
export function loadCurvesPath(engine: Engine): void {
    engine.register(async (engine) => {
        const { CurvesPathGenerator } = await import("./CurvesPathGenerator.js");

        engine.addPathGenerator(curvesPathName, new CurvesPathGenerator());
    });
}
