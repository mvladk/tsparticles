import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadGenericPolygonShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { PolygonDrawer } = await import("./PolygonDrawer.js");

        engine.addShape("polygon", new PolygonDrawer());
    });
}

/**
 * @param engine -
 */
export function loadTriangleShape(engine: Engine): void {
    engine.register(async (engine) => {
        const { TriangleDrawer } = await import("./TriangleDrawer.js");

        engine.addShape("triangle", new TriangleDrawer());
    });
}

/**
 * @param engine -
 */
export function loadPolygonShape(engine: Engine): void {
    loadGenericPolygonShape(engine);
    loadTriangleShape(engine);
}
