<template>
  <nav class="footer-nav">
    <p>
      Proud partner of <a href="https://www.melbournemint.com.au/" target="_blank">Melbourne Mint</a><br>
      <a href="#">Terms</a> / <a href="https://www.melbournemint.com.au/Privacy">Privacy</a>
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
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

img {
  margin-left: 1rem;
}
</style>
