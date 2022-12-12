import React from "react";
import Toolitem from "./Toolitem";
const navItemsList = [
  { lable: "Home", mlink: "/mkportfolio" },
  { lable: "About", mlink: "/mkportfolio/about" },
  { lable: "Service", mlink: "/mkportfolio/service" },
  { lable: "Portfolio", mlink: "/mkportfolio/portfolio" },
  { lable: "Contact", mlink: "/mkportfolio/contact" },
];
export default function ToolbarItem() {
  return navItemsList.map((data) => {
    return <Toolitem key={data.lable} lable={data.lable} mLink={data.mlink} />;
  });
}
