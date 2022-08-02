import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JS framework",
  },
  {
    title: "Why React?",
    content: "React is popular",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "Color red",
    value: "red",
  },
  {
    label: "Color green",
    value: "green",
  },
  {
    label: "Color blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
