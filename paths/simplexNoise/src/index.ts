import type { Engine } from "@tsparticles/engine";

export const simplexNoisePathName = "simplexNoise";

/**
 * @param engine -
 */
export function loadSimplexNoisePath(engine: Engine): void {
    engine.register(async (engine) => {
        const { SimplexNoiseGenerator } = await import("./SimplexNoiseGenerator.js");

        engine.addPathGenerator(simplexNoisePathName, new SimplexNoiseGenerator());
    });
}
