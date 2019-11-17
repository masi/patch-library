import { FrontPanel } from "./front-panel"

const CANVAS_WIDTH = 1650;
const CANVAS_HEIGHT = 892;
const CABLE_WIDTH = 12;
const CELL_RADIUS = 50;
const CONNECTORS = [
  {idx: 0, x: 228, y: 650, name: "CLK IN", input: true},
  {idx: 1, x: 228, y: 750, name: "SEQ CV OUT", input: false},
  {idx: 2, x: 339, y: 430, name: "VCO1 1V/OCT", input: true},
  {idx: 3, x: 339, y: 540, name: "PWM CV", input: true},
  {idx: 4, x: 339, y: 650, name: "VCO1 PULSE", input: false},
  {idx: 5, x: 339, y: 755, name: "VCO1 TRI", input: false},
  {idx: 6, x: 445, y: 430, name: "EXP FM", input: true},
  {idx: 7, x: 445, y: 540, name: "VCA CV", input: true},
  {idx: 8, x: 445, y: 650, name: "IN/LIN FM", input: true},
  {idx: 9, x: 445, y: 755, name: "VCA OUT", input: false},
  {idx: 10, x: 555, y: 430, name: "VCO2 1V/OCT", input: true},
  {idx: 11, x: 555, y: 540, name: "SHAPE CV", input: true},
  {idx: 12, x: 555, y: 650, name: "VCO2 SHAPE", input: false},
  {idx: 13, x: 555, y: 755, name: "VCO2 TRI", input: false},
  {idx: 14, x: 665, y: 430, name: "MIX1 IN 1", input: true},
  {idx: 15, x: 665, y: 540, name: "MIX1 IN 2", input: true},
  {idx: 16, x: 665, y: 650, name: "MIX1 IN 3", input: true},
  {idx: 17, x: 665, y: 755, name: "MIX1 OUT", input: false},
  {idx: 18, x: 775, y: 215, name: "CLK IN", input: true},
  {idx: 19, x: 775, y: 326, name: "MOD SINE", input: false},
  {idx: 20, x: 775, y: 430, name: "MOD PULSE", input: false},
  {idx: 21, x: 775, y: 540, name: "RND PULSE", input: false},
  {idx: 22, x: 775, y: 650, name: "S&H", input: false},
  {idx: 23, x: 775, y: 755, name: "NOISE", input: false},
  {idx: 24, x: 875, y: 430, name: "EG1 ATTACK CV", input: true},
  {idx: 25, x: 875, y: 540, name: "EG1 DECAY CV", input: true},
  {idx: 26, x: 875, y: 650, name: "EG1 TRIGG", input: true},
  {idx: 27, x: 875, y: 755, name: "EG1 OUT", input: false},
  {idx: 28, x: 985, y: 430, name: "EG2 ATTACK CV", input: true},
  {idx: 29, x: 985, y: 540, name: "EG2 DECAY CV", input: true},
  {idx: 30, x: 985, y: 650, name: "EG2 TRIGG", input: true},
  {idx: 31, x: 985, y: 755, name: "EG2 OUT", input: false},
  {idx: 32, x: 1095, y: 430, name: "LPG1 CV1", input: true},
  {idx: 33, x: 1095, y: 540, name: "LPG1 CV2", input: true},
  {idx: 34, x: 1095, y: 650, name: "LPG1 IN", input: true},
  {idx: 35, x: 1095, y: 755, name: "LPG1 OUT", input: false},
  {idx: 36, x: 1205, y: 430, name: "LPG2 CV1", input: true},
  {idx: 37, x: 1205, y: 540, name: "LPG2 CV2", input: true},
  {idx: 38, x: 1205, y: 650, name: "LPG2 IN", input: true},
  {idx: 39, x: 1205, y: 755, name: "LPG2 OUT", input: false},
  {idx: 40, x: 1315, y: 540, name: "BBD TIME CV", input: true},
  {idx: 41, x: 1315, y: 650, name: "BBD IN", input: true},
  {idx: 42, x: 1315, y: 755, name: "BBD OUT", input: false},
  {idx: 43, x: 1425, y: 430, name: "MIX2 IN 1", input: true},
  {idx: 44, x: 1425, y: 540, name: "MIX2 IN 2", input: true},
  {idx: 45, x: 1425, y: 650, name: "MIX2 IN 3", input: true},
  {idx: 46, x: 1425, y: 755, name: "MIX2 OUT", input: false},
  {idx: 47, x: 1535, y: 430, name: "MIX3 IN 1", input: true},
  {idx: 48, x: 1535, y: 540, name: "MIX3 IN 2", input: true},
  {idx: 49, x: 1535, y: 650, name: "MIX3 OUT", input: false},
  {idx: 50, x: 1535, y: 755, name: "MIX3 SUM OUT", input: false},
];
const KNOBS = [
  {idx: 0, x: 228, y: 112, type: "small", name: "SEQ 1"},
  {idx: 1, x: 228, y: 225, type: "small", name: "SEQ 2"},
  {idx: 2, x: 228, y: 340, type: "small", name: "SEQ 3"},
  {idx: 3, x: 228, y: 455, type: "small", name: "SEQ 4"},
  {idx: 4, x: 339, y: 112, type: "small", name: "TUNE 1"},
  {idx: 5, x: 339, y: 215, type: "small", name: "PWM"},
  {idx: 6, x: 446, y: 112, type: "small", name: "EXP FM"},
  {idx: 7, x: 446, y: 215, type: "small", name: "LIN FM"},
  {idx: 8, x: 446, y: 325, type: "small", name: "VCA OFFS"},
  {idx: 9, x: 555, y: 112, type: "small", name: "TUNE 2"},
  {idx: 10, x: 555, y: 215, type: "small", name: "SHAPE"},
  {idx: 11, x: 663, y: 112, type: "small", name: "MIX1 LVL 1"},
  {idx: 12, x: 663, y: 215, type: "small", name: "MIX1 LVL 2"},
  {idx: 13, x: 663, y: 326, type: "small", name: "MIX1 LVL 3"},
  {idx: 14, x: 770, y: 111, type: "small", name: "RATE"},
  {idx: 15, x: 880, y: 110, type: "small", name: "EG1 ATTACK"},
  {idx: 16, x: 880, y: 216, type: "small", name: "EG1 DECAY"},
  {idx: 17, x: 988, y: 110, type: "small", name: "EG2 ATTACK"},
  {idx: 18, x: 988, y: 216, type: "small", name: "EG2 DECAY"},
  {idx: 19, x: 1097, y: 110, type: "small", name: "LPG1 OFFSET"},
  {idx: 20, x: 1097, y: 216, type: "small", name: "LPG1 RESO"},
  {idx: 21, x: 1205, y: 110, type: "small", name: "LPG2 OFFSET"},
  {idx: 22, x: 1205, y: 216, type: "small", name: "LPG2 RESO"},
  {idx: 23, x: 1313, y: 110, type: "small", name: "BBD TIME"},
  {idx: 24, x: 1313, y: 215, type: "small", name: "BBD FDK"},
  {idx: 25, x: 1313, y: 323, type: "small", name: "BBD DRY/WET"},
  {idx: 26, x: 1423, y: 110, type: "small", name: "MIX2 LVL 1"},
  {idx: 27, x: 1423, y: 215, type: "small", name: "MIX2 LVL 2"},
  {idx: 28, x: 1423, y: 323, type: "small", name: "MIX2 LVL 3"},
  {idx: 29, x: 1531, y: 215, type: "small", name: "MIX3 LVL 1"},
  {idx: 30, x: 1531, y: 323, type: "small", name: "MIX3 LVL 2"},
]

