<template>
    <div class="footer">
        <div class="footer__signature">
            @2019 GM5 PW I
        </div>
        <a class="footer__contact" href="/contact">CONTACT US</a>
    </div>
</template>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.footer {
  height: 70px;
  background-color: lightgray;
  bottom: 0;
  margin: 0;
  padding: 0 $gt-med;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  z-index: 100;
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.48);
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.48);
  font-weight: $fw-xxl;
}
</style>
