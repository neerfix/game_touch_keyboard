document.addEventListener("DOMContentLoaded", function () {

    var score_number = document.querySelector(".count.score");
    score_number.innerHTML=0;
    var best = document.querySelector(".count.best_score");
    var best_score = localStorage.getItem("bestScore_levelTwo");
    best.innerHTML = best_score;

    var timeInSecs;
    var ticker;
    var charSpawn;

    function startTimer(secs){
        timeInSecs = parseInt(secs)-1;
        ticker = setInterval( tick ,1000);   // every second
        charSpawn = setInterval( chaineAleatoire ,100);   // every 100ms
    }

    function tick() {
        var secs = timeInSecs;
        if (secs <5 ) {
            document.querySelector(".count.time").style.color = "red";  // and any other styling desired
        }
        if (secs>0) {
            timeInSecs--;
        }
        else {
            alert("TIME OUT ! Votre score est :" + score_number.innerHTML);
            clearInterval(ticker); // stop counting at zero
            clearInterval(charSpawn); // Stop spwaning letter
// startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
            if(localStorage.getItem("bestScore_levelTwo") < score_number.innerHTML){
                localStorage.setItem("bestScore_levelTwo", score_number.innerHTML);
            }
        }
        document.querySelector(".count.time").innerHTML = secs;
    }

    startTimer(60);  // 60 seconds

    function chaineAleatoire() {
        var randomNumber = Math.floor(Math.random() * 6) + 5;

        var ListeCar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (i = 0; i < randomNumber; i++){
            var chaine =  ListeCar[Math.floor(Math.random() * ListeCar.length)];
            if(chaine == '1' || chaine == '2' || chaine == '3' || chaine == '4' || chaine == '5' || chaine == '6' || chaine == '7' || chaine == '8' || chaine == '9' || chaine == '0'){
                if(chaine == '1'){
                    var number = 'un';
                }else if(chaine == '2'){
                    var number = "deux";
                }else if(chaine == '3'){
                    var number = "trois";
                }else if(chaine == '4'){
                    var number = 'quatre';
                }else if(chaine == '5'){
                    var number = 'cinq';
                }else if(chaine == '6'){
                    var number = 'six';
                }else if(chaine == '7'){
                    var number = 'sept';
                }else if(chaine == '8'){
                    var number = 'huit';
                }else if(chaine == '9'){
                    var number = 'neuf';
                }else{
                    var number = 'zero';
                }
                var _html = '<div class="char '+number+'">'+chaine+'</div>';
            }else{
                var _html = '<div class="char '+chaine+'">'+chaine+'</div>';
            }
            var games_container = document.querySelector(".games_container");
            games_container.insertAdjacentHTML("beforeend", _html);
        }
    }

    document.addEventListener('keydown', PressingKey);

    function PressingKey(eve, secs) {
        switch (eve.keyCode) {
            case 65:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.a").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.a");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 66:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.b").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.b");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 67:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.c").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.c");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 68:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.d").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.d");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 69:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.e").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.e");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 70:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.f").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.f");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 71:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.g").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.g");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 72:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.h").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.h");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 73:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.i").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.i");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 74:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.j").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.j");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 75:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.k").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.k");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 76:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.l").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.l");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 77:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.m").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.m");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 78:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.n").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.n");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 79:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.o").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.o");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 80:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.p").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.p");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 81:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.q").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.q");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 82:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.r").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.r");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 83:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.s").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.s");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 84:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.t").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.t");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 85:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.u").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.u");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 86:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.v").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.v");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 87:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.w").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.w");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 88:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.x").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.x");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 89:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.y").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.y");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 90:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.z").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.z");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 48:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.zero").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.zero");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 49:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.un").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.un");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 50:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.deux").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.deux");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 51:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.trois").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.trois");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 52:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.quatre").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.quatre");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 53:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.cinq").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.cinq");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 54:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.six").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.six");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 55:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.sept").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.sept");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 56:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.huit").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.huit");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;

            case 57:
                var secs = timeInSecs;
                if (secs == 0){
                    console.log("TIME OUT ! Votre score est :" + score_number.innerHTML);
                }else {
                    var select = document.querySelectorAll(".char.neuf").length;
                    if(select > 0){
                        score_number.innerHTML++;
                        eve.preventDefault();
                        var div = document.querySelector(".char.neuf");
                        div.remove();
                    }else {
                        score_number.innerHTML--;
                    }
                }
                break;
        }
    }
});