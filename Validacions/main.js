
//Funció per validar el formulari de cerca

function validateSearch() {

    //recuperem id del input del formulari
    const search = document.querySelector('#searchWord');
    //recuprem el id del div per mostrar l'error 
    const feedback = document.getElementById('error');                 

    //Comprovem les condicions
    if(search.value == "" ) {
        //Afegim classe per marcar a errada
        search.classList.add('error__field');
        //Incrustem missatge errada
        feedback.innerHTML= `
                <p class="alert alert-danger" role="alert">
                    El camp és obligatori
                </p>`;        
        return false;
    }
    if(search.value.length < 3) {
        //Afegim classe per marcar a errada
        search.classList.add('error__field');
        //Incrustem missatge errada
        feedback.innerHTML= `<p class="alert alert-danger" role="alert">
        El camp ha de tenir més de 3 caràters
        </p>`
        return false;
    } else {
        search.classList.add('success__field');
        feedback.innerHTML= `<p class="alert alert-success" role="alert">
        Formulari enviat correctament
        </p>`

        return false
    }
}

//Funció per validar el formulari de login
function validateLogin() {
     //contador d'errors   
    let err = 0 ;

    // Recuperem valors del formulari
    const userEmail = document.querySelector('#email');

    const pwUser = document.querySelector('#pw');
    //Recuprem id per mostrar missatges
    const feedback = document.getElementById('errorLogin');
    //Fem les comprovacions
    if( userEmail.value == "")  {   
        userEmail.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                El correu electrònic és obligatori
                             </p>`
        err++;
    } else if (!validar_email(userEmail.value)) {
        userEmail.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                El format del correu electrònic no és correcte
                             </p>`
        err++;
    }
    if( pwUser.value == "" ) {
        pwUser.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                               La contrasenya és obligatoria
                             </p>`
        err++;
    }
    if (err > 0)  {
        return false;
    } else {
        // mostrem feedback positiu usuari
        userEmail.classList.add('success__field');
        pwUser.classList.add('success__field');
        feedback.innerHTML = `<p class="alert alert-success" role="alert">
                               Formulari correcte
                             </p>`
        return false
    }

}

// Funció per validar el formulari de registre
function validateRegister() {

    let err = 0;

    //Recuperem valors formulari
    const emailUser = document.querySelector('#emailRegister');
    const pwUser = document.querySelector('#pwRegister');
    const pwUserRepite =  document.querySelector('#pwrepiteRegister');
    const provinceUser = document.querySelector('#selectRegister');
    //Recuprem id per mostrar missatges
    const feedback = document.querySelector('#errorRegister');
    //Fem les verificacions
    if (emailUser.value == "" ) {
        emailUser.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                El correu electrònic és obligatori
                             </p>`
        err++;
    }else if (!validar_email(emailUser.value)) {
        emailUser.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                El format del correu electrònic no és correcte
                             </p>`
        err++;
    } if (pwUser.value == "") {
        pwUser.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                La contrasenya és obligatoria
                             </p>`
        err++;
    } if (pwUserRepite.value == "") {
        pwUserRepite.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                Aquest camp també és obligatori
                             </p>`
        err++;                     
    } if (pwUserRepite.value !== pwUser.value ) {
        pwUser.classList.add('error__field');
        pwUserRepite.classList.add('error__field');
        feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                La contrasenya no coincideix
                             </p>`
        err++;   
    } if (err > 0) {
        return false; 
    } else {
        return true;
    }
}

//Funció per validar el format del email
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}


/*************************************
 ************* NIVELL 2 **************
 ************************************/

function validatePassword() {
    //Recuperem els valors del formulari
    const password = document.querySelector('#passwordUser');
    const feedback = document.querySelector('#errPwN2');

   if (!checkEmail(password.value)) {
       console.log('teste');
    password.classList.add('error__field');
    feedback.innerHTML = `<p class="alert alert-danger" role="alert">
                                La contrasenya ha de tenir com a mínim 8 caracters
                                un número i una majúscula
                             </p>`
            return false;
   } else {

       return true;
   }
 }

 //funció per verificar la contrasenya
function checkEmail(pw) {

    let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[0-9])\S{8}$/;

    return regex.test(pw)? true: false;
}