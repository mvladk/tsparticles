import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadCardsShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { SpadeDrawer } = await import("./SpadeDrawer.js"),
            { HeartDrawer } = await import("./HeartDrawer.js"),
            { DiamondDrawer } = await import("./DiamondDrawer.js"),
            { ClubDrawer } = await import("./ClubDrawer.js");

        engine.addShape(["spade", "spades"], new SpadeDrawer());
        engine.addShape(["heart", "hearts"], new HeartDrawer());
        engine.addShape(["diamond", "diamonds"], new DiamondDrawer());
        engine.addShape(["club", "clubs"], new ClubDrawer());
    });
}
