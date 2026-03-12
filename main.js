function copyProdURL() {
    const text = document.getElementById("prod-url").textContent;
    navigator.clipboard.writeText(text)
        .then(() => alert("Production URL copied!"));
}

function copySandboxURL() {
    const text = document.getElementById("sandbox-url").textContent;
    navigator.clipboard.writeText(text)
        .then(() => alert("Sandbox URL copied!"));
}

function copyEmail() {
    const text = document.getElementById("email-text").textContent;
    navigator.clipboard.writeText(text)
        .then(() => alert("Email copied!"));
}

function goToStore() {
    window.open('https://www.creem.io/stores/createwithpassion', '_blank');
}