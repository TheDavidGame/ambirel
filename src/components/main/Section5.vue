<template>
  <div class="section-5">
    <img class="rect" src="../../assets/images/section-5/rect-left.png" alt="">

    <div class="form">
      <p class="header red-hat black">Заполните форму</p>

      <div class="input name">
        <label class="red-hat" for="name">имя:</label>

        <input class="red-hat" name="name" type="text" placeholder="ИМЯ" v-model="name">
      </div>

      <div class="input email">
        <label class="red-hat" for="email">почта:</label>

        <input class="red-hat" name="email" type="text" placeholder="ПОЧТА" v-model="email">
      </div>

      <div class="input review">
        <label class="red-hat" for="review">комментарий:</label>

        <textarea class="red-hat" name="review" placeholder="КОММЕНТАРИЙ" rows="4" v-model="review" />
      </div>

      <div class="check">
        <div @click="checked = !checked" :class="{ checked }" />

        <p class="text roboto light">Заполняя форму на сайте, Вы соглашаетесь с нашей <a>политикой конфиденциальности.</a></p>
      </div>

      <button class="send red-hat medium">Отправить</button>
    </div>

    <img class="ball b-1" src="../../assets/images/balls/ball-6.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      review: '',
      checked: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-5 {
  position: relative;

  min-height: 1080px;

  padding: 143px 180px 0 0;

  display: flex;
  justify-content: flex-end;

  z-index: 1;
}

.rect {
  position: absolute;

  width: 959px;
  height: 1079px;

  left: 0;
  top: 0;

  pointer-events: none;

  z-index: -1;
}

.form {
  width: 47%;

  display: flex;
  flex-direction: column;
}

.form .header {
  font-size: 72px;
  line-height: 95px;
  text-transform: capitalize;

  color: #C8C49C;

  text-align: center;
}

.form .input.name {
  margin-top: 110px;
}

.form .input.email {
  margin-top: 28px;
}

.form .input.review {
  margin-top: 32px;
}

.form .input label {
  font-size: 22px;
  line-height: 99%;

  letter-spacing: 0.02em;

  color: #FFFFFF;
}

.form .input textarea,
.form .input input {
  outline: none;

  background: #CDCDCD;

  border: none;
  border-radius: 0;

  width: 100%;

  font-size: 16px;
  line-height: 99%;

  letter-spacing: 0.02em;

  color: rgba(0, 0, 0, 0.35);

  margin-top: 11px;

  padding: 22px 36px;
}

.form .input input {
  height: 58px;
}

.form .check {
  margin-top: 48px;

  display: flex;

  width: 505px;
  max-width: 100%;
}

.form .check div {
  margin-top: 7px;

  min-width: 24px;
  width: 24px;
  height: 22px;

  background: url('../../assets/images/section-5/not-checked.png');
}

.form .check div.checked {
  background: url('../../assets/images/section-5/checked.png');
}

.form .text {
  margin-left: 14px;

  font-size: 18px;
  line-height: 21px;
}

.form .text a {
  color: #D9CE68;
}

.form .send {
  margin: 48px auto 0;

  width: 315px;
  height: 65px;

  background: #404040;
  border: 1px solid #2B2B2B;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.49);

  font-size: 24px;
  line-height: 99%;

  letter-spacing: 0.02em;

  color: #C8C49C;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;

  cursor: pointer;

  transition: all .2s;
}

.form .send:hover {
  border-color: #C8C49C;
  background: #C8C49C;
  color: #ffffff;
}

.ball {
  position: absolute;
}

.b-1 {
  width: 256px;
  height: 487px;

  bottom: -136px;
  right: 0;

  z-index: -1;
}

@media screen and (max-width: 1760px) {
  .section-5 {
    padding-right: 68px;
    padding-left: 68px;
  }

  .rect {
    left: -170px;
  }
}

@media screen and (max-width: 1440px) {
  .rect {
    left: -370px;
  }

  .form .header {
    font-size: 58px;
  }

  .form .input.name {
    margin-top: 60px;
  }
}

@media screen and (max-width: 1150px) {
  .section-5 {
    justify-content: center;
  }

  .form {
    width: 60%;
  }

  .rect {
    left: -670px;
  }
}

@media screen and (max-width: 970px) {
  .rect {
    display: none;
  }

  .form {
    width: 100%;
  }
}
</style>
