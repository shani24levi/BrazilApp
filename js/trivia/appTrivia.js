import { createQuestion } from "./managerTrivia.js";
import {trivia_ar} from "../data.js";
//import {} from "./viewEvents.js";
import {} from "../burrger.js";


window.onload = () => {
  init();
}

const init = () => {
    console.log(trivia_ar);
    createQuestion(trivia_ar);
}