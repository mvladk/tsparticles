import type { Engine } from "@tsparticles/engine";
import { validTypes } from "./TextDrawer.js";

/**
 * @param engine -
 */
export function loadTextShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { TextDrawer } = await import("./TextDrawer.js");

        engine.addShape(validTypes, new TextDrawer());
    });
}
