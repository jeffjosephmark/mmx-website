<template>
  <form
    :class="{ subscribed }"
    action="https://marisakatedesigns.us8.list-manage.com/subscribe/post?u=96bfd45008fac9d154cdb7003&amp;id=43858971c6"
    method="post"
    @submit.prevent="onSubmit"
  >
    <p>Keep up to date with our token project:</p>
    <input name="EMAIL" type="email" placeholder="Email address" autocomplete="email" required />
    <transition mode="out-in">
      <div v-if="submitting" class="loading" />
      <button v-else type="submit">
        <span v-if="subscribed">Thank You!</span>
        <span v-else>Notify Me</span>
      </button>
    </transition>
  </form>
</template>

<script>
export default {
  name: 'SubscribeForm',
  data () {
    return {
      submitting: false,
      subscribed: false
    }
  },
  methods: {
    async onSubmit (e) {
      this.submitting = true

      try {
        await fetch(e.target.action, {
          method: 'POST',
          mode: 'no-cors',
          body: new FormData(e.target)
        })

        this.subscribed = true
      } catch (e) {
        alert('Network error, please try again.')
      }

      this.submitting = false
    }
  }
}
</script>

<style lang="scss" scoped>
$mrseaves: "mrs-eaves", 'Times New Roman', Times, serif;
$ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);

form {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  transition: opacity 1s;
  transition-delay: 2s;

  &.subscribed {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 1000px) {
    margin: 0;
  }
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: $mrseaves;
  font-size: 1.25rem;
  line-height: percentage(30 / 24);

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
}

input {
  display: block;
  margin-bottom: 2rem;
  padding: .75rem 0;
  width: 100%;
  border: none;
  border-bottom: solid 1px rgba(#fff, .5);
  border-radius: 0;
  background: transparent;
  font-size: 1.125rem;
  line-height: 1;
  color: #fff;

  &:focus {
    border-bottom-color: #fff;
    outline: none;
  }

  &::placeholder {
    color: rgba(#fff, .5);
  }
}

input + input {
  margin-top: -1rem;
}

button {
  position: relative;
  z-index: 1;
  display: block;
  width: 9rem;
  height: 3rem;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  color: var(--active-color);
  font-size: .875rem;
  font-weight: bold;
  line-height: 3rem;
  text-align: center;
  text-transform: uppercase;
  transition: color .2s, opacity .1s;
  cursor: pointer;

  &:active {
    opacity: .7;
  }

  &:focus {
    outline: none;
  }

  form:invalid & {
    opacity: .5;
    cursor: not-allowed;
  }
}

button.v-enter-active {
  transition: color .2s;
}

button.v-enter {
  color: #fff;
}

.loading {
  margin-left: 3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3px;
  background-color: #fff;
  animation: loading 1s $ease-out-expo infinite;

  &.v-enter-active,
  &.v-leave-active {
    transition: transform .2s $ease-out-expo;
    animation: none;
  }

  &.v-enter,
  &.v-leave-to {
    transform: scaleX(3);
  }
}

@keyframes loading {
  0% { transform: rotate(0deg); }
  95% { transform: rotate(180deg); }
  100% { transform: rotate(180deg); }
}
</style>
