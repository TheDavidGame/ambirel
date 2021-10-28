<template>
  <div class="print">
    <img class="balls b-1" src="../../assets/images/print/balls-1.png" alt="">

    <div class="main">
      <p class="commerc roboto black">Коммереское предложение</p>

      <p class="ambirel red-hat black">ambirel</p>
      <p class="software red-hat black">software</p>

      <p class="bonus roboto light">Ваш бонус за обращение к нам в виде<br>десяти бесплатных книг находится<br>в конце нашего документа</p>

      <p class="common roboto black">Общие сведения</p>
      <p class="common-info roboto thin">Данные, представленные в данном документе,<br>примерные (Сроки/Стоимость).<br>Вся работа может быть представлена в виде 3-х<br>этапов (не более 5-и). Тематика и задачи этапов<br>определяются заранее. Оплата проекта<br>происходит по результату каждого из этапов.<br>Сумма авансовой выплаты составляет<br>не менее 25% от общей стоимости проекта.<br>Сумма авансовой выплаты<br>может быть обсуждена дополнительно.</p>
    </div>

    <div class="calc">
      <p class="header roboto black">Финансовый расчёт проекта</p>

      <div class="table">
        <div class="headers">
          <p class="header roboto black">ПОЗИЦИЯ СПЕЦИАЛИСТА</p>
          <p class="header roboto black">СТАВКА СПЕЦИАЛИСТА</p>
          <p class="header roboto black">ЧАСЫ</p>
          <p class="header roboto black">СУММА</p>
        </div>

        <div class="rows">
          <div class="row" v-for="rate in rates.all">
            <p class="roboto thin">{{ rate.name }}</p>
            <p class="roboto thin">{{ rate.rate }}</p>
            <p class="roboto thin">{{ rate.count }}</p>
            <p class="roboto thin">{{ rate.rate * rate.count }}</p>
          </div>
        </div>
      </div>

      <div class="corrections">
        <div class="plus">
          <img src="../../assets/images/print/plus.png" alt="">
        </div>

        <div class="row">
          <p class="roboto thin">Правки</p>
          <p class="roboto thin">{{ rates.corrections.rate }}</p>
          <p class="roboto thin">{{ rates.corrections.count }}</p>
          <p class="roboto thin">{{ rates.corrections.rate * rates.corrections.count }}</p>
        </div>
      </div>

      <div class="tooltip roboto thin">Итоговая сумма указана с учетом налоговой нагрузки в 6% и маржинальной надбавкой<br>сверх себестоимости (маржи).</div>

      <div class="total sum">
        <p class="text roboto thin">Итоговая сумма</p>

        <p class="count roboto italic black">{{ sum }}</p>
      </div>

      <div class="total days">
        <p class="text roboto thin">Сроки</p>

        <p class="count roboto italic black">{{ days }} дней</p>
      </div>
    </div>

    <div class="surprise">
      <p class="header roboto black">Подарок для<br>вас !</p>

      <p class="info roboto thin">Созвонимся в скайпе ? Мы покажем как устроена работа с<br>нами. В каких программах мы работаем и через<br>какие процессы проходят заказчики. Обсудим ваш проект. И по<br>итогу наш тех. специалист составит вам чек-лист который<br>поможет вам при выборе подрядчика. В чек листе укажем<br>рекомендации по вашему проекту, какие технологии (стек<br>разработки) лучше использовать. Общение со специалистом<br>займёт минут 8-15.</p>

      <p class="coupon roboto thin">Купон на литрес:<span class="roboto medium"> NB131</span></p>
    </div>

    <img class="b-2" src="../../assets/images/print/balls-2.png" alt="">

    <div class="optional">
      <p class="header roboto black">Что ещё мы вам<br>предоставим ?</p>

      <div class="blocks">
        <div class="block">
          <p class="h roboto black">Отчётность.</p>

          <p class="c roboto thin">При старте работ, мы пригласим вас <br>наш аккаунт на <span class="roboto bold">GitHub</span>. Это сервис, на<br>котором вы сможете отслеживать<br>прогресс написания кода.</p>
        </div>

        <div class="block">
          <p class="h roboto black">Разработка ТЗ</p>

          <p class="c roboto thin">При заключении договора мы составим<br>техническое задание для вас.</p>
        </div>

        <div class="block">
          <p class="h roboto black">Ревью<br>разработанной<br>программы</p>

          <p class="c roboto thin">Мы будем работать по ТЗ, но по ходу<br>разработки всегда возникают идеи того,<br>как можно улучшить ваш софт. Мы вам<br>предоставим наши идеи, которыми вы<br>сможете воспользоваться</p>
        </div>

        <div class="block">
          <p class="h roboto black">Техническое<br>сопровождение</p>

          <p class="c roboto thin">Мы будем той командой, которая<br>будет заниматься улучшением<br>вашего продукта. Мы предоставим<br>вам техническое сопровождение<br>вашего продукта в первый месяц со<br>скидкой 50%</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p class="header roboto">Юридическая информация</p>

      <div class="info">
        <p class="roboto thin">ИП Салтанюк Никита Андреевич</p>
        <p class="roboto thin">460060, Россия, г.Оренбург, ул.Салмышская 70/2</p>
        <p class="roboto thin">Email: xenchuck@gmail.com  Тел: +7 (926) 887 55 78</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'rates'
  ],
  computed: {
    sum () {
      let sum = 0

      this.rates.all.forEach(rate => {
        sum += rate.rate * rate.count
      })

      return sum
    },
    days () {
      let hours = 0

      this.rates.all.forEach(rate => {
        if (rate.count > hours) {
          hours = rate.count
        }
      })

      hours += this.rates.corrections.count

      return Math.floor(hours / 8)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.print {
  width: 100%;

  position: relative;

  background: #191D21;
}

.balls {
  position: absolute;
}

.b-1 {
  width: 197px;
  height: 841px;

  top: 29px;
  left: 0;
}

.main {
  padding: 144px 0 0 231px;
}

.main .commerc {
  font-size: 18px;
  line-height: 102%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.main .ambirel {
  font-size: 72px;
  line-height: 95px;
  text-transform: capitalize;
}

.main .software {
  font-size: 72px;
  line-height: 95px;
  text-transform: capitalize;

  color: #C8C49C;

  margin-top: -31px;
}

.main .bonus {
  font-size: 18px;
  line-height: 116%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);

  margin-top: -5px;
}

.main .common {
  font-size: 24px;
  line-height: 116%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);

  margin-top: 155px;
}

.main .common-info {
  font-size: 13px;
  line-height: 15px;

  margin-top: 21px;
}

.calc {
  margin-top: 302px;

  padding: 0 54px 0 52px;
}

.calc {
  font-size: 24px;
  line-height: 116%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.calc .table {
  margin-top: 26px;
}

.calc .table .headers {
  display: flex;
}

.calc .table .header {
  font-size: 12px;
  line-height: 98.5%;
  text-transform: lowercase;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);

  background: #2C2C2C;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  display: flex;
  justify-content: center;

  padding-top: 3px;
}

.calc .table .header:nth-child(1) {
  width: 154.99px;
  height: 32.47px;
}

.calc .table .header:nth-child(2) {
  width: 145.13px;
  height: 32.47px;

  margin-left: 12px;
}

.calc .table .header:nth-child(3) {
  width: 43.63px;
  height: 32.47px;

  margin-left: 15px;
}

.calc .table .header:nth-child(4) {
  width: 89.53px;
  height: 32.47px;

  margin-left: 23px;
}

.calc .table .rows {
  background: #2C2C2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 20px 0 15px 0;

  margin-top: -11px;

  position: relative;

  z-index: 1;
}

.calc .table .row {
  display: flex;

  margin-top: 15px;
}

.calc .table .row:first-child {
  margin-top: 0;
}

.calc .corrections .row p,
.calc .table .row p {
  font-size: 13px;
  line-height: 15px;

  display: inline-block;
}

.calc .table .row p:nth-child(1) {
  width: 154.99px;

  margin-left: 10px;
}

.calc .table .row p:nth-child(2) {
  width: 145.13px;

  margin-left: 12px;

  display: flex;
  justify-content: center;
}

.calc .table .row p:nth-child(3) {
  width: 43.63px;

  margin-left: 15px;
}

.calc .table .row p:nth-child(4) {
  width: 89.53px;

  margin-left: 23px;

  display: flex;
  justify-content: center;
}

.calc .corrections {
  margin-top: 27px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.calc .corrections .plus {
  position: relative;

  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.calc .corrections .plus img {
  width: 12px;
  height: 12px;

  position: relative;

  z-index: 1;
}

.calc .corrections .plus::before {
  content: '';

  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 35px;
  height: 35px;

  background: #2C2C2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

.calc .corrections .plus::after {
  content: '';

  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 24px;
  height: 24px;

  background: #2C2C2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

.calc .corrections .row {
  margin-left: 8px;

  display: flex;
  justify-content: flex-end;

  background: #2C2C2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  height: 23px;

  padding: 4px 0 0 15px;
}

.calc .corrections .row p:nth-child(1) {
  text-transform: lowercase;

  line-height: 14px;
}

.calc .corrections .row p:nth-child(2) {
  width: 145.13px;

  margin-left: 12px;

  display: flex;
  justify-content: center;
}

.calc .corrections .row p:nth-child(3) {
  width: 43.63px;

  margin-left: 15px;
}

.calc .corrections .row p:nth-child(4) {
  width: 89.53px;

  margin-left: 23px;

  display: flex;
  justify-content: center;
}

.calc .tooltip {
  margin-top: 15px;

  font-size: 10px;
  line-height: 12px;

  opacity: 0.7;

  color: #ffffff;

  text-align: center;
}

.total {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.total .text {
  font-size: 9px;
  line-height: 11px;
}

.total .count {
  font-size: 18px;
  line-height: 21px;

  color: #C8C49C;

  margin-left: 8px;

  display: inline-block;

  background: #2C2C2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 3px 11px;
}

.total.sum {
  margin-top: 26px;
}

.total.days {
  margin-top: 21px;
}

.surprise {
  margin-top: 32px;

  padding-left: 85px;
}

.surprise .header {
  font-size: 48px;
  line-height: 116%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.surprise .info {
  font-size: 13px;
  line-height: 15px;

  margin-top: 12px;
}

.surprise .coupon,
.surprise .coupon * {
  font-size: 13px;
  line-height: 15px;

  color: #C8C49C;
}

.surprise .coupon {
  margin-top: 18px;
}

.b-2 {
  width: 100%;

  margin-top: 14px;
}

.optional {
  margin-top: 18px;

  padding-left: 72px;
}

.optional .header {
  font-size: 48px;
  line-height: 116%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.optional .blocks {
  margin-top: 69px;

  display: flex;
  flex-wrap: wrap;
}

.optional .blocks .block {
  margin-top: 12px;
  margin-left: 15px;

  width: 243px;
}

.optional .blocks .block:nth-child(odd) {
  margin-left: 0;
}

.optional .blocks .block:nth-child(1),
.optional .blocks .block:nth-child(2) {
  margin-top: 0;
}

.optional .blocks .block .h {
  font-size: 24px;
  line-height: 116%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.optional .blocks .block .c {
  font-size: 13px;
  line-height: 15px;
}

.optional .blocks .block:nth-child(1) .c,
.optional .blocks .block:nth-child(2) .c {
  margin-top: 4px;
}

.optional .blocks .block:nth-child(3) .c {
  margin-top: 16px;
}

.optional .blocks .block:nth-child(4) .c {
  margin-top: 11px;
}

.footer {
  margin-top: 300px;

  padding: 0 7px 11px 7px;
}

.footer .header {
  font-size: 12px;
  line-height: 102%;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.footer .info {
  margin-top: 7px;

  display: flex;
  justify-content: space-between;
}

.footer .info p {
  font-size: 9px;
  line-height: 11px;

  white-space: nowrap;
}
</style>
