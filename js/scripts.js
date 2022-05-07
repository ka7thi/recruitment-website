

window.addEventListener('load', function(){

    window.addEventListener("scroll", dockMenu = () => {
        
        const nav = document.querySelector(".nav-wrap");
        const navLogo = document.querySelector(".nav_logo");
        const navA = document.querySelectorAll("#nav a");

        if(document.querySelector(".nav_list").style.display === "block"){
            document.querySelector(".nav_list").style.display = "none"
        }

        nav.style.backgroundColor = "#001927";
        nav.style.padding = "10px 0 10px 0";
        nav.style.height = "80px";
        navLogo.style.width = "72px";
        navLogo.style.height = "80px";
        for(i=0; i<=navA.length-1; i++){
            navA[i].style.fontSize = "13px";
        }
        
        if(window.pageYOffset === 0){

            nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
            nav.style.padding = "39px 0 10px 0";
            navLogo.style.width = "90px";
            navLogo.style.height = "100px";
            for(i=0; i<=navA.length-1; i++){
                navA[i].style.fontSize = "16px";
            } 
        }
    });

    document.querySelector(".nav_hamburger").addEventListener("click", showHideMenu = () => {

        if(document.querySelector(".nav_list").style.display === "block"){
            document.querySelector(".nav_list").style.display = "none"
        } else {
            document.querySelector(".nav_list").style.display = "block"
        }
    })

    const addClass = (e) => {
        e.classList.add('--slider-control-button-active');
    }

    const removeClass = (e) => {
        e.classList.remove('--slider-control-button-active');
    }

    const addActionForControlButtons = i => {
        document.querySelector("#header").style.backgroundImage = "url(" + sliderImg[i] + ")";
        removeClass(sliderControlButtons[sliderStatus]);
        sliderStatus = i;
        addClass(sliderControlButtons[sliderStatus]);
    }
        
    const sliderImg = ["img/header-img1.jpg", "img/header-img2.jpg", "img/header-img3.jpg", "img/header-img4.jpg"];
    const sliderControlButtons = document.querySelectorAll(".--slider-control-button");

    const sliderAction = () => {
        for(i = 0; i < sliderControlButtons.length; i++){
            sliderControlButtons[i].addEventListener("click", addActionForControlButtons.bind(null,i));    
        }
    }
    sliderAction();
    

    let sliderStatus = 0;
    addClass(sliderControlButtons[sliderStatus]);

    const sliderLeftRightButtons = document.querySelectorAll(".slider_button");

    const moveLeft = () => {
        removeClass(sliderControlButtons[sliderStatus]);
        sliderStatus = sliderStatus - 1
        if(sliderStatus < 0){
            sliderStatus = 3
        };
        addClass(sliderControlButtons[sliderStatus]);

        document.querySelector("#header").style.backgroundImage = "url(" + sliderImg[sliderStatus] + ")";
    };

    const moveRight = () => {
        removeClass(sliderControlButtons[sliderStatus]);
        sliderStatus = sliderStatus + 1
        if(sliderStatus > 3){
            sliderStatus = 0
        };
        addClass(sliderControlButtons[sliderStatus]);

        document.querySelector("#header").style.backgroundImage = "url(" + sliderImg[sliderStatus] + ")";
    };

    sliderLeftRightButtons[0].addEventListener("click", moveLeft);
    sliderLeftRightButtons[1].addEventListener("click", moveRight);

    window.setInterval(moveRight, 30000);

    const playButton = document.querySelector(".description_play-button");

    playButton.addEventListener("click", openVideo = () => {

        const firstDiv = document.createElement("div");
        const secondDiv= document.createElement("div");
        const closeButton = document.createElement("button");
        secondDiv.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/T5R6lnWHUh8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        firstDiv.classList.add("video-popup-wrapper");
        secondDiv.classList.add("video-popup");
        closeButton.classList.add("video-popup-close-button");
        document.body.appendChild(firstDiv);
        document.querySelector(".video-popup-wrapper").appendChild(secondDiv);
        document.querySelector(".video-popup").appendChild(closeButton);

        closeButton.addEventListener("click", closeVideo = () => {
            document.querySelector(".video-popup-wrapper").remove();
        })
    })

    document.querySelector(".contact_form").addEventListener("submit", check => {
        this.event.preventDefault();
    
        const firstName = document.querySelector("#first-name");
        const lastName = document.querySelector("#last-name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
        const checkBox = document.querySelector("#checkbox");
        const checkBoxLabel = document.querySelector(".checkbox-label");

        const checkEmail = (string) => {

            let checkStatus = 0; 

            for(i = 0; i < string.length; i++){
                if(string[i] === "@") {
                    checkStatus++;
                }
            }

            for(i = 0; i < string.length; i++){
                if(string[i] === ".") {
                    checkStatus++;
                }
            }
            return checkStatus
        }

        const validate = () => {

            let error = true;
            let firstNameError = true;
            let lastNameError = true;
            let emailError = true;
            let messageError = true;
            let checkBoxError = true;

            if(firstName.value.length < 3){
                firstName.classList.add("bad-data");
                firstNameError = true;
                document.querySelector(".form_first-name label").textContent = "Niepoprawne imię";
                document.querySelector(".form_first-name label").style.color = "#ff4148";
            } else {
                firstName.classList.remove("bad-data");
                document.querySelector(".form_first-name label").textContent = "Imię";
                document.querySelector(".form_first-name label").style.color = "#7b94a5";
                firstNameError = false;
            }

            if(lastName.value.length < 3){
                lastName.classList.add("bad-data");
                lastNameError = true;
                document.querySelector(".form_last-name label").textContent = "Niepoprawne nazwisko";
                document.querySelector(".form_last-name label").style.color = "#ff4148";
            } else {
                lastName.classList.remove("bad-data");
                document.querySelector(".form_last-name label").textContent = "Nzwisko";
                document.querySelector(".form_last-name label").style.color = "#7b94a5";
                lastNameError = false;
            }

            if(email.value.length < 3 || checkEmail(email.value) !== 2){
                email.classList.add("bad-data");
                emailError = true;
                document.querySelector("#email + label").textContent = "Niepoprawny adres e-mail";
                document.querySelector("#email + label").style.color = "#ff4148";
            } else {
                email.classList.remove("bad-data");
                document.querySelector("#email + label").textContent = "Adres e-mail";
                document.querySelector("#email + label").style.color = "#7b94a5";
                emailError = false;
            }

            if(message.value.length < 10){
                message.classList.add("bad-data");
                messageError = true;
                document.querySelector(".form_message-label").textContent = "Za krótka treść wiadomości";
                document.querySelector(".form_message-label").style.color = "#ff4148";
            } else {
                message.classList.remove("bad-data");
                document.querySelector(".form_message-label").textContent = "Treść wiadomości";
                document.querySelector(".form_message-label").style.color = "#7b94a5";
                messageError = false;
            }

            if(checkBox.checked !== true){
                checkBoxLabel.style.color = "#ff4148";
                checkBoxError = true;
            } else {
                checkBoxLabel.style.color = "#002841";
                checkBoxError = false;
            }

            if(firstNameError !== true && lastNameError !== true && emailError !== true && messageError !== true && checkBoxError !== true) {
                error = false
            } else {
                error = true
            }
            return error
        }

        const error = validate();

        const sendForm = () => {

            const xhr = new XMLHttpRequest();

            xhr.addEventListener("load", function() {
                if (xhr.status === 200) {
                    console.log("Wysłano.");
                    
                    firstName.value = "";
                    lastName.value = "";
                    email.value = "";
                    message.value = "";
                    checkBox.checked = false;
                }
            });

            xhr.open("POST", "empty.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(encodeURI("firstName=&{firstName.value}&lastName=&{lastName.value}&email=&{email.value}&message=&{message.value}"));
        }

        if(error === false){
            sendForm();
        } else {
            console.log(error);
            console.log("nie wysłano formularza")
        }
    })
});