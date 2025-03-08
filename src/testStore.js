import { create } from "zustand";
import MenuLink from "./Cmp/MenuLink";

const testStore = set => {
  return {
    menuLinks: [
      ["Home", "Products", "About Us", "Blog"],
      ["Login", "Sign Up"],
    ],
  };
};

export const useTestStore = create(testStore);
