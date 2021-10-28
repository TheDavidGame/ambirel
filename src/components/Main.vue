<template>
  <div ref="main" class="main">
    <nav-menu
      @go="goTo" />

    <section-1
      ref="section-1" />
    <section-2
      ref="section-2" />
    <section-3
      ref="section-3"
      @print="print" />
    <section-4
      ref="section-4" />
    <section-5
      ref="section-5" />

    <footer-el
      ref="footer"
      @print="print" />

    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="99999"
      filename="project"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-orientation="portrait"
      pdf-content-width="588px"

      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <print-el
          :rates="rates" />
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import NavMenu from './options/NavMenu'
import Section1 from './main/Section1'
import Section2 from './main/Section2'
import Section3 from './main/Section3'
import Section4 from './main/Section4'
import Section5 from './main/Section5'
import Footer from './main/Footer'
import Print from './options/Print'

import VueHtml2pdf from 'vue-html2pdf'

export default {
  data () {
    return {
      rates: {
        all: [],
        corrections: {
          rate: 0,
          count: 0
        }
      }
    }
  },
  methods: {
    goTo (el) {
      this.$refs.main.scrollTop = this.$refs[el].$el.offsetTop
    },
    print (e) {
      this.rates = e

      this.$nextTick(() => this.$refs.html2Pdf.generatePdf())
    }
  },
  components: {
    'nav-menu': NavMenu,
    'section-1': Section1,
    'section-2': Section2,
    'section-3': Section3,
    'section-4': Section4,
    'section-5': Section5,
    'footer-el': Footer,
    VueHtml2pdf,
    'print-el': Print
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
