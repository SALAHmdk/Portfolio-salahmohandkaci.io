/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

    


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});



ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// JavaScript
// Add this to your existing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    let skillsItems = document.querySelectorAll('ul li');

    skillsItems.forEach(item => {
        let progressBarContainer = item.querySelector('.progress-bar-container');
        let progressBar = progressBarContainer.querySelector('.progress-bar');
        let percentText = progressBarContainer.querySelector('.percent-text'); 
        let percentValue = item.getAttribute('data-percent');

        item.addEventListener('mouseenter', () => {
            progressBar.style.width = `${percentValue}%`;
            percentText.textContent = `${percentValue}%`; 
        });

        item.addEventListener('mouseleave', () => {
            progressBar.style.width = '0';
            percentText.textContent = ''; 
        });
    });
});

  




/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer','Data Analyst','Data Scientist','Data Visualization Specialist','Cybersecurity Consultant','IT Project Manager','IT Consultant','Information Systems Architect','ERP/CRM Consultant','Data Architect','AI Product Manager','Chef De Projet'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 40,
    loop: true
});

// custom js

// ...


function toggleVisibility() {
    var hiddenContent = document.getElementById("hiddenContent");
  
    
    if (hiddenContent.style.display === "none") {
    
      hiddenContent.style.display = "block";
    } else {
      
      hiddenContent.style.display = "none";
    }
}



let currentDashboardImageIndex = 0;
const dashboardImages = ["images/E1.png", "images/E2.png", "images/T1.png", "images/T2.png"];


function openDashboardModal() {
    var dashboardModal = document.getElementById("dashboardModal");
    var dashboardModalImage = document.getElementById("dashboardModalImage");
    var prevDashboardButton = document.getElementById("prevDashboardButton");
    var nextDashboardButton = document.getElementById("nextDashboardButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDashboardImageIndex = 0;

    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];
    dashboardModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";

    prevDashboardButton.onclick = function() {
        showPreviousDashboardImage();
    };

    nextDashboardButton.onclick = function() {
        showNextDashboardImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";
    };

   
    dashboardModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === dashboardModal) {
            closeDashboardModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Dashboards
function showNextDashboardImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentDashboardImageIndex = (currentDashboardImageIndex + 1) % dashboardImages.length;

    var dashboardModalImage = document.getElementById("dashboardModalImage");
    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];

 
    var prevDashboardButton = document.getElementById("prevDashboardButton");
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Dashboards
function showPreviousDashboardImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentDashboardImageIndex = (currentDashboardImageIndex - 1 + dashboardImages.length) % dashboardImages.length;

    var dashboardModalImage = document.getElementById("dashboardModalImage");
    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];

    var prevDashboardButton = document.getElementById("prevDashboardButton");
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";

    var nextDashboardButton = document.getElementById("nextDashboardButton");
    nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Dashboards
function closeDashboardModal() {
    var dashboardModal = document.getElementById("dashboardModal");
    dashboardModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}

// ==================== CHATBOT MODAL ====================
let currentChatbotImageIndex = 0;
const chatbotImages = ["images/IA1.png", "images/chatbot2.png"];

