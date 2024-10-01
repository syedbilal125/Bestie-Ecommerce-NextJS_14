"use client";
import { PostModel } from "../../Atoms/PostAtom/post";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Animals from "./Animals";
import Bikes from "./Bikes";
import Books from "./Books";
import Business from "./Business";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Food from "./Food";
import Select from "./Select";
import Mobiles from "./Mobiles";
import Furniture from './Furniture'
import Jobs from './Jobs'
import Kids from './Kids'
import Propertys from './Propertys'
import RentPropertys from './RentPropertys'
import Services from './Services'
import Vehicles from './Vehicles'

type PostModelProps = {};

const PostModelClient: React.FC<PostModelProps> = () => {
  const Post = useRecoilValue(PostModel);
  return (
    <>
      <div className="w-full">
        {Post.type === "Select" ? (
          <Select />
        ) : Post.type === "Animals" ? (
          <Animals />
        ) : Post.type === "Bikes" ? (
          <Bikes />
        ) : Post.type === "Books" ? (
          <Books />
        ) : Post.type === "Business" ? (
          <Business />
        ) : Post.type === "Electronics" ? (
          <Electronics />
        ) : Post.type === "Fashion" ? (
          <Fashion />
        ) : Post.type === "Food" ? (
          <Food />
        ) : Post.type === "Mobiles" ? (
          <Mobiles />
        ) : Post.type === "Furniture" ? (
          <Furniture />
        ) : Post.type === "Jobs" ? (
          <Jobs />
        ) : Post.type === "Kids" ? (
          <Kids />
        ) : Post.type === "Propertys" ? (
          <Propertys />
        ) : Post.type === "RentPropertys" ? (
          <RentPropertys />
        ) : Post.type === "Services" ? (
          <Services />
        ) : Post.type === "Vehicles" ? (
          <Vehicles />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default PostModelClient;
