import type { Engine } from "@tsparticles/engine";

/**
 * Loads the slime bundle with all plugins needed for running the tsParticles All package.
 * This function must be called to make tsParticles All work.
 * This function is not mandatory, the plugins can be loaded manually, or using other plugin bundles.
 * If this function is not called, the \@tsparticles/all package/dependency can be safely removed.
 * This function is called automatically using CDN bundle files.
 * @param engine - the engine to use for loading all plugins
 */
export function loadAll(engine: Engine): void {
    engine.register(async (engine) => {
        const { initPjs } = await import("@tsparticles/pjs"),
            { loadFull } = await import("tsparticles"),
            { loadHsvColorPlugin } = await import("@tsparticles/plugin-hsv-color"),
            { loadEasingBackPlugin } = await import("@tsparticles/plugin-easing-back"),
            { loadEasingCircPlugin } = await import("@tsparticles/plugin-easing-circ"),
            { loadEasingCubicPlugin } = await import("@tsparticles/plugin-easing-cubic"),
            { loadEasingExpoPlugin } = await import("@tsparticles/plugin-easing-expo"),
            { loadEasingLinearPlugin } = await import("@tsparticles/plugin-easing-linear"),
            { loadEasingQuartPlugin } = await import("@tsparticles/plugin-easing-quart"),
            { loadEasingQuintPlugin } = await import("@tsparticles/plugin-easing-quint"),
            { loadEasingSinePlugin } = await import("@tsparticles/plugin-easing-sine"),
            { loadEmittersShapeCanvas } = await import("@tsparticles/plugin-emitters-shape-canvas"),
            { loadEmittersShapePath } = await import("@tsparticles/plugin-emitters-shape-path"),
            { loadEmittersShapePolygon } = await import("@tsparticles/plugin-emitters-shape-polygon"),
            { loadCanvasMaskPlugin } = await import("@tsparticles/plugin-canvas-mask"),
            { loadInfectionPlugin } = await import("@tsparticles/plugin-infection"),
            { loadMotionPlugin } = await import("@tsparticles/plugin-motion"),
            { loadPolygonMaskPlugin } = await import("@tsparticles/plugin-polygon-mask"),
            { loadSoundsPlugin } = await import("@tsparticles/plugin-sounds"),
            { loadExportImagePlugin } = await import("@tsparticles/plugin-export-image"),
            { loadExportJSONPlugin } = await import("@tsparticles/plugin-export-json"),
            { loadExportVideoPlugin } = await import("@tsparticles/plugin-export-video"),
            { loadExternalParticleInteraction } = await import("@tsparticles/interaction-external-particle"),
            { loadExternalPopInteraction } = await import("@tsparticles/interaction-external-pop"),
            { loadLightInteraction } = await import("@tsparticles/interaction-light"),
            { loadParticlesRepulseInteraction } = await import("@tsparticles/interaction-particles-repulse"),
            { loadGradientUpdater } = await import("@tsparticles/updater-gradient"),
            { loadOrbitUpdater } = await import("@tsparticles/updater-orbit"),
            { loadCurvesPath } = await import("@tsparticles/path-curves"),
            { loadCurlNoisePath } = await import("@tsparticles/path-curl-noise"),
            { loadPerlinNoisePath } = await import("@tsparticles/path-perlin-noise"),
            { loadPoissonDiscPlugin } = await import("@tsparticles/plugin-poisson-disc"),
            { loadPolygonPath } = await import("@tsparticles/path-polygon"),
            { loadSVGPath } = await import("@tsparticles/path-svg"),
            { loadZigZagPath } = await import("@tsparticles/path-zig-zag"),
            { loadSimplexNoisePath } = await import("@tsparticles/path-simplex-noise"),
            { loadBubbleEffect } = await import("@tsparticles/effect-bubble"),
            { loadArrowShape } = await import("@tsparticles/shape-arrow"),
            { loadCardsShape } = await import("@tsparticles/shape-cards"),
            { loadCogShape } = await import("@tsparticles/shape-cog"),
            { loadHeartShape } = await import("@tsparticles/shape-heart"),
            { loadPathShape } = await import("@tsparticles/shape-path"),
            { loadRoundedPolygonShape } = await import("@tsparticles/shape-rounded-polygon"),
            { loadRoundedRectShape } = await import("@tsparticles/shape-rounded-rect"),
            { loadSpiralShape } = await import("@tsparticles/shape-spiral"),
            { loadTrailEffect } = await import("@tsparticles/effect-trail");

        initPjs(engine);

        loadFull(engine);

        loadEasingBackPlugin();
        loadEasingCircPlugin();
        loadEasingCubicPlugin();
        loadEasingExpoPlugin();
        loadEasingLinearPlugin();
        loadEasingQuartPlugin();
        loadEasingQuintPlugin();
        loadEasingSinePlugin();

        loadEmittersShapeCanvas(engine);
        loadEmittersShapePath(engine);
        loadEmittersShapePolygon(engine);

        loadHsvColorPlugin(engine);

        loadCanvasMaskPlugin(engine);
        loadInfectionPlugin(engine);
        loadMotionPlugin(engine);
        loadPolygonMaskPlugin(engine);
        loadSoundsPlugin(engine);
        loadExportImagePlugin(engine);
        loadExportJSONPlugin(engine);
        loadExportVideoPlugin(engine);
        loadExternalParticleInteraction(engine);
        loadExternalPopInteraction(engine);
        loadLightInteraction(engine);
        loadParticlesRepulseInteraction(engine);
        loadGradientUpdater(engine);
        loadOrbitUpdater(engine);
        loadCurvesPath(engine);
        loadCurlNoisePath(engine);
        loadPerlinNoisePath(engine);
        loadPoissonDiscPlugin(engine);
        loadPolygonPath(engine);
        loadSVGPath(engine);
        loadZigZagPath(engine);
        loadSimplexNoisePath(engine);
        loadBubbleEffect(engine);
        loadArrowShape(engine);
        loadCardsShape(engine);
        loadCogShape(engine);
        loadHeartShape(engine);
        loadPathShape(engine);
        loadRoundedPolygonShape(engine);
        loadRoundedRectShape(engine);
        loadSpiralShape(engine);
        loadTrailEffect(engine);
    });
}