function openChatbotModal() {
    var chatbotModal = document.getElementById("chatbotModal");
    var chatbotModalImage = document.getElementById("chatbotModalImage");
    var prevChatbotButton = document.getElementById("prevChatbotButton");
    var nextChatbotButton = document.getElementById("nextChatbotButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    currentChatbotImageIndex = 0;

    chatbotModalImage.src = chatbotImages[currentChatbotImageIndex];
    chatbotModal.style.display = "block";

    prevChatbotButton.style.display = currentChatbotImageIndex === 0 ? "none" : "block";
    nextChatbotButton.style.display = currentChatbotImageIndex === chatbotImages.length - 1 ? "none" : "block";

    prevChatbotButton.onclick = showPreviousChatbotImage;
    nextChatbotButton.onclick = showNextChatbotImage;
}

function showNextChatbotImage() {
    currentChatbotImageIndex = (currentChatbotImageIndex + 1) % chatbotImages.length;
    document.getElementById("chatbotModalImage").src = chatbotImages[currentChatbotImageIndex];
}

function showPreviousChatbotImage() {
    currentChatbotImageIndex = (currentChatbotImageIndex - 1 + chatbotImages.length) % chatbotImages.length;
    document.getElementById("chatbotModalImage").src = chatbotImages[currentChatbotImageIndex];
}

function closeChatbotModal() {
    document.getElementById("chatbotModal").style.display = "none";
    document.body.style.overflow = 'auto';
}
// ==================== PHISHING & SMISHING PLATFORM MODAL ====================
let currentPhishingImageIndex = 0;
const phishingImages = ["images/L1.png", "images/L2.png", "images/L3.png"];

function openPhishingModal() {
    var phishingModal = document.getElementById("phishingModal");
    var phishingModalImage = document.getElementById("phishingModalImage");
    var prevPhishingButton = document.getElementById("prevPhishingButton");
    var nextPhishingButton = document.getElementById("nextPhishingButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    currentPhishingImageIndex = 0;

    phishingModalImage.src = phishingImages[currentPhishingImageIndex];
    phishingModal.style.display = "block";

    prevPhishingButton.style.display = currentPhishingImageIndex === 0 ? "none" : "block";
    nextPhishingButton.style.display = currentPhishingImageIndex === phishingImages.length - 1 ? "none" : "block";

    prevPhishingButton.onclick = showPreviousPhishingImage;
    nextPhishingButton.onclick = showNextPhishingImage;
}

function showNextPhishingImage() {
    currentPhishingImageIndex = (currentPhishingImageIndex + 1) % phishingImages.length;
    document.getElementById("phishingModalImage").src = phishingImages[currentPhishingImageIndex];
}

function showPreviousPhishingImage() {
    currentPhishingImageIndex = (currentPhishingImageIndex - 1 + phishingImages.length) % phishingImages.length;
    document.getElementById("phishingModalImage").src = phishingImages[currentPhishingImageIndex];
}

function closePhishingModal() {
    document.getElementById("phishingModal").style.display = "none";
    document.body.style.overflow = 'auto';
}

// Ajout de la fermeture avec la touche "Échap"
document.onkeydown = function(event) {
    if (event.key === "Escape") {
        closePhishingModal();
        closeChatbotModal();
        closeEcommerceModal();
        closeDashboardModal();
        closePortfolioModal();
        closeDashModal();
    }
};




let currentDockerImageIndex = 0;
const dockerImages = ["images/N1.png", "images/N2.png", "images/N3.png"];

function openDockerModal() {
    var modal = document.getElementById("dockerModal");
    var modalImage = document.getElementById("dockerModalImage");
    var prevButton = document.getElementById("prevDockerButton");
    var nextButton = document.getElementById("nextDockerButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDockerImageIndex = 0;
    modalImage.src = dockerImages[currentDockerImageIndex];
    modal.style.display = "block";

    prevButton.style.display = currentDockerImageIndex === 0 ? "none" : "block";
    nextButton.style.display = currentDockerImageIndex === dockerImages.length - 1 ? "none" : "block";
}

function showNextDockerImage() {
    currentDockerImageIndex = (currentDockerImageIndex + 1) % dockerImages.length;
    var modalImage = document.getElementById("dockerModalImage");
    modalImage.src = dockerImages[currentDockerImageIndex];

    document.getElementById("prevDockerButton").style.display = "block";
    document.getElementById("nextDockerButton").style.display = currentDockerImageIndex === dockerImages.length - 1 ? "none" : "block";
}

function showPreviousDockerImage() {
    currentDockerImageIndex = (currentDockerImageIndex - 1 + dockerImages.length) % dockerImages.length;
    var modalImage = document.getElementById("dockerModalImage");
    modalImage.src = dockerImages[currentDockerImageIndex];

    document.getElementById("prevDockerButton").style.display = currentDockerImageIndex === 0 ? "none" : "block";
    document.getElementById("nextDockerButton").style.display = "block";
}

function closeDockerModal() {
    var modal = document.getElementById("dockerModal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}





let currentImageIndex1 = 0;
const images = ["images/r1.png", "images/r2.png", "images/r3.png", "images/r4.png", "images/r5.png", "images/footer.png"];

function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');


    currentImageIndex = 0;

    modalImage.src = images[currentImageIndex];
    modal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
    
    prevButton.onclick = function() {
        showPreviousImage();
    };
    
    nextButton.onclick = function() {
        showNextImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
    };

   
    modal.onclick = function(event) {
       
        if (event.target === modal) {
            closeModal();
        }
    };
}


// Fonction pour afficher la prochaine image
function showNextImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentImageIndex = (currentImageIndex + 1) % images.length;
  
    var modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";
}


// Fonction pour afficher l'image précédente
function showPreviousImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  
    var modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];

    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";

    var nextButton = document.getElementById("nextButton");
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
}




function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');

}


