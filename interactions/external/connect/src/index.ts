import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadExternalConnectInteraction(engine: Engine): void {
    engine.register((engine) => {
        engine.addInteractor("externalConnect", async (container) => {
            const { Connector } = await import("./Connector.js");

            return new Connector(container);
        });
    });
}

export * from "./Options/Classes/Connect.js";
export * from "./Options/Classes/ConnectLinks.js";
export * from "./Options/Interfaces/IConnect.js";
export * from "./Options/Interfaces/IConnectLinks.js";
