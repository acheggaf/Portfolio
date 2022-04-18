var text = document.getElementById('text');
var navBar = document.getElementById('navbar');
var content = document.getElementsByClassName('projectContent');
var portrait = document.getElementById('portrait');
var img = document.getElementById('imgportrait');
var aboutMe = document.getElementById('aboutMeText');
var hero = document.getElementById('hero');
var burger = document.getElementById('burgerDiv');
var toggle = false;
var lis = document.getElementById("navbar").getElementsByTagName("li");
var send = document.getElementById('sendButton').getElementsByTagName("a")[0];
var info = document.getElementById('aboutMeSection').getElementsByTagName("a")[0];
var Competence = document.getElementById('competenceSection').getElementsByTagName("a")[0];
var Projets = document.getElementById('projetSection').getElementsByTagName("a")[0];
var Design = document.getElementById('designSection').getElementsByTagName("a")[0];
var Contact = document.getElementById('contactSection').getElementsByTagName("a")[0];

send.addEventListener('click', () => {
    var nom = document.getElementById('nomInput').value;
    var prenom = document.getElementById('prenomInput').value;
    var adersse = document.getElementById('adresseInput').value;
    var message = document.getElementById('messageInput').value;
    var txt = 'mailto:' + "ahmedrio11@gmail.com" + '?subject=' + nom + ' ' + prenom + '&body=' + message;
    window.open(txt);
});


info.addEventListener('click', () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    });
});

Competence.addEventListener('click', () => {
    window.scrollTo({
        top: 1300,
        behavior: 'smooth'
    });
});

Projets.addEventListener('click', () => {
    window.scrollTo({
        top: 1800,
        behavior: 'smooth'
    });
});

Design.addEventListener('click', () => {
    window.scrollTo({
        top: 3010,
        behavior: 'smooth'
    });
});

Contact.addEventListener('click', () => {
    window.scrollTo({
        top: 5000,
        behavior: 'smooth'
    });
});

//Functions*******************************************************
function setCorrectSize() {
    changeDisplay(innerWidth);
    resizeAboutMe(innerWidth);
    setHeroPlace(innerWidth);
    resteNavBarStateToDefault(innerWidth);
}
setCorrectSize();


function changeDisplay(width) {
    changeSize = false;
    if (width < 700) changeSize = true;

    for (let i = 0; i < content.length; i++) {
        if (changeSize)
            content[i].style.flexDirection = 'column';
        else
            content[i].style.flexDirection = '';
    }
}

function resizeAboutMe(width) {
    changeSize = false;
    if (width < 700) changeSize = true;
    var temp = document.getElementById('imgportrait');
    if (changeSize && temp != null) {
        temp.remove();
        aboutMe.style.width = '100%';
        aboutMe.style.marginLeft = '20px';
    } else if (!changeSize && temp == null) {
        var d = document.createElement('div');
        d.id = "imgportrait";
        aboutMe.remove();
        portrait.appendChild(d);
        portrait.appendChild(aboutMe);
        aboutMe.style.width = '20%';
    }
}


function setTyperWriter(width) {
    changeSize = false;
    if (width < 700) changeSize = true;

    if (changeSize) {
        typewriter.remove();
        document.getElementById('typewriter').remove();
    } else {
        var tw = document.getElementById('typewriter');
        if (tw == null) {
            var d = document.createElement('div');
            d.id = "typewriter";
            const h6 = document.createElement("h6");
            h6.id = "text";
            const textNode = document.createTextNode(" ");
            h6.appendChild(textNode);
            d.appendChild(h6);

        }
    }
}

function setHeroPlace(width) {
    changeSize = false;
    if (width < 700) changeSize = true;
    if (changeSize) {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        hero.style.left = '5%';
        hero.style.width = '90%';
    } else {
        hero.style.left = '25%';
        hero.style.width = '75%';
    }
}

function changeNavBarState() {
    toggle = !toggle;
    for (let i = 0; i < lis.length; i++) {
        if (toggle)
            lis[i].style.display = 'flex';
        else lis[i].style.display = 'none';

    }
}

function resteNavBarStateToDefault(width) {
    if (width > 700) {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.display = 'flex';
        }
    }

}

//EventListeners *************************************************
burger.addEventListener('click', () => {
    changeNavBarState();

});


window.addEventListener('resize', function(event) {
    setCorrectSize();
}, true);


window.addEventListener('scroll', () => {
    if (scrollY > 300) {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

//TyperWriterFonctionality *************************************************
var typewriter = new Typewriter(text, {
    loop: true,
    delay: 90,
    deleteSpeed: 40
});

typewriter.typeString('Je suis Ahmed CHEGGAF SAYAD.')
    .pauseFor(1000)
    .deleteChars(20)
    .typeString('un ingénieur en Informa\ntique.')
    .pauseFor(1000)
    .start();