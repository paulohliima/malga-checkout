import { useCallback } from "react";

export const useAuthenticate = () => {
  const isClient = typeof window !== "undefined";

  const login = useCallback(() => {
    if (isClient) {
      sessionStorage.setItem("isLogged", "true");
    }
  }, [isClient]);

  const logout = useCallback(() => {
    if (isClient) {
      sessionStorage.removeItem("isLogged");
    }
  }, [isClient]);

  const isAuthenticated = (): boolean => {
    if (isClient) {
      return sessionStorage.getItem("isLogged") === "true";
    }
    return false;
  };

  return { login, logout, isAuthenticated };
};
