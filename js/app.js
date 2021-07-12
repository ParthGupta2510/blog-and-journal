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