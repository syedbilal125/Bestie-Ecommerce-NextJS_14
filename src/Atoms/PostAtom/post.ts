import { atom } from "recoil";

type PostModel = {
  isOpen: boolean;
  type:
    | "Select"
    | "Mobiles"
    | "Vehicles"
    | "Propertys"
    | "RentPropertys"
    | "Electronics"
    | "Bikes"
    | "Business"
    | "Services"
    | "Jobs"
    | "Animals"
    | "Furniture"
    | "Fashion"
    | "Books"
    | "Kids"
    | "Food";
};

const initalPostModel: PostModel = {
  isOpen: false,
  type: "Select",
};

export const PostModel = atom<PostModel>({
  key: "PostModel",
  default: initalPostModel,
});
