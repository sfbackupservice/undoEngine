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


// known issues

const LATEST_VERSION = "v1.71";
const RELEASE_DATE = "Latest version · 21.9.2026";

const ISSUES = [
    {
        title: "User Level Settings component may update the wrong user's settings",
        description: "The component does not always apply changes to the settings of the correct user.",
        workaround: "Please do not rely on the User Level Settings component. Edit directly via the Lightning Page."
    },
    {
        title: "Log Manager actions are available before running a search",
        description: "When the number of logs is unknown, actions can be used before the Search button is pressed.",
        workaround: "Please use the search function before using actions to ensure a more predictable process."
    },
    {
        title: "Apex error details do not always show the full error path",
        description: "For some Apex classes, the generated error details are missing part of the path to the error.",
    }
];

function renderKnownIssues() {
    const versionEl = document.getElementById("ki-version");
    if (!versionEl) return;

    versionEl.textContent = LATEST_VERSION;
    document.getElementById("ki-released").textContent = RELEASE_DATE;

    const list = document.getElementById("ki-list");

    if (!ISSUES.length) {
        list.innerHTML = '<li class="ki-empty">No known issues.</li>';
        return;
    }

    ISSUES.forEach(function (issue) {
        const li = document.createElement("li");
        li.className = "ki-issue";
        li.innerHTML = '<details><summary></summary><div class="ki-body"><p></p></div></details>';
        li.querySelector("summary").textContent = issue.title;
        li.querySelector("p").textContent = issue.description || "";

        if (issue.workaround && issue.workaround.trim()) {
            const workaround = document.createElement("div");
            workaround.className = "ki-workaround";
            workaround.innerHTML = "<strong>Workaround:</strong> " + issue.workaround;
            li.querySelector(".ki-body").appendChild(workaround);
        }

        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', renderKnownIssues);