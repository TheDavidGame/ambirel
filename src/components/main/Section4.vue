<template>
  <div class="section-4">
    <div class="team">
      <p class="header red-hat black">Наша команда</p>

      <p class="content red-hat">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br><br>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br><br>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>

    <div class="members">
      <div class="member">
        <div class="info">
          <p class="name red-hat">Devon Lane</p>

          <p class="text red-hat">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <img src="../../assets/images/section-4/member-1.png" alt="">
      </div>

      <div class="member">
        <div class="info">
          <p class="name red-hat">Kristin Watson</p>

          <p class="text red-hat">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <img src="../../assets/images/section-4/member-2.png" alt="">
      </div>

      <div class="member">
        <div class="info">
          <p class="name red-hat">Jerome Bell</p>

          <p class="text red-hat">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <img src="../../assets/images/section-4/member-3.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-4 {
  position: relative;

  min-height: 100%;

  padding: 155px 155px 155px 141px;

  display: flex;
  justify-content: space-between;
}

.team {
  width: 574px;
}

.team .header {
  font-size: 60px;
  line-height: 79px;
  text-transform: capitalize;

  color: #EBE9D3;
}

.team .content {
  margin-top: 103px;

  font-size: 24px;
  line-height: 45px;
  text-transform: capitalize;

  color: #C8C49C;
}

.members {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 20px;
}

.members .member {
  display: flex;

  width: 828px;

  margin-top: 27px;
}

.members .member:first-child {
  margin-top: 0;
}

.members .member .info {
  text-align: right;

  margin-right: 29px;

  padding: 90px 0 4px 0;
}

.members .member .info .name {
  font-size: 36px;
  line-height: 152%;

  margin-right: 40px;
}

.members .member .info .text {
  font-size: 18px;
  line-height: 152%;

  color: #888888;
}

@media screen and (max-width: 1620px) {
  .section-4 {
    padding-top: 118px;
    padding-left: 118px;
    padding-right: 118px;
  }

  .members .member {
    width: 650px;
  }

  .members .member img {
    width: 50%;
  }

  .team .content {
    margin-top: 18px;
  }
}

@media screen and (max-width: 1350px) {
  .team .header {
    font-size: 48px;
  }

  .team .content {
    font-size: 20px;
  }
}

@media screen and (max-width: 1350px) {
  .section-4 {
    flex-direction: column;
    align-items: center;
  }

  .team {
    width: 100%;
  }

  .members {
    margin: 20px 0 0;

    width: 100%;
  }

  .members .member {
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .section-4 {
    padding-left: 68px;
    padding-right: 68px;
  }

  .members {
    margin-top: 35px;
  }

  .members .member {
    flex-direction: column-reverse;
  }

  .members .member img {
    width: 100%;
  }

  .members .member .info {
    text-align: center;

    padding-top: 20px;
    margin-right: 0;
  }

  .members .member .info .name {
    margin: 0;
  }
}
</style>
