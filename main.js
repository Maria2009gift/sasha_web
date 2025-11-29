"use strict"

const answer1 = document.querySelector("#answerz1")
const answer2 = document.querySelector("#answerz2")


function zmina1() {
    answer1.textContent="Відповідь: ,"
}
function zmina2() {
    answer2.textContent="Відповідь: 315"
}

answer1.addEventListener("click", zmina1)
answer2.addEventListener("click", zmina2)





