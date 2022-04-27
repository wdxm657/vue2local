<template>
  <base-nav v-model="showMenu" class="navbar-absolute">
    <a class="navbar-brand" href="#controlPanel">{{ routeName }}</a>
  </base-nav>
</template>

<script>
import { BaseNav } from "@/components";

export default {
  components: {
    BaseNav,
  },
  created() { },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      if (!string) {
        return
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  mounted() { },
};
</script>

