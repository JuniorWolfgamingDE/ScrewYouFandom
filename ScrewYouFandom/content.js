// Redirect from youtube.com to bettertube.com with the same path and arguments.
const currentUrl = new URL(window.location.href);
const newUrl = `https://minecraft.wiki${currentUrl.pathname}${currentUrl.search}`;
if (window.location.href !== newUrl) {
  // Create a banner element.
  const banner = document.createElement("div");
  banner.innerHTML = `
    <div id="redirect-banner" style="background-color: #f44336; color: white; text-align: center; padding: 10px;">
      You will be redirected to the new Minecraft Wiki in a few moments.
    </div>
  `;

  // Add CSS styles for the banner.
  const style = document.createElement("style");
  style.textContent = `
    #redirect-banner {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
    }
  `;

  // Inject the banner and styles into the page.
  document.body.appendChild(banner);
  document.head.appendChild(style);
  window.location.replace(newUrl);
}

