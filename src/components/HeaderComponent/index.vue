<template>
    <div class="header">
        <img id="#chuck-logo" src="./chuck-logo.png" alt="Chuck Norris Logo">
        <a href="/"><img id="#chuck-firma" src="./chuck-firma.png" alt="Chuck Norris Signature"></a>
    </div>
</template>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.header {
  height: 70px;
  background-color: lightgray;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0 10px;
  justify-content: space-between;
}
</style>

