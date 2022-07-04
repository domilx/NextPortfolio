import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
// Local Data
import data from "../../data";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  return (
    <div className="mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10">
      <h1
        onClick={() => router.push("/")}
        className="font-medium cursor-pointer mob:p-2 laptop:p-0">
        {data.name}.
      </h1>
      {!isBlog ? (
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={() => window.open("https://docs.google.com/document/d/e/2PACX-1vRkDAmn54XayFEJtOOMbKgJlFJEQwxzyk7q5N3N9XZo82RsdXLxM0UiZs2Yeh3WYnvlBm4fpHzzO47k/pub")}>
          Curriculum Vitae
          </Button>
        </div>
      ) : (
        <div className="flex">
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={() => window.open("https://docs.google.com/document/d/e/2PACX-1vRkDAmn54XayFEJtOOMbKgJlFJEQwxzyk7q5N3N9XZo82RsdXLxM0UiZs2Yeh3WYnvlBm4fpHzzO47k/pub")}>
          Curriculum Vitae
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
