import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadBubbleEffect(engine: Engine): void {
    engine.register(async (engine) => {
        const { BubbleDrawer } = await import("./BubbleDrawer.js");

        engine.addEffect("bubble", new BubbleDrawer());
    });
}
