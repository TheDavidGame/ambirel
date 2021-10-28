<template>
  <div class="jurist-info">
    <p class="header roboto medium">Юридическая информация</p>

    <div class="info">
      <p class="roboto thin">ИП Салтанюк Никита Андреевич</p>
      <p class="roboto thin">460060, Россия, г.Оренбург, ул.Салмышская 70/2</p>
      <p class="roboto thin">Email: xenchuck@gmail.com  Тел: +7 (926) 887 55 78</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 24px;
  line-height: 102%;

  letter-spacing: 0.03em;

  color: #E9E9E9;

  text-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1);
}

.info {
  display: flex;
  justify-content: space-between;

  margin-top: 27px;
}

.info p {
  font-size: 24px;
  line-height: 28px;

  white-space: nowrap;
}

.info p:first-child {
  margin-left: 0;
}
</style>
