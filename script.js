let answerClicked = false;
$(document).ready( function(){
  $(document).on("click", "#flip-card", function(){
    let answer = this.parentElement.previousElementSibling.lastElementChild;
    if (!answerClicked) {
      answer.classList.remove("hide");
      answerClicked = true;
    } else {
      answer.classList.add("hide");
      answerClicked = false;
    }

  })
  $("#submit").click( function(){
    let values = document.querySelectorAll("input");
    let newCard = `<div class="card">
        <div class="card-content">
          <p class="question"><i class="fas fa-question fa-2x"></i>${values[0].value}</p>
          <p class="answer hide">A: ${values[1].value}</p>
        </div>
        <div class="card-action">
          <a href="#" id="flip-card">Flip card</a>
        </div>
      </div>`
    let cardDiv = document.querySelector(".container");

    cardDiv.innerHTML += newCard;
  })
})