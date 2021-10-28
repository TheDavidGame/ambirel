<template>
  <div class="section-3">
    <p class="header red-hat black">mobile/web</p>

    <div class="services">
      <div class="service s-1" @click="$emit('print', s1)">
        <p class="section red-hat black">mobile</p>

        <p class="name roboto black">Мобильное приложение +<br>Arduino Sketch<br>для производств</p>

        <p class="text roboto thin">Это программное обеспечение<br>определяет температуру и передаёт<br>эти данные на сервер. В случае<br>отклонений от нормы - сообщает об<br>этом на головной компьютер.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-1/photo-1.png" alt="">
        <img class="photo p-2" src="../../assets/images/section-3/service-1/photo-2.png" alt="">
      </div>

      <div class="service s-2" @click="$emit('print', s2)">
        <p class="section red-hat black">mobile</p>

        <p class="name roboto black">МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br>ДЛя доставки еды</p>

        <p class="text roboto thin">Мобильное приложение<br>для доставки вкуснейшей еды<br>японской кухни.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo up-1" src="../../assets/images/section-3/service-2/upphoto-1.png" alt="">
        <img class="photo up-2" src="../../assets/images/section-3/service-2/upphoto-2.png" alt="">
        <img class="photo p-1" src="../../assets/images/section-3/service-2/photo-1.png" alt="">
        <img class="photo p-2" src="../../assets/images/section-3/service-2/photo-2.png" alt="">
        <img class="photo p-3" src="../../assets/images/section-3/service-2/photo-3.png" alt="">
      </div>

      <div class="service s-3" @click="$emit('print', s3)">
        <p class="section red-hat black">mobile</p>

        <p class="name roboto black">МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br>ДЛЯ контроля ЛЭП</p>

        <p class="text roboto thin">Мобильное приложение<br>которое позволяет управлять ЛЭП (линией<br>электропередач) удалённо.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-3/photo-1.png" alt="">
        <img class="photo p-2" src="../../assets/images/section-3/service-3/photo-2.png" alt="">
        <img class="photo p-3" src="../../assets/images/section-3/service-3/photo-3.png" alt="">
      </div>

      <div class="service s-4" @click="$emit('print', s4)">
        <p class="section red-hat black">WEB</p>

        <p class="name roboto black">САЙТ ДЛЯ ФРАНШИЗЫ<br>SLICEPOINT.RU</p>

        <p class="text roboto thin">Сайт для франшизы в сфере питания<br>slicepoint.ru<br>Сайт сделан для Ютуб блогера ”Упаковщик”</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-4/photo-1.png" alt="">
      </div>
    </div>

    <img class="ball b-1" src="../../assets/images/balls/ball-4.png" alt="">

    <p class="safety header red-hat black">SAFETY - БЕЗОПАСНОСТЬ/ dESKTOP</p>

    <div class="services">
      <div class="service s-5" @click="$emit('print', s5)">
        <p class="section red-hat black">SAFETY - БЕЗОПАСНОСТЬ</p>

        <p class="name roboto black">ПО ДЛЯ ОЧКОВ AR<br>Microsfot HoloLens</p>

        <p class="text roboto thin">AR очки HoloLens отличаются<br>широким функционалом и созданы<br>для серьёзной работы на<br>передовых предприятиях. Мы тоже<br>участвуем в этом.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-5/photo-1.png" alt="">
      </div>

      <div class="service s-6" @click="$emit('print', s6)">
        <p class="section red-hat black">SAFETY - БЕЗОПАСНОСТЬ</p>

        <p class="name roboto black">GUI ДЛЯ ПРОВЕРКИ САЙТА<br>НА БЕЗОПАСНОСТЬ</p>

        <p class="text roboto thin">ПО, которое делает ваш веб<br>ресурс безопасным для вас<br>и для гостей вашего сайта.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-6/photo-1.png" alt="">
      </div>

      <div class="service s-7" @click="$emit('print', s7)">
        <p class="section red-hat black">SAFETY - БЕЗОПАСНОСТЬ</p>

        <p class="name roboto black">DHCP-сервер</p>

        <p class="text roboto thin">Сервер защищает данные<br>пользователей локальных сетей в<br>офисных\рабочих пространствах.<br>Ваши данные под защитой.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-7/photo-1.png" alt="">
      </div>

      <div class="service s-8" @click="$emit('print', s8)">
        <p class="section red-hat black">dESKTOP</p>

        <p class="name roboto black">музей космонавтики<br>им.глушко</p>

        <p class="text roboto thin">ПО установлено на интерактивное<br>оборудование в музее. Посетители музея<br>могут просматривать информацию и<br>пользоваться навигацией.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-8/photo-1.png" alt="">
      </div>
    </div>

    <p class="desktop header red-hat black">desktop</p>

    <div class="services">
      <div class="service s-9" @click="$emit('print', s9)">
        <p class="section red-hat black">dESKTOP</p>

        <p class="name roboto black">Навигация терминалов<br>росбанка</p>

        <p class="text roboto thin">ПО так же установлено на интерактивное<br>оборудование, которое позволяет<br>пользователю воспользоваться навигацией.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-9/photo-1.png" alt="">
      </div>

      <div class="service s-10" @click="$emit('print', s10)">
        <p class="section red-hat black">dESKTOP</p>

        <p class="name roboto black">оцифровка данных<br>производственного<br>оборудования</p>

        <p class="text roboto thin">Пишем ПО для производств, которое делает<br>ваше оборудование работающим, так как<br>это нужно вашим бизнес - процессам.</p>

        <div class="more">
          <span class="roboto">подробнее</span>

          <img src="../../assets/images/section-3/arrow.png" alt="">
        </div>

        <img class="photo p-1" src="../../assets/images/section-3/service-10/photo-1.png" alt="">
      </div>
    </div>

    <img class="ball b-2" src="../../assets/images/balls/ball-5.png" alt="">
  </div>
