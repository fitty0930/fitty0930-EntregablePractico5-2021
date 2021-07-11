document.addEventListener("DOMContentLoaded", function() {
    const USERNAME = "admin";
    const TELEFONO = "12345"
    const EMAIL = "hola@gmail.com"
    const PASSWORD = "admin";
    const INGRESARID = "Usted debe ingresar un identificador";
    const INGRESARPW = "Usted debe ingresar una contraseña";
    const IDREFUSED = "No tenemos a nadie con esas credenciales"
    const PWREFUSED = "Contraseña incorrecta";
    const OCULTAR = "ocultar"


    let ojito = document.getElementById("show_password");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let btnlogin = document.getElementById("login");
    let useralert = document.getElementById("username-alert");
    let pwalert = document.getElementById("password-alert");
    let idlabel = document.getElementById("idlabel");
    let pwlabel = document.getElementById("pwlabel");

    ojito.addEventListener("mouseover", function() {
        ojito.classList.add("text-primary")
    })

    ojito.addEventListener("mouseout", function() {
        ojito.classList.remove("text-primary")
    })


    btnlogin.addEventListener("click", validate);

    username.addEventListener('mousedown', () => {
        if (username.value == "") {
            idlabel.classList.remove(OCULTAR)
        }
    })

    username.addEventListener('mouseover', () => {
        if (username.value == "") {
            idlabel.classList.remove(OCULTAR)
        } else {
            idlabel.classList.add(OCULTAR)
        }
    })

    username.addEventListener('mouseout', () => {
        if (username.value == "") {
            idlabel.classList.remove(OCULTAR)
        } else {
            idlabel.classList.add(OCULTAR)
        }
    })

    password.addEventListener('mousedown', () => {
        if (password.value == "") {
            pwlabel.classList.remove(OCULTAR)
        }
    })

    password.addEventListener('mouseout', () => {
        if (password.value == "") {
            pwlabel.classList.remove(OCULTAR)
        } else {
            pwlabel.classList.add(OCULTAR)
        }
    })

    password.addEventListener('mouseover', () => {
        if (password.value == "") {
            pwlabel.classList.remove(OCULTAR)
        } else {
            pwlabel.classList.add(OCULTAR)
        }
    })

    function validate(event) {
        event.preventDefault();
        useralert.classList.add(OCULTAR);
        pwalert.classList.add(OCULTAR);
        if (username.value == "" && password.value == "") {
            useralert.innerHTML = INGRESARID
            useralert.classList.remove(OCULTAR);
            pwalert.innerHTML = INGRESARPW
            pwalert.classList.remove(OCULTAR);
            idlabel.style.display = "none";
            pwlabel.style.display = "none";
        } else {
            checkUsername();
        }

    }

    function checkUsername() {
        if (username.value == "") {
            useralert.innerHTML = INGRESARID
            useralert.classList.remove(OCULTAR);
        } else {
            if (username.value != USERNAME && username.value != TELEFONO && username.value != EMAIL) {
                useralert.innerHTML = IDREFUSED
                useralert.classList.remove(OCULTAR);
                idlabel.style.display = "none";

            } else {
                checkPassword();
            }
        }
    }

    function checkPassword() {
        if (password.value == "") {
            pwalert.innerHTML = INGRESARPW
            pwalert.classList.remove(OCULTAR);
            pwlabel.classList.add(OCULTAR)
            pwlabel.style.display = "none";

        } else if (password.value != PASSWORD) {
            pwalert.innerHTML = PWREFUSED
            pwalert.classList.remove(OCULTAR);
            pwlabel.style.display = "none";
        } else {
            idlabel.style.display = "none";
            pwlabel.style.display = "none";
            window.location.href = 'homeLogueado.html'; // LO REDIRIJO A DONDE SE LOGUEO
        }
    }

})