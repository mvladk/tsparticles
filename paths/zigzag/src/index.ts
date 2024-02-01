import type { Engine } from "@tsparticles/engine";

export const zigZagPathName = "zigZagPathGenerator";

/**
 * @param engine -
 */
export function loadZigZagPath(engine: Engine): void {
    engine.register(async (engine) => {
        const { ZigZagPathGenerator } = await import("./ZigZagPathGenerator.js");

        engine.addPathGenerator(zigZagPathName, new ZigZagPathGenerator());
    });
}
