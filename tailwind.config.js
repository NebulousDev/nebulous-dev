/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['IBM Plex Mono', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"']
      },
      colors: {
        'nebdev': '#5297FF',
        'deep' : '#1D1957',
        'zinc-transparent' :'rgba(9, 9, 11, 0.33)'
      }
    }
  },
  plugins: [],
}