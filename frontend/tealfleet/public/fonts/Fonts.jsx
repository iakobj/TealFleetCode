import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Rubik';
        font-stretch: 0;
        src: url('../public/fonts/Rubik-VariableFont_wght.ttf') format('truetype');
      }
      body {
        font-family: 'Rubik', sans-serif;
      }
      `}
  />
);

export default Fonts;
