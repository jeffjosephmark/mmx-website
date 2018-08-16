<template>
  <nav class="footer-nav">
    <p>
      Proud partner of <a href="https://www.melbournemint.com.au/" target="_blank">Melbourne Mint</a><br>
      <!-- <a href="#">Terms</a> / <a href="https://www.melbournemint.com.au/Privacy">Privacy</a> -->
    </p>
    <a href="https://www.melbournemint.com.au/" target="_blank">
      <img src="../assets/logo-mm.svg">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'FooterNav'
}
</script>

<style lang="scss" scoped>
$mrseaves: "mrs-eaves", 'Times New Roman', Times, serif;

.footer-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

p {
  font-family: $mrseaves;
  font-size: 1rem;
  line-height: percentage(22 / 16);
  text-align: right;
}

a {
  position: relative;
  display: inline-block;
  color: inherit;
  text-decoration: none;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: solid 1px #fff;
    opacity: 0;
    transform: translateY(2px);
    transition: opacity .2s, transform .2s ease-out;
    content: '';
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0px);
  }
}

img {
  margin-left: 1rem;
}
</style>
