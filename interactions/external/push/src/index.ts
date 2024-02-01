import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - The engine to use for the interaction
 */
export function loadExternalPushInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalPush", async (container) => {
            const { Pusher } = await import("./Pusher.js");

            return new Pusher(container);
        });
    });
}

export * from "./Options/Classes/Push.js";
export * from "./Options/Interfaces/IPush.js";
