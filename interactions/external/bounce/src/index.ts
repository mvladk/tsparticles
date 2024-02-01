import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalBounceInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalBounce", async (container) => {
            const { Bouncer } = await import("./Bouncer.js");

            return new Bouncer(container);
        });
    });
}

export * from "./Options/Classes/Bounce.js";
export * from "./Options/Interfaces/IBounce.js";
