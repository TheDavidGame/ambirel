<template>
  <div class="footer-menu">
    <div class="block">
      <p class="header red-hat black">MOBILE</p>

      <p class="link red-hat" @click="$emit('print', mobile1)">ARDUINO</p>
      <p class="link red-hat" @click="$emit('print', mobile2)">ЛЭП</p>
      <p class="link red-hat" @click="$emit('print', mobile3)">SUSHI</p>
    </div>

    <div class="block">
      <p class="header red-hat black">WEB</p>

      <p class="link red-hat" @click="$emit('print', web1)">SLICEPOINT</p>
    </div>

    <div class="block">
      <p class="header red-hat black">DESKTOP</p>

      <p class="link red-hat" @click="$emit('print', desktop1)">COSMO</p>
      <p class="link red-hat" @click="$emit('print', desktop2)">ROSBANK</p>
      <p class="link red-hat" @click="$emit('print', desktop3)">INDUSTRY</p>
    </div>

    <div class="block">
      <p class="header red-hat black">AR</p>

      <p class="link red-hat" @click="$emit('print', ar1)">HOLOLENS</p>
    </div>

    <div class="block">
      <p class="header red-hat black">SAFETY</p>

      <p class="link red-hat" @click="$emit('print', safety1)">DHCP</p>
      <p class="link red-hat" @click="$emit('print', safety2)">GUI</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile1: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      mobile2: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      mobile3: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      web1: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      desktop1: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      desktop2: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      desktop3: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      ar1: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      safety1: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      },
      safety2: {
        all: [
          {
            name: '1 разработчик',
            rate: 1500,
            count: 10
          }
        ],
        corrections: {
          rate: 500,
          count: 5
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-menu {
  display: flex;
  justify-content: space-between;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block .header {
  margin-bottom: 20px;
}

.block .link {
  margin-top: 2px;

  height: 25px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-bottom: 0 solid #ffffff;

  transition: all .2s;
}

.block .link:hover {
  border-width: 1px;
}
</style>
