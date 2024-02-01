import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadCogShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { CogDrawer } = await import("./CogDrawer.js");

        engine.addShape("cog", new CogDrawer());
    });
}
