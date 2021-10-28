<template>
  <div class="section-1">
    <div class="info">
      <p class="header red-hat black">Компания<br>ambirel<span> software</span></p>

      <p class="about red-hat medium">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br>Velit officia consequat duis enim velit mollit. Exercitation veniam<br>consequat sunt nostrud amet.</p>

      <div class="btns">
        <span class="services red-hat bold">Перейти к услугам</span>

        <span class="consultation red-hat bold">Консультация</span>
      </div>
    </div>

    <img class="photo" src="../../assets/images/section-1/photo.png" alt="">

    <img class="ball b-1" src="../../assets/images/balls/ball-1.png" alt="">
    <img class="ball b-2" src="../../assets/images/balls/ball-2.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-1 {
  position: relative;

  min-height: 100%;

  z-index: 1;
}

.info {
  height: 100%;
  padding: 228px 148px 68px 148px;
}

.info .header span,
.info .header {
  font-size: 96px;
  line-height: 139.8%;

  text-transform: capitalize;
}

.info .header span {
  color: #C8C49C;
}

.info .about {
  margin-top: 44px;

  font-size: 18px;
  line-height: 44px;

  text-transform: capitalize;

  color: #DFDFDF;
}

.info .btns {
  margin-top: 74px;

  display: flex;
}

.info .btns .consultation,
.info .btns .services {
  font-size: 22px;
  line-height: 152%;

  color: #C8C49C;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.info .btns .services {
  width: 363px;
  height: 78px;

  background: #404040;
  border: 1px solid #2B2B2B;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.49);

  transition: all .2s;
}

.info .btns .services:hover {
  border-color: #C8C49C;
  background: #C8C49C;
  color: #ffffff;
}

.info .btns .consultation {
  margin-left: 27px;

  width: 230px;
  height: 78px;

  border: 2px solid #C8C49C;

  transition: all .2s;
}

.info .btns .consultation:hover {
  background: #C8C49C;
  color: #ffffff;
}

.photo {
  position: absolute;

  top: 68px;
  right: 68px;

  width: 939px;

  pointer-events: none;

  z-index: -1;
}

.ball {
  position: absolute;
}

.b-1 {
  width: 268px;
  height: 262px;

  top: -140px;
  left: -6px;

  z-index: -1;
}

.b-2 {
  width: 387px;
  height: 389px;

  top: 843px;
  left: -166px;

  z-index: -1;
}

@media screen and (max-width: 1880px) {
  .info {
    padding: 168px 68px 68px;
  }

  .photo {
    width: 719px;

    top: initial;

    bottom: 118px;
  }
}

@media screen and (max-width: 800px) {
  .photo {
    right: initial;

    left: 50%;

    transform: translateX(-50%);
  }
}

@media screen and (max-width: 600px) {
  .info .btns {
    flex-direction: column;
  }

  .info .btns .consultation {
    margin-left: 0;
    margin-top: 27px;
  }

  .info .header span,
  .info .header {
    font-size: 75px;
  }
}
</style>
