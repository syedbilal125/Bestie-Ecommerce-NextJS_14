import { atom } from "recoil";

type AuthModleState = {
  isOpen: boolean;
  type: "login" | "register"
};

const initalAuthModleState: AuthModleState = {
  isOpen: false,
  type: "login",
};

export const authModleState = atom<AuthModleState>({
  key: "authModleState",
  default: initalAuthModleState,
});