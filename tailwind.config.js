/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
      extend: {
          fontSize: {
              blogIntroTitle: 'clamp(1rem, 4vw + 1rem , 7rem)',
              blogIntroSubtitle: 'clamp(0.8rem, 1.5vw + 0.1rem , 3rem)',

              blogSnippetTitle: 'clamp(1rem, 1vw + 1rem , 7rem)',
              blogSnippetSubtitle: 'clamp(0.8rem, 1vw + 0.3rem , 3rem)',

              monthIntroTitle: 'clamp(1rem, 4vw + 1rem , 7rem)',
              monthIntroSubtitle: 'clamp(0.8rem, 1.5vw + 0.1rem , 3rem)',

              button: 'clamp(0.8rem, 2vw + 0.1rem , 2rem)',

              bigBlogSnippetTitle: 'clamp(1rem, 4vw + 1rem , 7rem)',
              bigBlogSnippetContent: 'clamp(1rem, 0.5vw + 1rem , 3rem)',
              smallBlogSnippetTitle: 'clamp(1rem, 1vw + 1rem , 7rem)',
          },
          fontFamily: {
              custom: ['VT323', 'sans-serif'],
              custom2: ['Tilt Prism', 'sans-serif'],
          },
          colors: {
              'blog-color': '#9FC8C7',
              'blog-color2': '#9FB4C8',

              'snippet-color': '#D9D9D9',
              'button-color': '#E2A667',
              'nav-bar-color': '#C79FC8',
              'test-hover-color': '#A77BA2',
              'small-snippet-color': '#D9D9D9',

              'white-color': '#D9D9D9',
          },
      },
  },
  plugins: [],
}
