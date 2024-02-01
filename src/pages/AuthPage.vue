<template>
  <div class="auth">
    <div class="picture">
      <img alt="auth" src="../assets/logo-auth.png" />
    </div>
    <div class="controls">
      <RadioInputField
        v-for="role in roles"
        :key="role"
        :value="role"
        :checked="currentRole === role"
        @change="setRole"
      />
      <div class="wrapper">
        <Button class="login" title="log In" @click="redirectToContacts" />
      </div>
    </div>
  </div>
</template>

<script>
import RadioInputField from "@/components/ui/RadioInputField.vue";
import { mapMutations, mapGetters } from "vuex";
import Button from "@/components/ui/Button";

export default {
  components: { RadioInputField, Button },
  name: "LogIn",
  data() {
    return {
      roles: ["user", "admin"],
    };
  },
  computed: {
    ...mapGetters({
      currentRole: "user/role",
    }),
  },
  methods: {
    ...mapMutations({
      setRole: "user/setRole",
    }),
    redirectToContacts() {
      this.$router.push("/contacts");
    },
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
.login {
  color: #2c3e50;
  font-size: 1em;
  border: 0.5px solid #2c3e50;
}
</style>
