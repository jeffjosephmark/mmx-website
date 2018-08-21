<template>
  <div
    id="app"
    :style="{ '--active-color': activeState.colour }"
  >
    <link
      v-for="image in preloadImages"
      :key="image"
      :href="image"
      rel="preload"
      as="image"
      type="image/jpg"
    />
    <header>
      <logo
        :large="lg"
        :image="activeState.image"
        :imageLg="activeState.imageLg"
      />
    </header>
    <main>
      <div class="main-inner">
        <div class="nav-wrapper">
          <dots-nav
            v-model="active"
            :count="3"
            @mouseenter.native="clearActiveInterval"
            @mouseleave.native="setActiveInterval"
          />
          <primary-nav />
        </div>
        <app-content
          :title="activeState.title"
          :description="activeState.description"
        />
        <footer-nav />
      </div>
    </main>
  </div>
</template>

<script>
import Logo from './components/Logo'
import DotsNav from './components/DotsNav'
import PrimaryNav from './components/PrimaryNav'
import FooterNav from './components/FooterNav'
import AppContent from './components/AppContent'

const STATES = [
  {
    title: 'The future of currency has arrived.',
    description: 'Meld is a gold-backed digital currency that’s safe, stable and supported by an open network of partners, enabling anyone to reap the benefits of gold and take ownership of their wealth.',
    image: require('./assets/logo-bg-1.jpg'),
    imageLg: require('./assets/logo-bg-1-lg.jpg'),
    colour: '#DE7A7A'
  }, {
    title: 'Solidity\r\nmeets liquidity.',
    description: 'Nothing’s more stable than gold – it can’t be made, printed or inflated. By digitising this precious metal and allowing anyone to pay for absolutely anything with it, Meld is set to become a truly global currency.',
    image: require('./assets/logo-bg-2.jpg'),
    imageLg: require('./assets/logo-bg-2-lg.jpg'),
    colour: '#81C5CA'
  }, {
    title: 'Established, not the establishment.',
    description: 'As a private entity, rather than public, Melbourne Mint are creating a decentralised currency that’s supported by an expanding network of gold partners, making it fairer and more transparent for everyone involved.',
    image: require('./assets/logo-bg-3.jpg'),
    imageLg: require('./assets/logo-bg-3-lg.jpg'),
    colour: '#DBB394'
  }
]

export default {
  name: 'App',
  data () {
    return {
      active: 0,
      preloadImages: [],
      lg: true
    }
  },
  computed: {
    activeState () {
      return STATES[this.active]
    }
  },
  methods: {
    nextState () {
      if (STATES[this.active + 1]) {
        this.active++
      } else {
        this.active = 0
      }
    },
    setActiveInterval () {
      this._activeInterval = setInterval(this.nextState.bind(this), 10000)
    },
    clearActiveInterval () {
      clearInterval(this._activeInterval)
    }
  },
  created () {
    this.setActiveInterval()
  },
  beforeMount () {
    this.lg = (window.innerWidth >= 1000)
    this.preloadImages = STATES.map(s => (this.lg ? s.imageLg : s.image))
  },
  beforeDestroy () {
    this.clearActiveInterval()
  },
  components: {
    Logo,
    DotsNav,
    PrimaryNav,
    FooterNav,
    AppContent
  }
}
</script>

<style lang="scss" scoped>
$cerapro: "cerapro", Arial, Helvetica, sans-serif;
$mrseaves: "mrs-eaves", 'Times New Roman', Times, serif;

#app {
  font-family: $cerapro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --active-color: #DE7A7A;

  @media (min-width: 1000px) {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
}

header {
  padding: 40px;
  background-color: #fff;

  @media (min-width: 1000px) {
    flex: 0 0 calc(50% - 180px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 50px 80px;
    box-sizing: border-box;
  }
}

main {
  padding: 2rem 1.5rem;
  background-color: var(--active-color);
  color: #fff;
  transition: background-color .2s;

  @media (min-width: 1000px) {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 50px 80px;
    box-sizing: border-box;
  }
}

.main-inner {
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 720px;
    max-height: 730px;
  }
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
