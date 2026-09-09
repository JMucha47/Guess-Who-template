let picking = true;

function setBoard(){
    let cont = "";
    for(let i=1;i<=21;i++){
        cont += `<div id="character${i}" class="characters" onclick="characterHandler(${i})"> <div id="image${i}" class="imgHolder"></div> <div class="names">${names[i-1]}</div> </div>`;
    }

    document.getElementById("gameplan").innerHTML = cont;
}

function characterHandler(id){
    if(picking){
        document.getElementById("pickedImg").style.backgroundImage = `url(img/${id}.png)`;
        document.getElementById("pickedImg").innerHTML = '';
        document.getElementById("pickedName").innerHTML = names[id-1];
        document.getElementById("buttRight").innerHTML = "New Game";
        document.getElementById("headline").innerHTML = "Guess Who";
        picking = false;
    }else{
        const which = document.getElementById("image"+id);
        which.innerHTML = which.innerHTML == "" ? `<div class="cross"></div>` : "";
    }
}

function buttonHandler(){
    if(picking){
        let rand = Math.floor(Math.random()*21)+1;
        characterHandler(rand);
    }else{
        document.getElementById("buttRight").innerHTML = "Random";
        document.getElementById("headline").innerHTML = "Choose your character";
        document.getElementById("pickedImg").style.backgroundImage = ``;
        document.getElementById("pickedImg").innerHTML = '<br><br><br><br>[Character not picked]';
        document.getElementById("pickedName").innerHTML = "[Character name]";
        document.getElementById("notearea").value = "";
        picking = true;
        setBoard();
    }
}