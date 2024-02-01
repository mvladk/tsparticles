import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadLinksPlugin(engine: Engine): void {
    engine.register(async () => {
        const { LinksPlugin } = await import("./LinksPlugin.js");

        engine.addPlugin(new LinksPlugin());
    });
}
