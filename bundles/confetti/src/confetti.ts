import {
    type Container,
    type Engine,
    type ISourceOptions,
    type RecursivePartial,
    isSsr,
    isString,
    millisecondsToSeconds,
    tsParticles,
} from "@tsparticles/engine";
import { ConfettiOptions } from "./ConfettiOptions.js";
import type { EmitterContainer } from "@tsparticles/plugin-emitters";
import type { IConfettiOptions } from "./IConfettiOptions.js";

const defaultGravity = 9.81,
    sizeFactor = 5,
    speedFactor = 3,
    decayOffset = 1,
    disableRotate = 0,
    disableTilt = 0;

/**
 *
 */
export type ConfettiFirstParam = string | RecursivePartial<IConfettiOptions>;

declare global {
    /**
     *
     */
    interface Window {
        /**
         *
         */
        confetti: ConfettiFunc & {
            /**
             *
             * @param canvas -
             * @param options -
             * @returns the confetti function
             */
            create: (canvas: HTMLCanvasElement, options: RecursivePartial<IConfettiOptions>) => ConfettiFunc;

            /**
             * the confetti version number
             */
            version: string;
        };
    }
}

const ids = new Map<string, Container | undefined>();

/**
 * The {@link confetti} parameter object definition
 */
export interface ConfettiParams {
    /**
     *
     */
    canvas?: HTMLCanvasElement;

    /**
     *
     */
    id: string;

    /**
     *
     */
    options: RecursivePartial<IConfettiOptions>;
}

/**
 * This function prepares all the plugins needed by the confetti bundle
 * @param engine -
 */
