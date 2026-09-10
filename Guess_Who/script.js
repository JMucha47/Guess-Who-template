let picking = true;

function setBoard(){
    let cont = "";
    let name;
    for(let i=1;i<=howManyCharacters;i++){
        name = i<=names.length ? names[i-1] : "[Name not found]";
        cont += `<div id="character${i}" class="characters" onclick="characterHandler(${i})"> <div id="image${i}" class="imgHolder" style="background-image: url('img/${i}.png');"></div> <div class="names">${name}</div> </div>`;
    }

    document.getElementById("gameplan").innerHTML = cont+"<div class='stopper'></div>";
}

function characterHandler(id){
    if(picking){
        document.getElementById("pickedImg").style.backgroundImage = `url(img/${id}.png)`;
        document.getElementById("pickedImg").innerHTML = '';
        document.getElementById("pickedName").innerHTML = id<=names.length ? names[id-1] : "[Name not found]";
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
        let rand = Math.floor(Math.random()*howManyCharacters)+1;
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