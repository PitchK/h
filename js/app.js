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

document.getElementById('menu').addEventListener('click', show);