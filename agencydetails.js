const agentName = document.getElementById ('onPress');
const agentNameStar = document.getElementById('star1');
const star = document.getElementById('stars');
const roundselector = document.getElementById ('innerselect');
const roundselector1 = document.getElementById ('innerselector1');
const emails = document.getElementById ('email');

 

function email1 () {
    if ((emails.value.includes('@gmail.com')) || (emails.value.includes('@yahoo.com')) || (emails.value.includes('@outlook.fr'))) {
    console.log (emails.value);
} else {
    document.getElementById("stars").style.display='block';
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






