<template>
  <nav class="dots-nav">
    <button
      v-for="(i, index) in count"
      :key="i"
      :class="{ active: (index === active) }"
      @click="$emit('change', index)"
    />
  </nav>
</template>

<script>
export default {
  name: 'DotsNav',
  props: ['active', 'count'],
  model: {
    prop: 'active',
    event: 'change'
  }
}
</script>

<style lang="scss" scoped>
$ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);

.dots-nav {
  display: flex;
  align-items: center;
}

button {
  padding: 2px;
  background: transparent;
  border: none;
  font-size: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:first-child {
    margin-left: -2px;
  }
}

button::before {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  opacity: .5;
  transform: scale(.5);
  transition: opacity .2s, transform .5s $ease-out-expo;
  content: '';
}

button:hover::before {
  transform: scale(1);
}

button.active::before {
  opacity: 1;
}
</style>