let currentFunctionImageIndex = 0;
const functionImages = ["images/f1.png", "images/f2.png"];

// ...

// Fonction pour ouvrir la deuxième fenêtre modale
function openFunctionModal() {
    var functionModal = document.getElementById("functionImageModal");
    var functionModalImage = document.getElementById("functionModalImage");
    var prevFunctionButton = document.getElementById("prevFunctionButton");
    var nextFunctionButton = document.getElementById("nextFunctionButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentFunctionImageIndex = 0;

    functionModalImage.src = functionImages[currentFunctionImageIndex];
    functionModal.style.display = "block";

    // Vérifiez la taille de l'image avant d'appliquer les styles
    var img = new Image();
    img.src = functionImages[currentFunctionImageIndex];
    img.onload = function () {
        if (img.width > window.innerWidth * 0.5) {
            functionModalImage.style.maxWidth = "65%";
        } else {
            functionModalImage.style.maxWidth = "none";
        }
    };

    


    // Gérer l'affichage du bouton "Show Previous Image"
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";

    prevFunctionButton.onclick = function() {
        showPreviousFunctionImage();
    };

    nextFunctionButton.onclick = function() {
        showNextFunctionImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";
    };

};


// Fonction pour afficher la prochaine image de la deuxième fenêtre modale
function showNextFunctionImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentFunctionImageIndex = (currentFunctionImageIndex + 1) % functionImages.length;

    var functionModalImage = document.getElementById("functionModalImage");
    functionModalImage.src = functionImages[currentFunctionImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevFunctionButton = document.getElementById("prevFunctionButton");
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la deuxième fenêtre modale
function showPreviousFunctionImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentFunctionImageIndex = (currentFunctionImageIndex - 1 + functionImages.length) % functionImages.length;

    var functionModalImage = document.getElementById("functionModalImage");
    functionModalImage.src = functionImages[currentFunctionImageIndex];

    var prevFunctionButton = document.getElementById("prevFunctionButton");
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";

    var nextFunctionButton = document.getElementById("nextFunctionButton");
    nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la deuxième fenêtre modale
function closeFunctionModal() {
    var functionModal = document.getElementById("functionImageModal");
    functionModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}

let currentPortfolioImageIndex = 0;
const portfolioImages = ["images/P1.png", "images/p2.png", "images/p3.png", "images/p4.png" /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la fenêtre modale Portfolio
function openPortfolioModal() {
    var portfolioModal = document.getElementById("portfolioModal");
    var portfolioModalImage = document.getElementById("portfolioModalImage");
    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    var nextPortfolioButton = document.getElementById("nextPortfolioButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentPortfolioImageIndex = 0;

    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];
    portfolioModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";

    prevPortfolioButton.onclick = function() {
        showPreviousPortfolioImage();
    };

    nextPortfolioButton.onclick = function() {
        showNextPortfolioImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    portfolioModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === portfolioModal) {
            closePortfolioModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Portfolio
function showNextPortfolioImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentPortfolioImageIndex = (currentPortfolioImageIndex + 1) % portfolioImages.length;

    var portfolioModalImage = document.getElementById("portfolioModalImage");
    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Portfolio
function showPreviousPortfolioImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentPortfolioImageIndex = (currentPortfolioImageIndex - 1 + portfolioImages.length) % portfolioImages.length;

    var portfolioModalImage = document.getElementById("portfolioModalImage");
    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];

    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";

    var nextPortfolioButton = document.getElementById("nextPortfolioButton");
    nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Portfolio
function closePortfolioModal() {
    var portfolioModal = document.getElementById("portfolioModal");
    portfolioModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}

let currentDashImageIndex = 0;
const DashImages = ["images/D1.png", "images/D2.png", "images/D3.png", "images/D4.png", "images/D5.png", "images/D6.png" /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la fenêtre modale Portfolio
function openDashModal() {
    var DashModal = document.getElementById("DashModal");
    var DashModalImage = document.getElementById("DashModalImage");
    var prevDashButton = document.getElementById("prevDashButton");
    var nextDashButton = document.getElementById("nextDashButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDashImageIndex = 0;

    DashModalImage.src = DashImages[currentDashImageIndex];
    DashModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";

    prevDashButton.onclick = function() {
        showPreviousDashImage();
    };

    nextDashButton.onclick = function() {
        showNextDashImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    DashModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === DashModal) {
            closeDashModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Portfolio
function showNextDashImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentDashImageIndex = (currentDashImageIndex + 1) % DashImages.length;

    var DashModalImage = document.getElementById("DashModalImage");
    DashModalImage.src = DashImages[currentDashImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevDashButton = document.getElementById("prevDashButton");
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Portfolio
function showPreviousDashImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentDashImageIndex = (currentDashImageIndex - 1 + DashImages.length) % DashImages.length;

    var DashModalImage = document.getElementById("DashModalImage");
    DashModalImage.src = DashImages[currentDashImageIndex];

    var prevDashButton = document.getElementById("prevDashButton");
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";

    var nextDashButton = document.getElementById("nextDashButton");
    nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";
}



// Fonction pour fermer la fenêtre modale Portfolio
function closeDashModal() {
    var DashModal = document.getElementById("DashModal");
    DashModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}




document.onkeydown = function(event) {
    event = event || window.event;
    if (event.key === "Escape") {
      closeModal();
      closeFunctionModal();
      closeDashboardModal();
      closePortfolioModal();
      closeDashModal();
    }
};

let currentLanguage = 'fr'; // Langue par défaut

document.addEventListener("DOMContentLoaded", function () {
    updateLanguageUI();
    updatePageContent();

    document.getElementById("toggleLanguageButton").addEventListener("click", toggleLanguage);
});

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';
    updateLanguageUI();
    updatePageContent();
}

function updateLanguageUI() {
    let toggleButton = document.getElementById("toggleLanguageButton");

    /*** 🟢 OPTION 1: Utiliser les Emojis Unicode 🇫🇷 🇬🇧 ***/
    // toggleButton.innerHTML = currentLanguage === 'fr' ? '🇫🇷' : '🇬🇧';

    /*** 🟡 OPTION 2: Utiliser les icônes Font Awesome ***/
    // toggleButton.innerHTML = currentLanguage === 'fr' 
    //     ? '<i class="fa-solid fa-flag"></i> 🇫🇷' 
    //     : '<i class="fa-solid fa-flag"></i> 🇬🇧';

    /*** 🔵 OPTION 3: Utiliser les images SVG depuis un CDN ***/
    toggleButton.innerHTML = currentLanguage === 'fr' 
        ? '<img src="https://flagcdn.com/w40/gb.png" alt="Français">'  
        : '<img src="https://flagcdn.com/w40/fr.png" alt="English">';
}

function updatePageContent() {
    let elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        let translation = element.getAttribute(`data-${currentLanguage}`);
        if (translation) {
            if (element.placeholder) {
                element.placeholder = translation; // Met à jour les placeholders
            } else if (element.tagName === "INPUT" && element.type === "submit") {
                element.value = translation; // Met à jour les boutons "Envoyer Message"
            } else {
                element.textContent = translation; // Met à jour les textes normaux
            }
        }
    });
}





