import type { Engine } from "@tsparticles/engine";

export const svgPathName = "svgPathGenerator";

/**
 * @param engine -
 */
export function loadSVGPath(engine: Engine): void {
    engine.register(async (engine) => {
        const { SVGPathGenerator } = await import("./SVGPathGenerator.js");

        engine.addPathGenerator(svgPathName, new SVGPathGenerator());
    });
}
