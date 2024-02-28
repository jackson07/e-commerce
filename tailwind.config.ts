import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '38': '150px',
        '70': '279px',
        '105': '420px',
        '120': '480px',
        '144': '576px',
      },
      width: {
        '38': '150px',
        '70': '279px',
        '120': '480px',
      },
      padding: {
        '5': '5%',
        '10': '10%',
        '15': '15%',
        '20': '20%',
        '25': '25%',
        '35': '35%',
        '40': '40%',
        '45': '45%',
        '50': '50%',
        '55': '55%',
        '60': '60%',
        '65': '65%',
        '70': '70%',
        '75': '75%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%',
        '100': '100%',
      },
      margin: {
        '5': '5%',
        '10': '10%',
        '15': '15%',
        '20': '20%',
        '25': '25%',
        '35': '35%',
        '40': '40%',
        '45': '45%',
        '50': '50%',
        '55': '55%',
        '60': '60%',
        '65': '65%',
        '70': '70%',
        '75': '75%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%',
        '100': '100%',
      },
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
      },
      inset: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
export default config
