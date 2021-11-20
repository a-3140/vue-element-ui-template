<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="body">
      <main class="LayoutDefault__main">
        <h1>Logged In</h1>
        <slot />
      </main>
    </el-main>
    <el-footer class="container-footer">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from "../components/layout-logged-in/Header.vue";
import Footer from "../components/layout-default/Footer.vue";

export default {
  name: "LayoutDefault",
  components: { Header, Footer },
};
</script>

<style scoped>
.body {
  min-height: 90vh;
}
.container-footer {
  display: flex;
  justify-content: center;
  align-content: center;
  background: #ccc;
  align-items: center;
}
</style>