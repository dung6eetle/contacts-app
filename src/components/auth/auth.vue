<template>
  <div class="auth">
    <div class="picture">
      <img alt="auth" src="./../../assets/logo-auth.png" />
    </div>
    <div class="controls">
      <!-- вынести  -->
      <div class="wrapper">
        <input
          class="radio"
          type="radio"
          id="user"
          value="user"
          v-model="pickedRole"
        />
        <label for="user">Юзер</label>
      </div>
      <div class="wrapper">
        <input
          class="radio"
          type="radio"
          id="admin"
          value="admin"
          v-model="pickedRole"
        />
        <label for="admin">Админ</label>
      </div>
      <div class="wrapper">
        <router-link to="/contacts">
          <div @click="setRole(pickedRole)">ВОЙТИ</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      pickedRole: "user",
    };
  },
  methods: {
    ...mapMutations({
      setRole: "user/setRole",
    }),
  },
};
</script>

<style>
.auth {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}
.picture {
}
.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 45px;
  padding: 5px;
}
.wrapper {
  display: flex;
  align-items: center;
}
.radio {
  border: 0px;
  width: 2em;
  height: 2em;
  margin-right: 10px;
}
input,
label {
  cursor: pointer;
}
</style>
