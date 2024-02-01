import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadAbsorbersPlugin(engine: Engine): void {
    engine.register(async (engine) => {
        const { AbsorbersPlugin } = await import("./AbsorbersPlugin.js");

        engine.addPlugin(new AbsorbersPlugin());
    });
}

export * from "./AbsorberContainer.js";
export * from "./Enums/AbsorberClickMode.js";
