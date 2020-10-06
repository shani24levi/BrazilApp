import {changeScore} from "./managerTrivia.js";

class QuestionClass {
    constructor(_parent, _question, _answers_ar ,_id ,_checked) {
        this.parent = _parent;
        this.question = _question;
        this.id = _id;
        this.trueAnswer = _answers_ar[0];
        this.answers_ar = _.shuffle(_answers_ar);
        this.num = _id+1;
        this.checked = _checked;

        //Flag for right choice:True
        //Flag for wrong choice:False
        this.flag =_checked;

        //Defines whether this is a repeat click of a user
        this.cliked = 1;
    }

    render() {
        let newDiv = document.createElement("div");
        newDiv.className = "p-4 mt-4";
        newDiv.style.backgroundColor = "rgba(0,0,0,.03)";
        newDiv.style.borderRadius = "20px";
        newDiv.id= "this"+this.id;
        newDiv.innerHTML = `
        <h5><strong style= "color:green;">${this.num}. </strong> ${this.question}</h5>
        `
        document.querySelector(this.parent).append(newDiv);


        this.answers_ar.map(item => {
            let answersDiv = document.createElement('div');
            answersDiv.className = "form-check";
            newDiv.append(answersDiv);

            let btnAnswer = document.createElement("input");
            btnAnswer.className = "form-check-input";
            btnAnswer.type = "radio";
            btnAnswer.id = this.id;
            btnAnswer.name = this.id;
            btnAnswer.value = item;

            let labelAnswer = document.createElement("label");
            labelAnswer.className = "form-check-label";
            labelAnswer.htmlFor =this.id;
            labelAnswer.innerHTML = item;

            answersDiv.append(btnAnswer);
            answersDiv.append(labelAnswer);


            btnAnswer.addEventListener("click", () => {
                //when user choose in the first time:
                if(this.cliked == 1 ){
                    this.cliked++;
                    this.checked= true;
                    if (item == this.trueAnswer) {
                        this.flag= true;
                        changeScore(1);
                    }
                    else {
                        //score dosent change
                        this.flag= false;
                    }
                }
                //user change his choice
                else{
                    this.cliked++;
                    //when choice is allrdy false
                    if (!this.flag && item == this.trueAnswer) {
                        this.flag= true;
                        changeScore(1);
                    }
                    //when choice is allrdy true
                    else if (this.flag && item != this.trueAnswer) {
                        this.flag= false;
                        changeScore(-1);
                    }
                }

                //when user changes his answer set new icon
                if(this.cliked > 2){
                    console.log(this.cliked);
                    let currI = document.querySelector(`#correct_answer${this.id}`);
                    currI.remove();
                }

                //set icon as a corect answer or wrong 
                let corectDiv = document.createElement("i");

                if (this.flag){
                    corectDiv.className = "fa fa-check px-2";
                    corectDiv.style.color= "forestgreen";
                } 
                else{
                    corectDiv.className = "fa fa-times px-2"; 
                    corectDiv.style.color= "red";
                }

                corectDiv.style.display = "none";
                corectDiv.style.fontSize= "2em";
                corectDiv.id= "correct_answer"+`${this.id}`;
                answersDiv.append(corectDiv);
            })

        })

        let revileDiv = document.createElement("div");
        revileDiv.className = "p-4 mt-4 text-center show_correct_answer"+`${this.id}`;
        revileDiv.style.display= "none";
        revileDiv.innerHTML = `
        <h4> Correct answer is: <i style="color: #6F3CA0"}> ${this.trueAnswer} </i> </h4>
        `
        newDiv.append(revileDiv);

    }
}

export default QuestionClass;
