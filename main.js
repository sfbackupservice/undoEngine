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
    window.open('https://www.creem.io/payment/prod_3dE15YwKUgO7mI81JlCOdF', '_blank');
}

function makeOrder() {
    window.open('https://undoengine.my.site.com/s/order', '_blank');
}

function loadFooter() {
    fetch('/footer.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        });
}

document.addEventListener('DOMContentLoaded', loadFooter);