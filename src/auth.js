// src/auth.js
export const dummyUser = {
  email: "student@portal.com",
  password: "123456",
  name: "Anchal Gupta"
};

export const isLoggedIn = () => localStorage.getItem("auth") === "true";

export const login = (email, password) => {
  return email === dummyUser.email && password === dummyUser.password;
};

export const logout = () => {
  localStorage.removeItem("auth");
};
