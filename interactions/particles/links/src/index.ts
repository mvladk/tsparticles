import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadParticlesLinksInteraction(engine: Engine): void {
    engine.register(async (engine) => {
        const { loadLinksInteraction } = await import("./interaction.js"),
            { loadLinksPlugin } = await import("./plugin.js");

        loadLinksInteraction(engine);
        loadLinksPlugin(engine);
    });
}

export * from "./Options/Classes/Links.js";
export * from "./Options/Classes/LinksShadow.js";
export * from "./Options/Classes/LinksTriangle.js";
export * from "./Options/Interfaces/ILinks.js";
export * from "./Options/Interfaces/ILinksShadow.js";
export * from "./Options/Interfaces/ILinksTriangle.js";
