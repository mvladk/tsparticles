import type { Engine } from "@tsparticles/engine";

export const curlNoisePathName = "curlNoise";

/**
 * @param engine -
 */
export function loadCurlNoisePath(engine: Engine): void {
    engine.register(async () => {
        const { CurlNoiseGenerator } = await import("./CurlNoiseGenerator.js");

        engine.addPathGenerator(curlNoisePathName, new CurlNoiseGenerator());
    });
}
