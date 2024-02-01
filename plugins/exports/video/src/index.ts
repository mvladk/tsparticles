import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExportVideoPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { ExportVideoPlugin } = await import("./ExportVideoPlugin.js");

        engine.addPlugin(new ExportVideoPlugin(engine));
    });
}
