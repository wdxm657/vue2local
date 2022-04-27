<template>
  <div :is="baseComponent" :to="link.path ? link.path : '/'" :class="{ active: isActive }" tag="li">
    <div :to="link.path" :is="elementType(link, false)">
        <i :class="link.icon"></i>
        <p>{{ link.name }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'sidebar-item',
  props: {
    link: {
      type: Object,
      default: () => {
        return {
          name: '',
          path: '',
          children: []
        };
      },
      description:
        'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
    }
  },
  data() {
    return {
      children: [],
      collapsed: true
    };
  },
  computed: {
    baseComponent() {
      return this.isMenu || this.link.isRoute ? 'li' : 'router-link';
    },
    isMenu() {
      return this.children.length > 0 || this.menu === true;
    },
    isActive() {
      if (this.$route && this.$route.path) {
        let matchingRoute = this.children.find(c =>
          this.$route.path.startsWith(c.link.path)
        );
        if (matchingRoute !== undefined) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    elementType(link, isParent = true) {
      if (link.isRoute === false) {
        return isParent ? 'li' : 'a';
      } else {
        return 'router-link';
      }
    }
  }
};
</script>
<style>
</style>
