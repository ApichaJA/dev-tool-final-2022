import request from "@/services/api/user";

const authModule = {
  namespaced: true,
  state: {
    auth: {
      isLoggedIn: false,
      token: null,
    },
    user: {
      lastName: "",
      mobileNumber: "",
    },
  },
  mutations: {
    SET_AUTH(state, value) {
      state.auth = {
        isLoggedIn: value.isLoggedIn,
        token: value.token,
      };
    },
    SET_USER(state, value) {
      state.user = value;
    },
  },
  actions: {
    async register(state, params) {
      try {
        const result = await request.register(params);
        return Promise.resolve(result);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async getOTPcode(state, params) {
      try {
        const result = await request.getOTPcode(params);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async verifyOTPCode(state, params) {
      try {
        const result = await request.verifyOTPCode(params);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchCustomer({ state, commit }) {
      try {
        const result = await request.fetchCustomer(state.auth.token);
        commit("SET_USER", result.data);
        commit("SET_AUTH", {
          isLoggedIn: !result.data.isLogout,
          token: state.auth.token,
        });
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
};

export default authModule;
