import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadPathShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { PathDrawer } = await import("./PathDrawer.js");

        engine.addShape("path", new PathDrawer());
    });
}
