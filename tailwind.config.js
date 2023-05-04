/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./templates/**/**/*.style.scss",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      'purple': '#473FA0',
      black: "#000",
      'dark': '#0E0E11',
      gray: {
        100: '#F8F8F8',
        300: '#DADADA',
        600 : '#B9B9BE',
        900: '#575767',
      },
      'light': '#FCFCFC',
      white: "#fff",
    },
    fontFamily: {
        'sans': ['Inter', 'sans-serif'],
    },
    fontWeight: {
      'font-medium': 500,
      'font-semibold': 600,
      'font-bold': 700,
    },
    fontSize: {
      'text-xs': 'font-size: 14px; line-height: auto;',
      'text-base': 'font-size: 18px; line-height: 18px;',
      'text-lg': 'font-size: 18px; line-height: 24px;',
      'text-xl': 'font-size: 32px; line-height: auto;',
    },
    textShadow: {
        'default': '0px 3px 7px rgba(0, 0, 0, 0.25)',
    },
    dropShadow: {
        'default': '0px 2px 8px rgba(0, 0, 0, 0.25)',
    },
    borderRadius: {
      'rounded-0': '0',
      'rounded-50': '50%',
      'rounded-6': '6px',
      'rounded-100': 'border-radius: 50% 50% 0 0 / 100% 100% 0 0;',
    },
    borderStyle: {
      'border-none': 'none',
      'border-solid': 'solid',
    },
    borderWidth: {
      'border-2': '2px',
    },
    borderColor: ({theme}) => ({
        ...theme('colors'),
        'border-purple': theme('colors.purple'),
        'border-gray': theme('colors.gray.300'),
    }),
    display: {
      'flex': 'flex',
    },
    flexDirection: {
      'flex-row': 'row',
      'flex-col': 'column',
    },
    justifyContent: {
      'justify-center': 'center',
      'justify-between': 'space-between',
      'justify-around': 'space-around',
      'justify-end': 'flex-end',
    },
    alignItems: {
      'items-center': 'center',
    },
    boxSizing: {
      'box-border': 'border-box',
    },
    backgroundColor: ({theme}) => ({
      ...theme('colors'),
      'bg-gray-100': theme('colors.gray.100'),
      'bg-gray-900': theme('colors.gray.900'),
      'bg-purple': theme('colors.purple'),
      'bg-light': theme('colors.light'),
      'bg-transparent': theme('colors.transparent'),
    }),
    margin: {
      'm-0': '0',
      'm-1.5': '5px',
      'm-2.5': '10px',
      'm-hr': 'margin: 10px 0;',
      'm-details': 'margin: 5px 0 15px 0;',
      'm-body': 'margin: 40px 30px;',
      'm-header': 'margin: 20px 0;',

      'mt-0': '0',
      'mt-1.5': '5px',
      'mt-2.5': '10px',
      'mt-6': '25px',

      'ml-2.5': '10px',
    },
    padding: {
      'p-0': '0',
      'p-form': 'padding: 7px 0;',
    },
    width: {
      'w-6': '24px',
      'w-9': '35px',
      'w-full': '100%',
    },
    height: {
      'h-6': '24px',
      'h-9': '35px',
      'h-20': '10vh',
    },
    cursor: {
      'cursor-pointer': 'pointer',
    },
    extend: {},
  },
  plugins: [],
}

