// Spacing method
const rhythm = (value = 1, unit = 'rem', basis = 1.5) =>
  Array.isArray(value)
    ? value.map(v => `${basis * v}${unit}`).join(' ')
    : `${basis * value}${unit}`;

const colors = {
  primary: {
    carbon: '#222222',
    slateGrey: '#383E54',
    endpointBlue: '#0084B4',
    turquoise: '#00A7B4',
    paleGrey: '#F4F5F7',
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
    cloud: '#F0F0F0',
  },
  code: {
    func: '#fac863',
    keyword: '#c594c5',
    background: '#1b2b34',
    comment: '#65737e',
    operator: '5fb3b3',
    string: '#99c794',
    punctuation: '#5fb3b3',
  },
  light: '#fff',
  dark: '#000',
  grey: '#7a898f',
  lightGrey: '#aec0c6',
  paleGrey: '#ebf1f3',
  tertiary: '#203a44',
  danger: '#d9534f',
};

const {
  code: { func, keyword, background, comment, operator, string, punctuation },
} = colors;

// Styleguidist theme
const theme = {
  color: {
    baseBackground: colors.light,
    border: colors.paleGrey,
    // codeBackground: colors.paleGrey,
    error: colors.danger,
    light: colors.grey,
    lightest: colors.lightGrey,
    name: colors.primary.endpointBlue,
    type: colors.secondary.watermelon,
    base: colors.dark,
    link: colors.primary.endpointBlue,
    linkHover: colors.tertiary,
    sidebarBackground: colors.primary.endpointBlue,
    /* Customized editor styles */
    codeBase: colors.light,
    codeBackground: background,
    codeComment: comment,
    codeDeleted: 'red', // not working
    codeFunction: func,
    codeInserted: 'red', // not working
    codeKeyword: keyword, // function, export, default, class, extends keywords
    codeOperator: operator,
    codePunctuation: punctuation,
    codeProperty: 'red', // not working
    codeString: string,
    codeVariable: 'red', // not working
  },
  fontFamily: {
    base:
      '"proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    monospace: 'dm, Consolas, "Liberation Mono", Menlo, monospace',
  },
  fontSize: {
    base: 15,
    text: 16,
    small: 13,
    h1: 38,
    h2: 32,
    h3: 18,
    h4: 18,
    h5: 16,
    h6: 16,
  },
  maxWidth: 780,
  sidebarWidth: 240,
};

// Styleguidist styles
const styles = {
  ComponentsList: {
    heading: {
      fontWeight: '700 !important',
    },
  },
  Heading: {
    heading1: {
      display: 'block',
      position: 'relative',
      paddingBottom: rhythm(0.75),
      marginBottom: rhythm(0.75),
      fontWeight: 700,
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: rhythm(3),
        height: '4px',
        backgroundColor: colors.primary.endpointBlue,
        borderRadius: '4px',
      },
      '& > a': {
        fontWeight: '700 !important',
      },
    },
    heading2: {
      marginBottom: rhythm(0.5),
      fontWeight: 'bold',
    },
    heading3: {
      borderBottom: `thin solid ${colors.lightGrey}`,
      paddingBottom: rhythm(0.25),
      marginBottom: rhythm(1),
      textTransform: 'uppercase',
      fontWeight: '700',
    },
  },
  // Sidebar - list of links
  Link: {
    link: {
      color: `${colors.light} !important`,
    },
  },
  Logo: {
    logo: {
      color: 'red',
      backgroundColor: 'red',
    },
  },
  ReactComponent: {
    root: {
      borderBottom: '5px dashed #0084B4',
      paddingBottom: '20px',

      '&:last-of-type': {
        borderBottom: 'none',
      },
    },
    tabs: {
      backgroundColor: colors.paleGrey,
      padding: rhythm([0.5, 1]),
      overflow: 'auto',
    },
    tabButtons: {
      marginBottom: 0,
    },
  },
  SectionHeading: {
    sectionName: {
      display: 'block',
      paddingTop: `${rhythm(1)} !important`,
      textDecoration: 'none !important',
      '&:hover': {
        opacity: 0.75,
      },
    },
  },
  StyleGuide: {
    content: {
      paddingTop: rhythm(2.5),
      '@media (max-width: 600px)': {
        padding: rhythm(1),
      },
    },
    logo: {
      // Refactored to target elements because classes are hashed in prod build
      borderBottom: 'none',
      display: 'block',
      color: colors.light,
      padding: rhythm(0.5),
      fontSize: theme.fontSize.h3,
      fontFamily: theme.fontFamily.base,
      transition: 'all 250ms ease',
      '& a': {
        cursor: 'pointer',
        '&:visited': {
          color: colors.light,
        },
        '&:after, &:hover:after': {
          content: '"\\2197"',
          position: 'absolute',
          top: 0,
          right: 0,
          padding: rhythm(0.5),
          opacity: 0.25,
          transition: 'all 250ms ease',
          cursor: 'pointer',
        },
        '&:hover:after': {
          opacity: 0.75,
          color: colors.dark,
        },
        '& span, & em': {
          display: 'inline-block',
          verticalAlign: 'middle',
          pointerEvents: 'none',
        },
        '& span': {
          fontWeight: 700,
        },
        '& em': {
          marginLeft: rhythm(0.25),
          opacity: 0.5,
        },
      },
    },
  },
  TabButton: {
    button: {
      width: '100%',
    },
    isActive: {
      border: 0,
    },
  },
  Table: {
    table: {
      marginTop: rhythm(0.5),
      marginBottom: rhythm(0.5),
      minWidth: '600px',
    },
    cellHeading: {
      borderBottom: `thin solid ${colors.lightGrey}`,
    },
    cell: {
      paddingBottom: 0,
      '& p': {
        marginBottom: `${rhythm(0.125)} !important`,
      },
      '& div[class*="para"]': {
        marginBottom: `${rhythm(0.125)} !important`,
      },
    },
  },
};

module.exports = {
  styles: styles,
  theme: theme,
};
