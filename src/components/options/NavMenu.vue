<template>
  <div :class="{ opened }" class="nav-menu">
    <div class="burger" @click="opened = !opened" />

    <div class="main">
      <span class="header red-hat black" @click="$emit('go', 'section-1')" />

      <div class="links">
        <span class="link ravi-prakash" @click="$emit('go', 'section-2')">Наши услуги</span>
        <span class="link ravi-prakash" @click="$emit('go', 'section-3')">Проекты</span>
        <span class="link ravi-prakash" @click="$emit('go', 'section-4')">Команда</span>
        <span class="link ravi-prakash" @click="$emit('go', 'section-5')">Форма</span>
        <span class="link ravi-prakash" @click="$emit('go', 'footer')">Контакты</span>
        <router-link class="link ravi-prakash" to="/calculate">Рассчитать</router-link>
      </div>
    </div>

    <div class="contacts">
      <img class="telegram" src="../../assets/images/menu/telegram.png" alt="">
      <img class="phone" src="../../assets/images/menu/phone.png" alt="">

      <div class="number red-hat">+8 926 887 55 78</div>
    </div>

    <div class="open-menu" />

    <div class="close" @click="opened = !opened" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-menu {
  padding: 25px 146px 0 150px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  top: 0;
  left: 0;

  z-index: 2;
}

.nav-menu .main {
  display: flex;
  align-items: center;

  width: 100%;
}

.nav-menu .header {
  font-size: 36px;
  line-height: 48px;
}

.nav-menu .header::before {
  content: 'A';
  color: #ffffff;
}

.nav-menu .header::after {
  content: 'S';
  color: #C8C49C;
}

.nav-menu .links {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-left: 147px;
}

.nav-menu .contacts .number,
.nav-menu .links .link {
  color: #B6B4A7;
}

.nav-menu .links .link {
  font-size: 18px;
  line-height: 29px;

  white-space: nowrap;

  cursor: pointer;

  text-decoration: none;
}

.nav-menu .links .link:first-child {
  margin-left: 0;
}

.nav-menu .contacts {
  width: 263px;

  display: flex;
  align-items: center;

  margin-left: 38px;
}

.nav-menu .contacts .telegram {
  width: 26px;
  height: 26px;
}

.nav-menu .contacts .phone {
  width: 31px;
  height: 31px;

  margin-left: 28px;
}

.nav-menu .contacts .number {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.065em;

  margin-left: 17px;

  white-space: nowrap;
}

.open-menu {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #2B2B2B;

  z-index: -1;

  display: none;
}

.burger {
  position: absolute;

  background-image: url('../../assets/images/menu/burger.png');
  background-size: 100%;
  background-repeat: no-repeat;

  width: 40px;
  height: 40px;

  top: 68px;
  right: 68px;

  cursor: pointer;

  display: none;
}

.close {
  position: absolute;

  background-image: url('../../assets/images/menu/close.png');
  background-size: 100%;
  background-repeat: no-repeat;

  width: 34px;
  height: 34px;

  top: 68px;
  right: 68px;

  cursor: pointer;

  display: none;
}

@media screen and (max-width: 1650px) {
  .nav-menu {
    padding-left: 68px;
    padding-right: 68px;
  }
}

@media screen and (max-width: 1140px) {
  .nav-menu .links {
    margin-left: 38px;
  }
}

@media screen and (max-width: 1000px) {
  .nav-menu {
    flex-direction: column;
    align-items: flex-start;

    padding-top: 50px;
  }

  .opened.nav-menu {
    height: 90%;
  }

  .nav-menu .main {
    flex-direction: column;
    align-items: flex-start;

    display: none;
  }

  .nav-menu .links {
    margin-top: 30px;
    margin-left: 0;

    flex-direction: column;

    align-items: flex-start;
  }

  .nav-menu .links .link {
    margin-top: 18px;

    font-size: 28px;
  }

  .nav-menu .contacts {
    margin-left: 0;

    display: none;
  }

  .nav-menu:not(.opened) .burger {
    display: block;
  }

  .opened .open-menu {
    display: block;
  }

  .opened .main {
    display: block;
  }

  .opened .contacts {
    display: flex;
  }

  .opened .close {
    display: block;
  }
}
</style>
