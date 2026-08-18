// Wait for the window to load to ensure the chat widget is available
window.addEventListener("load", function () {
  // Select the Gorgias chat widget container using its class or ID (adjust as needed)
  var gorgiasChatWidget = document.querySelector(".gorgias-chat-widget");

  if (gorgiasChatWidget) {
    // Apply custom CSS styles to position the widget at the left bottom
    gorgiasChatWidget.style.position = "fixed"; // Use fixed positioning
    gorgiasChatWidget.style.bottom = "20px"; // Set distance from the bottom of the screen
    gorgiasChatWidget.style.left = "20px"; // Set distance from the left of the screen
    gorgiasChatWidget.style.zIndex = "9999"; // Ensure the chat widget is on top of other content
  }
  var gorgiasChatIframe = document.querySelector("#chat-button");

  if (gorgiasChatIframe) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var cssLink = document.createElement("link");
    cssLink.href = gorgiasCustomStylesUrl; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css"; 
    if(width < 450){
      gorgiasChatIframe.contentDocument.head.appendChild(cssLink);
      setTimeout(function(){
      gorgiasChatIframe.style.setProperty("visibility", "visible", "important");
        
      }, 100)
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  //Get UTM Parameters
  const checkUTMParams = JSON.parse(localStorage.getItem("utm_params"));
  if (!checkUTMParams) {
    const url_string = window.location.href;
    let url = new URL(url_string);
    const utm_campaign = url.searchParams.get("utm_campaign");
    const utm_content = url.searchParams.get("utm_content");
    const utm_medium = url.searchParams.get("utm_medium");
    const utm_source = url.searchParams.get("utm_source");
    const utm_term = url.searchParams.get("utm_term");

    const data = {
      utm_campaign: `${utm_campaign}`,
      utm_content: `${utm_content}`,
      utm_medium: `${utm_medium}`,
      utm_source: `${utm_source}`,
      utm_term: `${utm_term}`,
    };
    localStorage.setItem("utm_params", JSON.stringify(data));
  }
});

function openChatWidget() {
  GorgiasChat.open();
  const btn = document.querySelector(".gorgias-chat-key-eam2gc");
  btn.style.display = "block";
}

function getCollabButton() {
  const dovetaleContainer = document.querySelector("#dovetale-container");
  dovetaleContainer.style.display = "block";
  const btniframe = document.querySelector("#dovetale-container iframe");
  const btndovelate =
    btniframe.contentWindow.document.querySelector(".dovetale-button");
  btndovelate.click();
}
