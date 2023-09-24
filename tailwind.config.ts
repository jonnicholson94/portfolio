import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      screens: {
        'xxs': "200px",
        'xs': "300px",
        'sm': '640px',
        '2sm': '700px',
        'md': '768px',
        'nm': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        "black": "#000000",
        "white": "#ffffff",
        "paleGrey": "#e9e9e9",
        "blue": "#9EDDFF",
        "red": "#FF6969",
        "lilac": "#E5CFF7",
        "purple": "#FFA1F5",
        "salmon": "#EF9595",
        "green": "#96C291",
      },
      borderRadius: {
        'none': '0',
        'sm': '3px',
        'md': '5px',
        'lg': '10px',
        'rnd': '50%'
      },
    plugins: [],
    }
}

export default config
