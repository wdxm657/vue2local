<template>
  <div class="sidebar" :data="backgroundColor">
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <div class="logo">
        <a href="https://www.bigradium.com/" class="simple-text logo-mini">
          <img :src="logo" alt="app-logo" />
        </a>
        <a href="https://www.bigradium.com/" class="simple-text logo-normal">{{ title }}</a>
      </div>
      <ul class="nav">
        <slot name="links">
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    title: {
      type: String,
      default: 'Bigradium Mcserver',
      description: 'Sidebar title'
    },
    shortTitle: {
      type: String,
      default: 'Mcserver',
      description: 'Sidebar short title'
    },
    logo: {
      type: String,
      default: 'images/logo.png',
      description: 'Sidebar app logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: value => {
        let acceptedValues = [
          '',
          'vue',
          'blue',
          'green',
          'orange',
          'red',
          'primary'
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
  },
};
</script>
<style>
</style>
