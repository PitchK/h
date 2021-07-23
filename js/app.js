/*for (var i = 0; i < document.getElementsByClassName('images').length; i++){
    document.getElementsByClassName('images')[i].addEventListener('click', enlarge);
}

function enlarge(){
    for (var i = 0; i < document.getElementsByClassName('images').length; i++){
        document.getElementsByClassName('images')[i].style.transform = 'scale(1)';
    }
    this.style.transform = 'scale(3)';
}*/

function show(){
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = '2px solid black';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }
}

var database = [{model: 'The AirPoint\'21', difficulty: '4.5'}]

document.getElementById('menu').addEventListener('click', show);
var listOfDifficulties = [5.5, 7.5, 5, 8.5, 7, 4.5];
for (var i = 0; i < document.getElementsByClassName('difficultyVisual').length; i++){
    document.getElementsByClassName('difficultyVisual')[i].style.background = 'linear-gradient(to right, #42aaf5 0%, #42aaf5 ' + listOfDifficulties[i]*10 + '%, lightgrey ' + listOfDifficulties[i]*10 +'%, lightgrey 100%)';
}