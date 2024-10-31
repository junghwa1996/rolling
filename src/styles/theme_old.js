const fontTheme = {
  // ${({ theme }) => theme.fontTheme["28Bold"]}

  '28Bold': {
    fontWeight: '700',
    fontSize: '2.8rem',
    lineHeight: '4.2rem',
    letterSpacing: '-0.01rem',
  },

  '24Bold': {
    fontWeight: '700',
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    letterSpacing: '-0.01rem',
  },

  '24Regular': {
    fontWeight: '400',
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    letterSpacing: '-0.01rem',
  },

  '20Bold': {
    fontWeight: '700',
    fontSize: '2rem',
    lineHeight: '3rem',
    letterSpacing: '-0.01rem',
  },

  '20Regular': {
    fontWeight: '400',
    fontSize: '2rem',
    lineHeight: '3rem',
    letterSpacing: '-0.01rem',
  },

  '18Bold': {
    fontWeight: '700',
    fontSize: '1.8rem',
    lineHeight: '2.8rem',
    letterSpacing: '-0.01rem',
  },

  '18Regular': {
    fontWeight: '400',
    fontSize: '1.8rem',
    lineHeight: '2.8rem',
    letterSpacing: '-0.01rem',
  },

  '16Bold': {
    fontWeight: '700',
    fontSize: '1.6rem',
    lineHeight: '2.6rem',
    letterSpacing: '-0.01rem',
  },

  '16Regular': {
    fontWeight: '400',
    fontSize: '1.6rem',
    lineHeight: '2.6rem',
    letterSpacing: '-0.01rem',
  },

  '15Bold': {
    fontWeight: '700',
    fontSize: '1.5rem',
    lineHeight: '2.2rem',
    letterSpacing: '-0.01rem',
  },

  '15Regular': {
    fontWeight: '400',
    fontSize: '1.5rem',
    lineHeight: '2.2rem',
    letterSpacing: '-0.01rem',
  },

  '14Bold': {
    fontWeight: '700',
    fontSize: '1.4rem',
    lineHeight: '2rem',
    letterSpacing: '-0.005rem',
  },

  '14Regular': {
    fontWeight: '400',
    fontSize: '1.4rem',
    lineHeight: '2rem',
    letterSpacing: '-0.005rem',
  },

  '12Regular': {
    fontWeight: '400',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    letterSpacing: '-0.005rem',
  },
};

const colorTheme = {
  // ${({ theme }) => theme.colorTheme.purple[500]}
  purple: {
    100: '#F8F0FF',
    200: '#ECD9FF',
    300: '#DCB9FF',
    400: '#C894FD',
    500: '#AB57FF',
    600: '#9935FF',
    700: '#861DEE',
    800: '#6E0AD1',
    900: '#5603A7',
  },

  beige: {
    100: '#FFF0D6',
    200: '#FFE2AD',
    300: '#FFC583',
    400: '#FFAE65',
    500: '#FF8832',
  },

  blue: {
    100: '#E2F5FF',
    200: '#B1E4FF',
    300: '#7CD2FF',
    400: '#34B9FF',
    500: '#00A2FE',
  },

  green: {
    100: '#E4FBDC',
    200: '#D0F5C3',
    300: '#9BE282',
    400: '#60CF37',
    500: '#2BA600',
  },

  grayscale: {
    100: '#F6F6F6',
    200: '#EEEEEE',
    300: '#CCCCCC',
    400: '#999999',
    500: '#555555',
    600: '#4A4A4A',
    700: '#3A3A3A',
    800: '#2B2B2B',
    900: '#181818',
  },

  white: '#FFFFFF',
  black: '#000000',
  error: '#DC3A3A',
  surface: '#F6F8FF',
};

//NOTE - shadowTheme 이름 명명
//shadow(x-offset)_(y-offset)_(opacity)
//ex) shadow0_1_02: '0px 1px 3px rgba(0, 0, 0, 0.2)', // x-offset: 1px, y-offset: 3px, opacity: 0.2

const shadowTheme = {
  shadow0_2_008: '0rem 0.2rem 1.2rem rgba(0, 0, 0, 0.08)',
  shadow0_4_008: '0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.08)',
};

//NOTE - blurTheme 이름 명명
//blur(rem)
//ex) blur04: 'blur(0.4rem)'

const blurTheme = {
  blur04: 'blur(0.4rem)',
};

//NOTE theme 사용방법
// ex) ${({ theme }) => theme.fontTheme['20Bold']};
// ex) color: ${({ theme }) => theme.colorTheme.purple[500]};

const theme = {
  fontTheme,
  colorTheme,
  shadowTheme,
  blurTheme,
};

export default theme;