// Not sure why radius has to be 90, but after some trial and error I found 
// it works best in this case (hitboxes of different knobs won't overlap when I choose 90)
const KNOB_TYPES = {
  small: {radius: 90, limit: 280} 
}
const TOGGLES = [
  {idx: 0, x: 195, y: 533, type: "horizthree", name: "SEQ STEPS"},
  {idx: 1, x: 288, y: 290, type: "vertthree", name: "VCO1 OCT"},
  {idx: 2, x: 504, y: 290, type: "vertthree", name: "VCO2 OCT"},
  {idx: 3, x: 822, y: 290, type: "verttwo", name: "EG1 LOOP/FREE"},
  {idx: 4, x: 932, y: 290, type: "verttwo", name: "EG2 LOOP/FREE"},
  {idx: 5, x: 1065, y: 290, type: "verttwo", name: "LPG1 VCA/VCF"},
  {idx: 6, x: 1174, y: 290, type: "verttwo", name: "LPG2 VCA/VCF"},
  {idx: 7, x: 1275, y: 400, type: "horizthree", name: "SEQ STEPS"},
]
const TOGGLE_TYPES = {
  horiztwo: {values: ["left", "right"]},
  horizthree: {values: ["left", "centerhor", "right"]},
  verttwo: {values: ["up", "down"]},
  vertthree: {values: ["up", "center", "down"]}
}

const TOGGLE_WIDTH = 50 // This is not working in the way I would expect...
const TOGGLE_HEIGHT = 0 // If I don't set this to 0, the toggle hitbox interferes with elements below the toggle...

const initialKnobValues = function() {
  let knobValues = Array(31).fill(140)
  return knobValues
}

export class EricaPicoIII extends FrontPanel {
  constructor() {
    super({
      deviceName: "erica-pico-iii",
      canvasWidth: CANVAS_WIDTH,
      canvasHeight: CANVAS_HEIGHT,
      connectors: CONNECTORS,
      connectorOptions: {
        cellRadius: CELL_RADIUS,
        cableWidth: CABLE_WIDTH
      },
      knobs: KNOBS,
      knobTypes: KNOB_TYPES,
      toggles: TOGGLES,
      toggleOptions: {
        types: TOGGLE_TYPES,
        width: TOGGLE_WIDTH,
        height: TOGGLE_HEIGHT
      },
      initialValues: {
        knobValues: initialKnobValues(),
        toggleValues: Array(19).fill(0)
      },
      images: {
        panel: "/images/pico-iii/pico-iii-front.png",
        knobs: {
          small: "/images/pico-iii/pico-iii-knob-small.png"
        },
        toggles: {
          up: "/images/pico-iii/pico-iii-switch-up.png",
          down: "/images/pico-iii/pico-iii-switch-down.png",
          right: "/images/pico-iii/pico-iii-switch-right.png",
          left: "/images/pico-iii/pico-iii-switch-left.png",
          center: "/images/pico-iii/pico-iii-switch-center.png",
          centerhor: "/images/pico-iii/pico-iii-switch-center-hor.png"
        }
      }
    })
  }

}
