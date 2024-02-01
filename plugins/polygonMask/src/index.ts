import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine to add the plugin to
 */
export function loadPolygonMaskPlugin(engine: Engine): void {
    engine.register(async () => {
        await import("./pathseg.js");

        const { PolygonMaskPlugin } = await import("./PolygonMaskPlugin.js");

        engine.addPlugin(new PolygonMaskPlugin(engine));
    });
}

export * from "./Enums/PolygonMaskInlineArrangement.js";
export * from "./Enums/PolygonMaskMoveType.js";
export * from "./Enums/PolygonMaskType.js";
