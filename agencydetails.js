const agentName = document.getElementById ('onPress');
const agentNameStar = document.getElementById('star1');
const star = document.getElementById('stars');
const roundselector = document.getElementById ('innerselect');
const roundselector1 = document.getElementById ('innerselector1');
const emails = document.getElementById ('email');
const addToDoInput = document.getElementById ('addinput');
const toDoList = [];
let listNumber = 1;

function email1 () {
    if ((emails.value.includes('@gmail')) || (emails.value.includes('@yahoo')) || (emails.value.includes('.com'))) {
    document.getElementById("stars").style.display='none'
} else {
    document.getElementById("stars").style.display='unset';
}
}


function removeBtnClass(){
    document.querySelectorAll('span.innerselector').forEach(function(e){
      e.classList.remove("innerselector");
    })

}

removeBtnClass();

function greenPress () {
    this.removeBtnClass();
    document.getElementById('innerselect').classList.add('innerselector');
    console.log(document.getElementById('innerselector1').classList)
    //document.getElementById('innerselect').style.display='block';
}

function greenClick () {
    this.removeBtnClass();
    
    document.getElementById('innerselector1').classList.add('innerselector');
    console.log(document.getElementById('innerselector1').classList)
}


function onlyLetter () {
    console.log(agentName.value);
}
 
function stardisappear () {
    if (agentName.value.length>=2) {
        agentNameStar.style.display='none';
    }
    else {
        agentNameStar.style.display='unset';
    }
}


function add () {
   localStorage.setItem('age','24');
   localStorage.getItem('name');
   localStorage.clear();
   localStorage.removeItem('age');
   console.log(localStorage.getItem('age'));

}



function addToArray (){
    toDoList.push(addToDoInput.value);
    localStorage.setItem('toDoList',JSON.stringify(toDoList))
    document.getElementById('showtodolist').innerHTML += `<div> ${listNumber}: ${addToDoInput.value} </div>`;
    listNumber++;
    
}
//addToArray ();




