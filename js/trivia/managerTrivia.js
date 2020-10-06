
import QuestionClass from "./triviaClass.js";

export const gameData = {
    score: 0,
    q_shuffle_ar:[],
    currentQ:0
}


export const createQuestion = (_ar) => {
    _ar.map((item,i) => {
        let question = new QuestionClass("#id_trivia",item.p , item.a,i,false);
        question.render();
    })
}

export const changeScore = (_val = 0) => {
    gameData.score += _val;
    document.querySelector("#id_amount").innerHTML = gameData.score +"/10";
    document.querySelector("#id_score").innerHTML = gameData.score*10 +" points";

  }