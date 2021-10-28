<template>
  <div class="section-2">
    <p class="header red-hat black">Услуги нашей компании</p>

    <div class="about">
      <div class="block">
        <p class="head red-hat bold">О компании</p>

        <p class="content red-hat">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br><br>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
      </div>

      <div class="block">
        <p class="head red-hat bold">Услуги</p>

        <p class="content red-hat">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br><br>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
      </div>
    </div>

    <img class="ball b-1" src="../../assets/images/balls/ball-3.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-2 {
  position: relative;

  min-height: 100%;

  padding: 67px 264px 67px 150px;

  z-index: 1;
}

.header {
  font-size: 64px;
  line-height: 85px;

  text-transform: capitalize;
}

.about {
  margin-top: 101px;

  display: flex;
  justify-content: space-between;
}

.about .block {
  width: 677px;
}

.about .block .head {
  margin-left: 50px;

  font-size: 36px;
  line-height: 48px;

  text-transform: capitalize;

  color: #C8C49C;
}

.about .block .content {
  margin-top: 22px;

  font-size: 36px;
  line-height: 48px;
  text-transform: capitalize;

  color: #76745C;
}

.ball {
  position: absolute;
}

.b-1 {
  width: 136px;
  height: 1129px;

  top: -42px;
  right: 0;

  z-index: -1;
}

@media screen and (max-width: 1800px) {
  .section-2 {
    padding-right: 150px;
  }

  .about .block {
    width: calc(50% - 10px);
  }
}

@media screen and (max-width: 1150px) {
  .about {
    flex-direction: column;
  }

  .about .block {
    width: 100%;
  }

  .about .block:last-child {
    margin-top: 20px;
  }
}

@media screen and (max-width: 1150px) {
  .section-2 {
    padding-left: 68px;
    padding-right: 68px;
  }
}
</style>
