import type { Engine } from "@tsparticles/engine";

export const perlinNoisePathName = "perlinNoise";

/**
 * @param engine -
 */
export function loadPerlinNoisePath(engine: Engine): void {
    engine.register(async (engine) => {
        const { PerlinNoiseGenerator } = await import("./PerlinNoiseGenerator.js");

        engine.addPathGenerator(perlinNoisePathName, new PerlinNoiseGenerator());
    });
}
