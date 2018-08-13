<template>
  <div class="app-content">
    <transition name="fade-up" mode="out-in" appear>
      <h1 :key="title">{{ title }}</h1>
    </transition>
    <div class="row">
      <div class="col">
        <transition name="fade-up" mode="out-in">
          <p :key="description">{{ description }}</p>
        </transition>
      </div>
      <div class="col">
        <subscribe-form />
      </div>
    </div>
  </div>
</template>

<script>
import SubscribeForm from './SubscribeForm'

export default {
  name: 'AppContent',
  props: ['title', 'description'],
  components: {
    SubscribeForm
  }
}
</script>

<style lang="scss" scoped>
$mrseaves: "mrs-eaves", 'Times New Roman', Times, serif;
$ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);

.app-content {
  margin-top: 1.5rem;

  @media (min-width: 1000px) {
    margin-top: 0;
  }
}

h1 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  max-width: 520px;
  font-size: 2rem;
  font-weight: 500;
  line-height: percentage(58 / 48);
  white-space: pre-line;

  @media (min-width: 1000px) {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
}

p {
  margin: 0;
  max-width: 340px;
  height: 160px;
  font-family: $mrseaves;
  font-size: 1.25rem;
  line-height: percentage(30 / 24);
  white-space: pre-line;

  &.fade-up-enter-active {
    transition-delay: .05s;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
    height: 220px;
  }
}

.fade-up-enter-active {
  transition: opacity .5s, transform .5s $ease-out-quint;
}

.fade-up-leave-active {
  transition: opacity .2s;
}

.fade-up-enter {
  opacity: 0;
  transform: translateY(5px);
}

.fade-up-leave-to {
  opacity: 0;
}

@media (min-width: 1000px) {
  .row {
    display: flex;
    margin: 0 -2rem;
  }

  .col {
    flex: 1 1 50%;
    padding: 0 2rem;
  }
}
</style>
