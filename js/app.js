function contactViaEmail() {
    document.getElementById("contact-form").style.display = 'none';
    document.getElementById("contact-email").style.display = 'block';
    document.getElementById("label-email").style.backgroundColor = 'rgba(42,42,43,255)';
    document.getElementById("label-email").style.color = 'rgba(224,208,167,255)';
    document.getElementById("label-form").style.color = null;
    document.getElementById("label-form").style.backgroundColor = null;
}

function contactViaForm() {
    document.getElementById("contact-form").style.display = 'block';
    document.getElementById("contact-email").style.display = 'none';
    document.getElementById("label-form").style.backgroundColor = 'rgba(42,42,43,255)';
    document.getElementById("label-form").style.color = 'rgba(224,208,167,255)';
    document.getElementById("label-email").style.color = null;
    document.getElementById("label-email").style.backgroundColor = null;
}

function copySpanToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copy-me"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied the Email Address to clipboard");
}

// Code for mobile-navigation-bar Toggle

let currentState;

function mobNavToggle() {
    if (currentState == "open") {
        document.getElementById("hidden-mob-nav").style.display = "none";
        currentState = "closed";
    } else {
        document.getElementById("hidden-mob-nav").style.display = "block";
        currentState = "open";
    }
}

// Covid Reference Alert Function for Blog 3, which pops up only once per opening of browser

const mySessionStorage = window.sessionStorage;

function covidRefAlert() {
    alert("Please note that this Blog was written during the Pandemic lockdown days, and may not be valid to same extent in future as it is now / was then.");
}

// Scroll Animation on Blogs page

const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0.25,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
        }
    })
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

/*
const blogDivs = document.querySelectorAll("div");

const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "-150px"
};

const scrollObserver = new IntersectionObserver(function(entries, scrollObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
    })
}, options);


blogDivs.forEach( div => {
    scrollObserver.observe(div);
})
*/
