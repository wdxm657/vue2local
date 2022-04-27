<template>
  <nav :class="classes" class="navbar">
    <div :class="containerClasses">
        <div
          class="collapse navbar-collapse show"
          :class="menuClasses"
          v-show="show"
        >
          <slot></slot>
        </div>
    </div>
  </nav>
</template>
<script>

export default {
  name: 'base-nav',
  props: {
    show: {
      type: Boolean,
      default: false,
      description:
        'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description:
        'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container-fluid',
      description:
        'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
  },
  data() {
    return {
      transitionFinished: true
    };
  },
  computed: {
    classes() {
      let color = `bg-${this.type}`;
      let classes = [
        { 'navbar-transparent': !this.show && this.transparent },
        { [`navbar-expand-${this.expand}`]: this.expand }
      ];
      if (this.position) {
        classes.push(`navbar-${this.position}`);
      }
      if (
        !this.transparent ||
        (this.show && !this.transitionFinished) ||
        (!this.show && !this.transitionFinished)
      ) {
        classes.push(color);
      }
      return classes;
    },
  },
};
</script>
<style></style>
