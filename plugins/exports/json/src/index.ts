import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExportJSONPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { ExportJSONPlugin } = await import("./ExportJSONPlugin.js");

        engine.addPlugin(new ExportJSONPlugin(engine));
    });
}
