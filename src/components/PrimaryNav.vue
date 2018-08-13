<template>
  <nav class="primary-nav">
    <!-- <custom-switch v-model="crypto" /> -->
    <a href="https://github.com/MelbourneMintOS" target="_blank">Developer portal</a>
  </nav>
</template>

<script>
import CustomSwitch from './CustomSwitch'

export default {
  name: 'PrimaryNav',
  data () {
    return {
      crypto: false
    }
  },
  components: {
    CustomSwitch
  }
}
</script>

<style lang="scss" scoped>
.primary-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

a {
  position: relative;
  margin-left: 2rem;
  font-size: 1rem;
  line-height: 2;
  color: #fff;
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
</style>
