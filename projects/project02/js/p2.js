var empty;
var moveCount;
var isComplete = false;
var time = 0;
var cellId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

window.addEventListener("load", startTimer, false);

// Begins Time Elapsed count
function startTimer() {
    window.setInterval("updateTime()", 1000);
} 

// Updates Time Elapsed time variable
function updateTime() { 
    ++time;
    document.getElementById("time").innerHTML ="Time Elapsed: " + time;
} 

function start() {
    moveCount = 0;
    isComplete = false;

    // label each cell 
    for(var i=0; i < 16; i++) {
        var tmp = document.getElementById(i);
        tmp.className = "cell ";
    }

    randomNumber = cellId.sort(function () { return (Math.round(Math.random())-0.5);});
    

    for(var i=0; i < 16; i++) {
        var tmp = document.getElementById(i);
        if(randomNumber[i] == 16) {
            tmp.className = "cell empty";
            tmp.innerHTML = "";
            empty = i;
        }
        else { tmp.innerHTML = randomNumber[i]; }
    }

}

function userClick(x) {

    if(isComplete) { return; }

    if(x.id != empty+'') {
        var emptyI = Math.floor(empty/4);
        var emptyJ = empty % 4;
        var id_selected = Number(x.id);
        var selectedI = Math.floor(id_selected/4);
        var selectedJ = id_selected % 4;

        if((Math.abs(emptyI - selectedI) == 1 && emptyJ == selectedJ) || (Math.abs(emptyJ - selectedJ) == 1 && emptyI == selectedI)) {
            document.getElementById(empty).className = "cell";
            document.getElementById(empty).innerHTML = x.innerHTML;
            
            x.className = "cell empty";
            x.innerHTML = '';
            
            empty = id_selected;
            moveCount++;

            document.getElementById("moves").innerHTML = "Moves: " + moveCount;
            
            if(isDone()){
                isComplete = true;
                document.getElementById("moves").innerHTML = "Moves: " + moveCount;
                if(confirm("Play again?")){ window.location.reload(); }
                
            }
        }
    }
}

function simpleGame(){
    if(isComplete) { window.location.reload(); }
    time = 0;
    moveCount = 0;
    document.getElementById("moves").innerHTML = "Moves: " + moveCount;
    for(var i=0; i < 16; i++) {
        var tmp = document.getElementById(i);
        if(i == 14) {
            tmp.className = "cell empty";
            tmp.innerHTML = "";
            empty = i;
        }
        else if(i == 15) {
            tmp.className = "cell";
            tmp.innerHTML = "15";
        }
        else{
            tmp.innerHTML = i+1;
            tmp.className = "cell";
        }
    }
}

function isDone() {
    return  document.getElementById('0').innerHTML == '1' &&
            document.getElementById('1').innerHTML == '2' &&
            document.getElementById('2').innerHTML == '3' &&
            document.getElementById('3').innerHTML == '4' &&
            document.getElementById('4').innerHTML == '5' &&
            document.getElementById('5').innerHTML == '6' &&
            document.getElementById('6').innerHTML == '7' &&
            document.getElementById('7').innerHTML == '8' &&
            document.getElementById('8').innerHTML == '9' &&
            document.getElementById('9').innerHTML == '10' &&
            document.getElementById('10').innerHTML == '11' &&
            document.getElementById('11').innerHTML == '12' &&
            document.getElementById('12').innerHTML == '13' &&
            document.getElementById('13').innerHTML == '14' &&
            document.getElementById('14').innerHTML == '15';
}


