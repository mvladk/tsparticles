import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine to load the interaction for.
 */
export function loadExternalGrabInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalGrab", async (container) => {
            const { Grabber } = await import("./Grabber.js");

            return new Grabber(container);
        });
    });
}

export * from "./Options/Classes/Grab.js";
export * from "./Options/Classes/GrabLinks.js";
export * from "./Options/Interfaces/IGrab.js";
export * from "./Options/Interfaces/IGrabLinks.js";
