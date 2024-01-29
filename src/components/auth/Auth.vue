<template>
  <div class="auth">
    <div class="picture">
      <img alt="auth" src="./../../assets/logo-auth.png" />
    </div>
    <div class="controls">
      <div class="wrapper">
        <input
          class="radio"
          type="radio"
          id="user"
          value="user"
          v-model="pickedRole"
        />
        <label for="user">user</label>
      </div>
      <div class="wrapper">
        <input
          class="radio"
          type="radio"
          id="admin"
          value="admin"
          v-model="pickedRole"
        />
        <label for="admin">admin</label>
      </div>
      <div class="wrapper">
        <router-link class="link" to="/contacts">
          <button @click="setRole(pickedRole)">log in</button>
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

<style scoped>
.auth {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}
.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3em;
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
.link {
  text-decoration: none;
}
.link button {
  color: #2c3e50;
  width: 185px;
  height: 50px;
  font-size: 0.5em;
}
</style>
