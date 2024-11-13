import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    white: '#fff',
    gray: {
      10: '#f8f8f7',
      25: '#f5f4ec',
      50: '#dcdaca',
      100: '#ccc8b1',
      200: '#aba895',
      300: '#8b8878',
      400: '#7a786a',
      500: '#68665a',
      600: '#545249',
      700: '#3f3e37',
      800: '#2a2a25',
      900: '#1d1d1c',
    },
    black: '#0a0a09',
    yellow: {
      50: '#fefbe8',
      100: '#fef7c3',
      200: '#feee95',
      300: '#fde272',
      400: '#fac515',
      500: '#eaaa08',
      600: '#ca8504',
      700: '#a15c07',
      800: '#854a0e',
      900: '#713b12',
    },
    blue: {
      50: '#d5eaf3',
      100: '#b3d8e9',
      200: '#91c7df',
      300: '#6fb6d5',
      400: '#4da5cb',
      500: '#2b94c1',
      600: '#247ca2',
      700: '#1d6583',
      800: '#164d64',
      900: '#0f3545',
    },
    green: {
      50: '#f5fbee',
      100: '#e6f4d7',
      200: '#ceeab0',
      300: '#acdc79',
      400: '#86cb3c',
      500: '#669f2a',
      600: '#4f7a21',
      700: '#3f621a',
      800: '#335015',
      900: '#2b4212',
    },
    orange: {
      50: '#f8e1cd',
      100: '#f2c9a4',
      200: '#edb07c',
      300: '#e79854',
      400: '#e2802b',
      500: '#dc6803',
      600: '#b95703',
      700: '#964702',
      800: '#723602',
      900: '#4f2501',
    },
    red: {
      50: '#f4d8d3',
      100: '#ecb9b1',
      200: '#e39a8e',
      300: '#da7a6b',
      400: '#d25b48',
      500: '#c93c25',
      600: '#a9321f',
      700: '#892919',
      800: '#691f13',
      900: '#48160d',
    },
    teal: {
      50: '#ddebee',
      100: '#b2cdd3',
      200: '#90b7c0',
      300: '#6da1ac',
      400: '#4b8b99',
      500: '#297585',
      600: '#226270',
      700: '#1c505a',
      800: '#153d45',
      900: '#0f2a30',
    },
    brand: {
      50: '#ddebee',
      100: '#b2cdd3',
      200: '#90b7c0',
      300: '#6da1ac',
      400: '#4b8b99',
      500: '#297585',
      600: '#226270',
      700: '#1c505a',
      800: '#153d45',
      900: '#0f2a30',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Courier New', monospace`,
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: 'gray.800',
        fontFamily: `'Roboto', sans-serif`,
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        color: 'brand.500',
        fontFamily: `'Poppins', sans-serif`,
      },
      sizes: {
        lg: {
          fontSize: '2xl',
        },
        md: {
          fontSize: 'xl',
        },
        sm: {
          fontSize: 'lg',
        },
      },
      variants: {
        solid: {
          color: 'brand.500',
        },
        outline: {
          color: 'gray.600',
        },
      },
    },
    Highlight: {
      baseStyle: {
        bg: 'yellow.100',
        fontWeight: 'bold',
        color: 'black',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        textTransform: 'none',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.700',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
          _active: {
            bg: 'brand.100',
          },
        },
      },
    },
    Badge: {
      baseStyle: {
        fontWeight: 'normal',
        textTransform: 'none',
        paddingX: '8px',
      },
      sizes: {
        sm: {
          fontSize: '0.75rem',
          height: '18px',
        },
        md: {
          fontSize: '0.875rem',
          height: '23px',
        },
      },
      variants: {
        solid: {
          borderRadius: 'full',
        },
        outline: {
          border: '2px solid',
          borderRadius: 'md',
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tablist: {
            borderBottom: '2px solid',
            borderColor: 'gray.25',
          },
          tab: {
            borderBottom: '0px solid',
            borderColor: 'gray.25',
            color: 'gray.700',
            bg: 'gray.25',
            _selected: {
              color: 'white',
              bg: 'gray.800',
              borderBottom: '0px solid',
              borderColor: 'gray.25',
              _hover: {
                bg: 'gray.50',
                color: 'gray.700',
              },
            },
            _focus: {
              boxShadow: 'none',
            },
            _hover: {
              bg: 'gray.50',
            },
          },
          tabpanel: {
            p: 4,
            bg: 'gray.50',
            borderRadius: 'md',
          },
        },
      },
    },
  },
});

export default theme;