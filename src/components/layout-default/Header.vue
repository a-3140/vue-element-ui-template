<template>
  <el-menu
    class="nav-container"
    :router="routerEnabled"
    :default-active="defaultActiveIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item in header_paths"
      :key="item.index"
      :index="item.path"
    >
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      routerEnabled: true,
      // Update router.index when changing paths & vice versa
      defaultActiveIndex: "/",
      header_paths: [
        {
          path: "/",
          name: "Sign in",
          index: 1,
        },
        {
          path: "/signup",
          name: "Sign up",
          index: 2,
        },
        {
          path: "/about",
          name: "About",
          index: 3,
        },
      ],
    };
  },
  // for testing
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 0 1em 0 1em;
}
</style>