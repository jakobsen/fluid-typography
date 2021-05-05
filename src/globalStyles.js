import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'silkabold';
    src: url('/fonts/silka-bold-webfont.eot');
    src: url('/fonts/silka-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/silka-bold-webfont.woff2') format('woff2'),
         url('/fonts/silka-bold-webfont.woff') format('woff'),
         url('/fonts/silka-bold-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'silkaregular';
    src: url('/fonts/silka-regular-webfont.eot');
    src: url('/fonts/silka-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/silka-regular-webfont.woff2') format('woff2'),
         url('/fonts/silka-regular-webfont.woff') format('woff'),
         url('/fonts/silka-regular-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'silka_monoregular';
    src: url('/fonts/silkamono-regular-webfont.eot');
    src: url('/fonts/silkamono-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/silkamono-regular-webfont.woff2') format('woff2'),
         url('/fonts/silkamono-regular-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'silka_monosemibold';
    src: url('/fonts/silkamono-semibold-webfont.eot');
    src: url('/fonts/silkamono-semibold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/silkamono-semibold-webfont.woff2') format('woff2'),
         url('/fonts/silkamono-semibold-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

/* CSS RESET */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  font-family: 'silkaregular', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif; 
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'silkabold';
}

pre {
  font-family: 'silka_monosemibold', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; 
}

code {
  font-family: 'silka_monoregular', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; 
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

html, body {
  height: 100%;
}





`;
