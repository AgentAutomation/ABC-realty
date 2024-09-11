(function() {
    var chatbotContainer = document.getElementById("custom-chatbot-container");

    // Create an iframe to load your chatbot
    var iframe = document.createElement("iframe");
    iframe.src = "https://agentautomation.github.io/ABC-realty/index.html"; // Your hosted HTML file
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    chatbotContainer.appendChild(iframe);

    // Load updated CSS
    var customCSS = document.createElement("link");
    customCSS.rel = "stylesheet";
    customCSS.href = "https://agentautomation.github.io/ABC-realty/index-0237cf3c.css"; // Updated CSS file
    document.head.appendChild(customCSS);

    // Load updated JavaScript
    var customScript = document.createElement("script");
    customScript.src = "https://agentautomation.github.io/ABC-realty/index-b030c919.js"; // Updated JS file
    document.body.appendChild(customScript);
})();
