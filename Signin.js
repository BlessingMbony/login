const email = document.getElementById('emailid');
const password = document.getElementById('passwordid');
const cautionemail = document.getElementById('cautionemail').style.display = "none";
const cautionpassword = document.getElementById('cautionpassword').style.display = "none";
const emailstyle = document.getElementById('emailid');
const passwordstyle = document.getElementById('passwordid');
const continuestyle = document.getElementById('round');

const submit = function(){ //post to server 
}

const validatorEmail = function(){
        if ( ( email.value.includes('@')) && ( email.value.includes('.com') ) )
        {
            document.getElementById('cautionemail').style.display = "none";
            document.getElementById('emailid').style.borderColor='rgb(239, 239, 239)';
           } 
           else {
            document.getElementById("cautionemail").style.display = "block"; 
            document.getElementById('emailid').style.borderColor='blue';
           }
    }

const validatorPassword = function(){
       if ( ( password.value.length < 5 ) ||
            ( password.value.length > 8 ) ){
        document.getElementById('cautionpassword').style.display = "block";
        document.getElementById('passwordid').style.borderColor='red';
        
       } else {
        document.getElementById('cautionpassword').style.display = "none";
        document.getElementById('passwordid').style.borderColor=' rgb(239, 239, 239)';
       }

       if ( ( ( email.value.includes('@')) && ( email.value.includes('.com') ) ) && (( 5 < password.value.length  ) || ( password.value.length > 8 ))) {
        document.getElementById('round').style.backgroundColor='hsl(90.82deg 99.1% 56.47%)';
    }

    }


    
