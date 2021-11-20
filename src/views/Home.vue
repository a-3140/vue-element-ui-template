<template>
  <div>
    <h1>{{ $t("home") }}</h1>
    <router-link to="/profile">Take me to my profile</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>