</template>

<script>
export default {
data () {
    return {
      s1: {
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
      s2: {
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
      s3: {
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
      s4: {
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
      s5: {
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
      s6: {
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
      s7: {
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
      s8: {
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
      s9: {
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
      s10: {
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
.section-3 {
  position: relative;

  padding: 59px 203px 194px 102px;

  background-color: #20262B;
}

.header {
  font-size: 55px;
  line-height: 144.8%;

  text-transform: uppercase;

  color: #C8C49C;
}

.services {
  margin-top: 80px;
  margin-left: 99px;

  position: relative;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.services .photo {
  pointer-events: none;

  filter: drop-shadow(5px 5px 25px rgba(0, 0, 0, 0.45));

  position: absolute;
}

.service {
  width: 684px;
  height: 393px;

  padding: 0 291px 0 46px;

  background: #383C3F;

  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.95);

  position: relative;

  z-index: 1;

  margin-top: 41px;

  cursor: pointer;
}

.services .service:nth-child(1),
.services .service:nth-child(2) {
  margin-top: 0;
}

.service .section {
  font-size: 8px;
  line-height: 144.8%;
}

.service .name {
  font-size: 24px;
  line-height: 148%;

  text-transform: uppercase;

  color: #C8C49C;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.service .text {
  font-size: 16px;
  line-height: 153.8%;

  margin-bottom: 68px;
}

.more {
  position: absolute;

  right: 50px;
  bottom: 21px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
}

.more span {
  font-size: 12px;
  line-height: 14px;

  color: #C8C49C;

  transition: all .2s;
}

.service:hover .more span {
  color: #ffffff;
}

.more img {
  margin-top: 8px;
}

.s-1 .p-1 {
  right: 50px;
  top: 48px;

  width: 172px;
}

.s-1 .p-2 {
  right: 50px;
  bottom: 58px;

  width: 220px;
}

.s-1 {
  padding-top: 49px;
}

.s-1 .name {
  margin-top: 15px;
}

.s-1 .text {
  margin-top: 43px;
}

.s-2 .up-1 {
  top: 87px;
  right: 92px;

  width: 61px;
}

.s-2 .up-2 {
  top: 89px;
  right: 24px;

  width: 62px;
}

.s-2 .p-1 {
  top: 122px;
  right: 259px;

  width: 99px;
}

.s-2 .p-2 {
  top: 122px;
  right: 141px;

  width: 99px;
}

.s-2 .p-3 {
  top: 122px;
  right: 24px;

  width: 99px;
}

.s-2 {
  padding-top: 49px;
}

.s-2 .name {
  margin-top: 13px;
}

.s-2 .text {
  margin-top: 32px;
}

.s-3 .p-1 {
  top: 25px;
  right: 162px;

  width: 89px;
}

.s-3 .p-2 {
  top: 25px;
  right: 51px;

  width: 89px;
}

.s-3 .p-3 {
  top: 232px;
  right: 50px;

  width: 202px;
}

.s-3 {
  padding-top: 74px;
}

.s-3 .name {
  margin-top: 23px;
}

.s-3 .text {
  margin-top: 13px;
}

.s-4 .p-1 {
  top: 141px;
  right: 30px;

  width: 285px;
}

.s-4 {
  padding-top: 72px;
}

.s-4 .name {
  margin-top: 16px;
}

.s-4 .text {
  margin-top: 33px;
}

.desktop,
.safety {
  margin-top: 119px;
}

.desktop + .services,
.safety + .services {
  margin-top: 72px;
}

.s-5 .p-1 {
  top: 104px;
  right: 47px;

  width: 285px;
}

.s-5 {
  padding-top: 83px;
}

.s-5 .name {
  margin-top: 11px;
}

.s-5 .text {
  margin-top: 22px;
}

.s-6 .p-1 {
  top: 5px;
  right: 12px;

  width: 364px;
}

.s-6 {
  padding-top: 78px;
}

.s-6 .name {
  margin-top: 13px;
}

.s-6 .text {
  margin-top: 8px;
}

.s-7 .p-1 {
  top: 75px;
  right: 20px;

  width: 354px;
}

.s-7 {
  padding-top: 88px;
}

.s-7 .name {
  margin-top: 17px;
}

.s-7 .text {
  margin-top: 33px;
}

.s-8 .p-1 {
  top: 133px;
  right: 31px;

  width: 300px;
}

.s-8 {
  padding-top: 77px;
}

.s-8 .name {
  margin-top: 1px;
}

.s-8 .text {
  margin-top: 23px;
}

.s-9 .p-1 {
  top: 102px;
  right: 25px;

  width: 269px;
}

.s-9 {
  padding-top: 74px;
}

.s-9 .name {
  margin-top: 1px;
}

.s-9 .text {
  margin-top: 5px;
}

.s-10 .p-1 {
  top: 74px;
  right: 30px;

  width: 253px;
}

.s-10 {
  padding-top: 74px;
}

.s-10 .name {
  margin-top: 1px;
}

.s-10 .text {
  margin-top: 9px;
}

.ball {
  position: absolute;
}

.b-1 {
  width: 444px;
  height: 426px;

  top: 870px;
  left: -113px;
}

.b-2 {
  width: 155px;
  height: 395px;

  bottom: 437px;
  right: 0;
}

@media screen and (max-width: 1800px) {
  .section-3 {
    padding-left: 68px;
    padding-right: 68px;
  }

  .services {
    margin-top: 28px;
    margin-left: 28px;
  }
}

@media screen and (max-width: 1570px) {
  .services {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: initial;
  }

  .services .service {
    width: 100%;
    height: initial;

    min-height: 393px;
  }

  .services .service:nth-child(2) {
    margin-top: 41px;
  }
}

@media screen and (max-width: 850px) {
  .services .service .photo {
    display: none;
  }

  .services .service {
    padding-right: 68px;
  }

  .header {
    font-size: 40px;
  }
}
</style>
