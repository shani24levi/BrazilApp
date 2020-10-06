
class Accordion {
    constructor(_parent, _question, _answer, _idName) {
        this.parent = _parent;
        this.question = _question;
        this.answer = _answer;
        this.idName = _idName;
    }

    render() {
        let newDiv = document.createElement("div");
        newDiv.className = "card fqaCard";
        newDiv.innerHTML += `
        <div class="card-header" id="${this.heading}">
            <h2 class="mb-0">
                <button class="btn btn-block text-left" type="button" data-toggle="collapse"
                    data-target="#${this.idName}" aria-expanded="true" aria-controls="${this.idName}">
                    ${this.question}
                </button>
            </h2>
        </div>

        <div id="${this.idName}" class="collapse" aria-labelledby="${this.idName}"
            data-parent="#id_accordion">
             <div class="card-body">
               ${this.answer}
             </div>
        </div>
        `
        document.querySelector(this.parent).append(newDiv);
    }
}

export default Accordion;