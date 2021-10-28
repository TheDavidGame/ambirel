<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    if (document.documentElement.clientWidth < 550) {
      document.head.children.viewport.content = 'width=device-width,initial-scale=0.7'
    }
  }
}
</script>

<style>
body,
html {
  background-color: #181D21;

  height: 100%;
  width: 100%;

  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

p,
span {
  margin: 0;
  padding: 0;

  color: #fff;
}

#app {
  height: 100%;
}

::-webkit-scrollbar {
  width: 1em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
::-webkit-scrollbar-thumb {
  background-color: #C8C49C;
  outline: 1px solid slategrey;
}

.roboto {
  font-family: 'Roboto';
}

.roboto.thin {
  font-weight: 100;
}

.roboto.light {
  font-weight: 300;
}

.roboto.medium {
  font-weight: 500;
}

.roboto.bold {
  font-weight: 700;
}

.roboto.black {
  font-weight: 900;
}

.roboto.black.italic {
  font-style: italic;
}

.ravi-prakash {
  font-family: 'Ravi Prakash', 'Roboto';
}

.red-hat {
  font-family: 'Red Hat Display', 'Roboto';
}

.red-hat.medium {
  font-weight: 500;
}

.red-hat.bold {
  font-weight: 700;
}

.red-hat.black {
  font-weight: 900;
}

/* Red Hat Display */
@font-face {
  font-family: 'Red Hat Display';
  src: url('./assets/fonts/RedHatDisplay/RedHatDisplay-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Red Hat Display';
  src: url('./assets/fonts/RedHatDisplay/RedHatDisplay-Medium.ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'Red Hat Display';
  src: url('./assets/fonts/RedHatDisplay/RedHatDisplay-Bold.ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Red Hat Display';
  src: url('./assets/fonts/RedHatDisplay/RedHatDisplay-Black.ttf');
  font-weight: 900;
}

/* Ravi Prakash */
@font-face {
  font-family: 'Ravi Prakash';
  src: url('./assets/fonts/RaviPrakash/RaviPrakash-Regular.ttf');
  font-weight: 400;
}

/* Roboto */
@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-Thin.ttf');
  font-weight: 100;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-Light.ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-Medium.ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-Black.ttf');
  font-weight: 900;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-BlackItalic.ttf');
  font-weight: 900;
  font-style: italic;
}
</style>
