<template>
  <div class="calculate">
    <router-link to="/" class="main red-hat medium">Вернуться</router-link>

    <div v-if="!result" class="question">
      <p class="header roboto black">Вопрос</p>

      <div class="answers">
        <p class="answer roboto bold" @click="answer">Ответ 1</p>
        <p class="answer roboto bold" @click="answer">Ответ 2</p>
        <p class="answer roboto bold" @click="answer">Ответ 3</p>
      </div>
    </div>

    <div v-if="result" class="result">
      <p class="load roboto black">Загрузите среднестатистический расчет</p>

      <p class="download roboto medium">Загрузить</p>

      <label class="roboto medium" for="email">Укажите Ваш E-mail и мы свяжемся с Вами</label>
      <input class="email roboto medium" name="email" type="text">

      <p class="send roboto medium">Отправить</p>
    </div>

    <p class="back roboto medium">Назад</p>

    <img class="ball b-1" src="../assets/images/balls/ball-6.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: false
    }
  },
  methods: {
    answer () {
      this.result = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #B6B4A7;

  text-decoration: none;
}

label {
  color: #ffffff;
}

.calculate {
  padding: 61px 68px 0;
}

.result .download,
.result .send,
.back,
.main {
  font-size: 22px;
  line-height: 152%;

  color: #C8C49C;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;

  cursor: pointer;

  transition: all .2s;

  border: 2px solid #C8C49C;
}

.result .download:hover,
.result .send:hover,
.back:hover,
.main:hover {
  background: #C8C49C;
  color: #ffffff;
}

.result,
.question {
  margin-top: 21px;

  padding: 0 11px;

  position: relative;

  z-index: 1;
}

.result .load,
.question .header {
  font-size: 24px;
  line-height: 148%;

  text-transform: uppercase;

  color: #ffffff;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.question .answers {
  margin-top: 11px;
}

.question .answer {
  display: flex;
  align-items: center;

  min-height: 40px;

  padding: 11px 30px 11px 16px;

  background: #B6B4A7;

  border-radius: 6px;

  margin-top: 11px;

  cursor: pointer;

  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.95);

  transition: all .2s;
}

.question .answer:first-child {
  margin-top: 0;
}

.question .answer:hover {
  background: #C8C49C;
}

.back {
  margin-top: 41px;
}

.ball {
  position: absolute;
}

.b-1 {
  width: 256px;
  height: 487px;

  bottom: 136px;
  right: 0;

  pointer-events: none;
}

.result {
  padding-left: 0;
  padding-right: 0;
}

.result .load {
  font-size: 20px;

  word-wrap: break-word;
}

.result .email,
.result .download,
.result .send {
  margin-top: 11px;
}

.result .download {
  margin-bottom: 41px;
}

.result .email {
  display: block;

  border: 0;
  background: 0;
  text-decoration: none;
  outline: none;

  width: 240px;

  text-align: center;
  color: #ffffff;

  border-bottom: 2px solid #C8C49C;
}

@media screen and (max-width: 650px) {
  .calculate {
    padding-left: 28px;
    padding-right: 28px;
  }

  .result {
    text-align: center;
  }

  .result .email,
  .result .download,
  .result .send,
  .main,
  .back {
    width: 100%;
  }
}
</style>
