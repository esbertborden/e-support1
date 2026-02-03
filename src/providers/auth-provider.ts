import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    // Your login logic here
    localStorage.setItem("auth", JSON.stringify({ email }));
    return {
      success: true,
      redirectTo: "/dashboard",
    };
  },
  logout: async () => {
    localStorage.removeItem("auth");
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      return {
        authenticated: true,
      };
    }
    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    return ["admin"];
  },
  getIdentity: async () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return {
        id: 1,
        name: parsedUser.email,
        avatar: "https://i.pravatar.cc/300",
      };
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};