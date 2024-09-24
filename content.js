try {
    console.log("%cThe HopHub extension has been loaded successfully.", "color:#ffa31a");

    function replaceLogo() {
        const logo = document.querySelector(".octicon-mark-github");
        if (logo) {
            logo.remove();
        }

        const existingLogo = document.querySelector(".new-github-logo");
        if (!existingLogo) {
            const logohref = document.querySelector('[aria-label="Homepage "]');
            const newlogo = document.createElement("img");
            newlogo.src = chrome.runtime.getURL("images/icon32.png");
            newlogo.alt = "New Github Logo";
            newlogo.classList.add("new-github-logo");
            logohref.appendChild(newlogo);
        }
    }

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "childList") {
                replaceLogo();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    window.onload = function () {
        replaceLogo();
    };

    const favicon1 = document.querySelector('link[rel="alternate icon"]');
    favicon1.href = chrome.runtime.getURL("images/favicon.png");

    const favicon2 = document.querySelector('link[rel="icon"]');
    favicon2.href = chrome.runtime.getURL("images/favicon.png");

    const style = document.createElement('style');
    style.innerHTML = `
.btn-large {
    background-color: rgb(255, 163, 26) !important;
    color: rgb(0, 0, 0) !important;
}

.color-bg-default, .color-bg-subtle, .MarketplaceBackground-buffer {
    background-color: rgb(0, 0, 0) !important;
}

.color-border-muted {
    border: none !important;
}

.border-bottom {
    border: none !important;
}

.reponame-suggestion, .color-fg-success {
    color: rgb(255, 163, 26) !important;
}

.Label--secondary {
    color: rgb(255, 163, 26) !important;
    border-color: rgb(255, 163, 26) !important;
}
    `;
    document.head.appendChild(style);
} catch (e) {
    console.log(`%cThere was an error while loading HopHub Addon:\n${e.message}`, "color:red");
}