import { atom } from "recoil";


type StoreModel = {
  isOpen: boolean;
  type: "allFeeds" | "followings" | "followedFeeds" | "currentUser"
};

const initalStoreModel: StoreModel = {
  isOpen: false,
  type: "allFeeds",
};

export const StoreModel = atom<StoreModel>({
  key: "StoreModel",
  default: initalStoreModel,
});