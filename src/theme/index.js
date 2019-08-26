/* Colors */
const colors = {
  primary: {
    carbon: '#222222',
    slateGrey: '#383E54',
    endpointBlue: '#0084B4',
    turquoise: '#00A7B4',
    paleGrey: '#F4F5F7'
  },
  secondary: {
    watermelon: '#ED5564',
    tangerine: '#F46600',
    marigold: '#ED9E00',
    aloe: '#69C423',
    aqua: '#00BBB7',
    mist: '#C2CED7',
    air: '#E5F2F7',
    stone: '#858585',
    smoke: '#A2A2A2',
    doveGrey: '#C5C5C5',
    cloud: '#F0F0F0'
  },
  white: '#fff',
  black: '#000'
};

const {
  primary: { endpointBlue, turquoise },
  white
  // code: { func, keyword, background, comment, operator, string, punctuation }
} = colors;

/* Typography */
// const fonts = {
//   body: 'system-ui, sans-serif',
//   heading: '"Avenir Next", sans-serif',
//   monospace: 'Menlo, monospace'
// };

// const heading = {
//   fontFamily: 'heading',
//   // lineHeight: 'heading', // not defined in lineHeight values, only solid, title, and copy
//   fontWeight: 'heading'
// };

// const body = {
//   fontFamily: 'body',
//   fontWeight: 'body'
// };

/* Main Theme */

export default {
  border: {
    primary: `1px solid ${endpointBlue}`,
    secondary: `1px solid ${turquoise}`
  },
  bg: {
    primary: endpointBlue,
    secondary: turquoise
  },
  breakpoints: [32, 48, 64],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 18, 22, 36, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: endpointBlue,
    secondary: turquoise,
    modes: {
      //
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#f0e',
        gray: '#222',
        lightgray: '#111'
      }
    }
  },
  lineHeights: {
    solid: 1,
    heading: 1.25,
    body: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  /* Variants */
  /* Move into separate file later */
  buttons: {
    primary: {
      color: white,
      bg: 'primary',
      border: 'none'
    },
    secondary: {
      color: white,
      bg: 'secondary',
      border: 'none'
    }
  },
  buttonSize: {
    small: 0,
    medium: 1,
    large: 2
  }
  // not being applied as base styles for some reason in markdown file
  // styles: {
  //   h1: {
  //     ...heading,
  //     fontSize: [5, 4]
  //   },
  //   h2: {
  //     ...heading,
  //     fontSize: [4, 3]
  //   },
  //   h3: {
  //     ...heading,
  //     fontSize: [3, 2]
  //   },
  //   h4: {
  //     ...heading,
  //     fontSize: [2, 1]
  //   },
  //   p: {
  //     ...body,
  //     fontSize: 1
  //   }
  // }
};
