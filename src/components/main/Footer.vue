<template>
  <div class="footer">
    <footer-menu
      @print="$emit('print', $event)" />

    <jurist-info />
  </div>
</template>

<script>
import FooterMenu from '../options/FooterMenu'
import JuristInfo from '../options/JuristInfo'

export default {
  components: {
    'footer-menu': FooterMenu,
    'jurist-info': JuristInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding: 80px 150px 53px;

  background: #0D1012;
}

.footer .footer-menu {
  width: 1030px;
  max-width: 100%;

  margin: 0 auto;
}

.footer .jurist-info {
  margin-top: 100px;
}

@media screen and (max-width: 1790px) {
  /deep/ .jurist-info .info {
    flex-direction: column;
  }

  /deep/ .jurist-info .info > * {
    margin-top: 10px;
  }

  /deep/ .jurist-info .info > *:first-child {
    margin-top: 0;
  }
}

@media screen and (max-width: 1360px) {
  .footer {
    padding: 68px;
  }
}

@media screen and (max-width: 650px) {
  .footer-menu {
    flex-direction: column;
  }

  /deep/ .footer-menu .block {
    margin-top: 30px;
  }

  /deep/ .footer-menu .block .header {
    margin-bottom: 7px;
  }

  /deep/ .jurist-info .info > * {
    white-space: initial;
  }
}
</style>
