/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

const generateExcuse = () => {
  let who = ["Mi perro", "Mi abuela", "El cartero", "Mi gato"];
  let action = ["se comió", "rompió", "desapareció", "destruyó"];
  let what = ["mi tarea", "mi móvil", "la casa", "el correo"];
  let when = [
    "antes de la clase",
    "cuando estaba entrenando",
    "cuando estaba en el trabajo",
    "mientras dormía"
  ];

  let whoIdx = Math.floor(Math.random() * who.length);
  let actionIdx = Math.floor(Math.random() * action.length);
  let whatIdx = Math.floor(Math.random() * what.length);
  let whenIdx = Math.floor(Math.random() * when.length);

  return `${who[whoIdx]} ${action[actionIdx]} ${what[whatIdx]} ${when[whenIdx]}`;
};
