import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExportImagePlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { ExportImagePlugin } = await import("./ExportImagePlugin.js");

        engine.addPlugin(new ExportImagePlugin(engine));
    });
}
