function points() {
    

    let correctAnswe1 = document.getElementById("correct_answer1");
    let correctAnswer2 = document.getElementById("correct_answer2");
    let correctAnswer3 = document.getElementById("correct_answer3");
    let correctAnswer4 = document.getElementById("correct_answer4");
    let wrongAnswer = document.getElementById("wrong_answer");
    let totalpass = 4;
    let userPoints = 0;



    if ((correctAnswe1 = "correct1")){
        userPoints++
        alert("YOU GOT IT!");
    }

    if ((correctAnswer2 = "correct2")){
        userPoints++
        alert("YOU GOT IT!");
    }
    if ((correctAnswer3 = "correct3")){
        userPoints++
        alert("YOU GOT IT!");
    }
    if ((correctAnswer4 = "correct4")){
        userPoints++
        alert("YOU GOT IT!");
    }




    if ((userPoints) == (totalpass)) {
        alert("You won dumb ass!")
    } else if ((userPoints) < (totalpass)) {

        alert("You lost dumb ass!")
    }
}



alert('Lowkey sir I lost my mind IN THIS QUIZ, IT WAS QUIZZING MY CODE INSTEAD');

