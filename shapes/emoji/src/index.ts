import type { Engine } from "@tsparticles/engine";
import { validTypes } from "./Constants.js";

/**
 * @param engine -
 */
export function loadEmojiShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { EmojiDrawer } = await import("./EmojiDrawer.js");

        engine.addShape(validTypes, new EmojiDrawer());
    });
}