function initPlugins(engine: Engine): void {
    engine.register(async () => {
        const { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadMotionPlugin } = await import("@tsparticles/plugin-motion"),
            { loadCardsShape } = await import("@tsparticles/shape-cards"),
            { loadHeartShape } = await import("@tsparticles/shape-heart"),
            { loadImageShape } = await import("@tsparticles/shape-image"),
            { loadPolygonShape } = await import("@tsparticles/shape-polygon"),
            { loadSquareShape } = await import("@tsparticles/shape-square"),
            { loadStarShape } = await import("@tsparticles/shape-star"),
            { loadEmojiShape } = await import("@tsparticles/shape-emoji"),
            { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
            { loadLifeUpdater } = await import("@tsparticles/updater-life"),
            { loadRollUpdater } = await import("@tsparticles/updater-roll"),
            { loadTiltUpdater } = await import("@tsparticles/updater-tilt"),
            { loadWobbleUpdater } = await import("@tsparticles/updater-wobble"),
            { loadBasic } = await import("@tsparticles/basic");

        loadEmittersPlugin(engine);
        loadMotionPlugin(engine);
        loadCardsShape(engine);
        loadHeartShape(engine);
        loadImageShape(engine);
        loadPolygonShape(engine);
        loadSquareShape(engine);
        loadStarShape(engine);
        loadEmojiShape(engine);
        loadRotateUpdater(engine);
        loadLifeUpdater(engine);
        loadRollUpdater(engine);
        loadTiltUpdater(engine);
        loadWobbleUpdater(engine);
        loadBasic(engine);
    });
}

/**
 * @param params - the parameters object used for the confetti animation
 * @returns the tsParticles Container for more customizations
 */
async function setConfetti(params: ConfettiParams): Promise<Container | undefined> {
    const actualOptions = new ConfettiOptions();

    actualOptions.load(params.options);

    let container;

    const fpsLimit = 120,
        fpsLimitFactor = 3.6,
        opacitySpeed =
            (actualOptions.ticks * millisecondsToSeconds) / (fpsLimitFactor * millisecondsToSeconds * fpsLimit);

    if (ids.has(params.id)) {
        container = ids.get(params.id);

        if (container && !container.destroyed) {
            const alias = container as EmitterContainer;

            if (alias.addEmitter) {
                await alias.addEmitter({
                    startCount: actualOptions.count,
                    position: actualOptions.position,
                    size: {
                        width: 0,
                        height: 0,
                    },
                    rate: {
                        delay: 0,
                        quantity: 0,
                    },
                    life: {
                        duration: 0.1,
                        count: 1,
                    },
                    particles: {
                        color: {
                            value: actualOptions.colors,
                        },
                        shape: {
                            type: actualOptions.shapes,
                            options: actualOptions.shapeOptions,
                        },
                        life: {
                            count: 1,
                        },
                        opacity: {
                            value: { min: 0, max: 1 },
                            animation: {
                                enable: true,
                                sync: true,
                                speed: opacitySpeed,
                                startValue: "max",
                                destroy: "min",
                            },
                        },
                        size: {
                            value: sizeFactor * actualOptions.scalar,
                        },
                        move: {
                            angle: {
                                value: actualOptions.spread,
                                offset: 0,
                            },
                            drift: {
                                min: -actualOptions.drift,
                                max: actualOptions.drift,
                            },
                            gravity: {
                                acceleration: actualOptions.gravity * defaultGravity,
                            },
                            speed: actualOptions.startVelocity * speedFactor,
                            decay: decayOffset - actualOptions.decay,
                            direction: -actualOptions.angle,
                        },
                    },
                });

                return;
            }
        }
    }

    const particlesOptions: ISourceOptions = {
        fullScreen: {
            enable: !params.canvas,
            zIndex: actualOptions.zIndex,
        },
        fpsLimit: 120,
        particles: {
            number: {
                value: 0,
            },
            color: {
                value: actualOptions.colors,
            },
            shape: {
                type: actualOptions.shapes,
                options: actualOptions.shapeOptions,
            },
            opacity: {
                value: { min: 0, max: 1 },
                animation: {
                    enable: true,
                    sync: true,
                    speed: opacitySpeed,
                    startValue: "max",
                    destroy: "min",
                },
            },
            size: {
                value: sizeFactor * actualOptions.scalar,
            },
            links: {
                enable: false,
            },
            life: {
                count: 1,
            },
            move: {
                angle: {
                    value: actualOptions.spread,
                    offset: 0,
                },
                drift: {
                    min: -actualOptions.drift,
                    max: actualOptions.drift,
                },
                enable: true,
                gravity: {
                    enable: true,
                    acceleration: actualOptions.gravity * defaultGravity,
                },
                speed: actualOptions.startVelocity * speedFactor,
                decay: decayOffset - actualOptions.decay,
                direction: -actualOptions.angle,
                random: true,
                straight: false,
                outModes: {
                    default: "none",
                    bottom: "destroy",
                },
            },
            rotate: {
                value: actualOptions.flat
                    ? disableRotate
                    : {
                          min: 0,
                          max: 360,
                      },
                direction: "random",
                animation: {
                    enable: !actualOptions.flat,
                    speed: 60,
                },
            },
            tilt: {
                direction: "random",
                enable: !actualOptions.flat,
                value: actualOptions.flat
                    ? disableTilt
                    : {
                          min: 0,
                          max: 360,
                      },
                animation: {
                    enable: true,
                    speed: 60,
                },
            },
            roll: {
                darken: {
                    enable: true,
                    value: 25,
                },
                enable: !actualOptions.flat,
                speed: {
                    min: 15,
                    max: 25,
                },
            },
            wobble: {
                distance: 30,
                enable: !actualOptions.flat,
                speed: {
                    min: -15,
                    max: 15,
                },
            },
        },
        detectRetina: true,
        motion: {
            disable: actualOptions.disableForReducedMotion,
        },
        emitters: {
            name: "confetti",
            startCount: actualOptions.count,
            position: actualOptions.position,
            size: {
                width: 0,
                height: 0,
            },
            rate: {
                delay: 0,
                quantity: 0,
            },
            life: {
                duration: 0.1,
                count: 1,
            },
        },
    };

    container = await tsParticles.load({ id: params.id, element: params.canvas, options: particlesOptions });

    ids.set(params.id, container);

    return container;
}

/**
 *
 * @param idOrOptions - the id used for the canvas, or if not using two parameters, the animation configuration object
 * @param confettiOptions - the animation configuration object, this parameter is mandatory only if providing an id
 * @returns the container of the animation, or undefined if no canvas was found
 */
type ConfettiFunc = (
    idOrOptions: ConfettiFirstParam,
    confettiOptions?: RecursivePartial<IConfettiOptions>,
) => Promise<Container | undefined>;

/**
 * @param idOrOptions - the id used for the canvas, or if not using two parameters, the animation configuration object
 * @param confettiOptions - the animation configuration object, this parameter is mandatory only if providing an id
 * @returns the container of the animation, or undefined if no canvas was found
 */
export async function confetti(
    idOrOptions: ConfettiFirstParam,
    confettiOptions?: RecursivePartial<IConfettiOptions>,
): Promise<Container | undefined> {
    initPlugins(tsParticles);

    let options: RecursivePartial<IConfettiOptions>;
    let id: string;

    if (isString(idOrOptions)) {
        id = idOrOptions;
        options = confettiOptions ?? {};
    } else {
        id = "confetti";
        options = idOrOptions;
    }

    return setConfetti({
        id,
        options,
    });
}

/**
 *
 * @param canvas -
 * @param options -
 * @returns the confetti function to use for the given canvas animations
 */
confetti.create = (canvas: HTMLCanvasElement, options: RecursivePartial<IConfettiOptions>): ConfettiFunc => {
    if (!canvas) {
        return confetti;
    }

    initPlugins(tsParticles);

    const id = canvas.getAttribute("id") ?? "confetti";

    canvas.setAttribute("id", id);

    return async (
        idOrOptions: ConfettiFirstParam,
        confettiOptions?: RecursivePartial<IConfettiOptions>,
    ): Promise<Container | undefined> => {
        let subOptions: RecursivePartial<IConfettiOptions>;
        let subId: string;

        if (isString(idOrOptions)) {
            subId = idOrOptions;
            subOptions = confettiOptions ?? options;
        } else {
            subId = id;
            subOptions = idOrOptions;
        }

        return setConfetti({
            id: subId,
            canvas,
            options: subOptions,
        });
    };
};

/**
 *
 */
confetti.version = tsParticles.version;

if (!isSsr()) {
    window.confetti = confetti;
}
