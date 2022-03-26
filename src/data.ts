import * as tz from "../assets/images/tz.svg";

const bottom_left_1 = tz;
const bottom_left_2 = tz;
const bottom_left_3 = tz;
const bottom_left_4 = tz;
const bottom_left_5 = tz;

const left_1 = tz;
const left_2 = tz;
const left_3 = tz;
const left_4 = tz;
const left_5 = tz;

const top_left_1 = tz;
const top_left_2 = tz;
const top_left_3 = tz;
const top_left_4 = tz;
const top_left_5 = tz;


export default {
    textures: {
        "bottom_left_1": bottom_left_1,
        "bottom_left_2": bottom_left_2,
        "bottom_left_3": bottom_left_3,
        "bottom_left_4": bottom_left_4,
        "bottom_left_5": bottom_left_5,
        "left_1": left_1,
        "left_2": left_2,
        "left_3": left_3,
        "left_4": left_4,
        "left_5": left_5,
        "top_left_1": top_left_1,
        "top_left_2": top_left_2,
        "top_left_3": top_left_3,
        "top_left_4": top_left_4,
        "top_left_5": top_left_5,
    },
    animations: [
        {
            name: "left_step",
            textures: [
                "left_1",
                "left_2",
                "left_3",
                "left_4",
                "left_5",
            ],
            repeat: 0,
        },
        {
            name: "top_left_step",
            textures: [
                "top_left_1",
                "top_left_2",
                "top_left_3",
                "top_left_4",
                "top_left_5",
            ],
            repeat: 0,
        },
        {
            name: "bottom_left_step",
            textures: [
                "bottom_left_1",
                "bottom_left_2",
                "bottom_left_3",
                "bottom_left_4",
                "bottom_left_5",
            ],
            repeat: 0,
        },
        {
            name: "left_run",
            textures: [
                "left_2",
                "left_3",
                "left_4",
                "left_5",
            ],
            repeat: 3,
        },
        {
            name: "top_left_run",
            textures: [
                "top_left_2",
                "top_left_3",
                "top_left_4",
                "top_left_5",
            ],
            repeat: 3,
        },
        {
            name: "bottom_left_run",
            textures: [
                "bottom_left_2",
                "bottom_left_3",
                "bottom_left_4",
                "bottom_left_5",
            ],
            repeat: 3,
        },
    ],
    origins: {
        left: {x: 0.75, y: 0.75},
        top_left: {x: 0.63, y: 0.83},
        bottom_left: {x: 0.65, y: 0.5},
    },
    stopTextures: {
        left: "left_1",
        top_left: "top_left_1",
        bottom_left: "bottom_left_1",
    },
    cannotEscapeTextures: {
        left: "left_2",
        top_left: "top_left_2",
        bottom_left: "bottom_left_2",
    },
    directions: [
        {
            scaleX: 1,
            name: "left",
        },
        {
            scaleX: 1,
            name: "top_left",
        },
        {
            scaleX: -1,
            name: "top_left",
        },
        {
            scaleX: -1,
            name: "left",
        },
        {
            scaleX: -1,
            name: "bottom_left",
        },
        {
            scaleX: 1,
            name: "bottom_left",
        },
    ],
    catDefaultDirection: 5,
    catStepLength: 20,
    frameRate: 15,
    translations: {},
};
