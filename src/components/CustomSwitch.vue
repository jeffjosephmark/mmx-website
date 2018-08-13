<template>
  <div class="custom-switch">
    <input
      :id="uniqueId"
      type="checkbox"
      :checked="value"
      @change="onChange"
    />

    <label :for="uniqueId" />
  </div>
</template>

<script>
export default {
  name: 'CustomSwitch',
  props: ['value'],
  methods: {
    onChange (e) {
      this.$emit('change', e.target.checked)
    }
  },
  created () {
    this.uniqueId = `switch_${this._uid}`
  }
}
</script>

<style lang="scss" scoped>
.custom-switch {
  position: relative;
}

input {
  position: absolute;
  opacity: 0;
}

label {
  position: relative;
  display: block;
  width: 3rem;
  height: 1rem;
  background-color: rgba(#fff, 0);
  border: solid 1px #fff;
  border-radius: .5rem;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: calc(#{-(1.5rem - 1rem) / 2} - 1px);
    left: -1px;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(0px);
    transition: transform .2s ease-out;
    content: '';
  }
}

input:checked + label::after {
  transform: translateX(3rem - 1.5rem);
}
</style>
