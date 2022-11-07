import React from "react";
import "./Button.scss";
import { useHotkeys } from "react-hotkeys-hook";

const numButtons: (string | number)[][] = [
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
];


let buttons = numButtons.map(row => {
  return row.map(button => {
    return <button id={button as string} onClick={() => {alert("HEY")}}>{button}</button>;
  });
});

const Buttons = (): JSX.Element => {
  useHotkeys("1", () => {
    console.log("Hey there")
    const btn = document.getElementById("1")
    btn?.click()
    btn?.classList.add(':active')
})
  return <div className="button-container">{buttons}</div>;
};

export default Buttons;
