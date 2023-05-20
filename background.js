// Background script for the follow and scrape extension

// Add an event listener to handle the browser action click event
chrome.browserAction.onClicked.addListener(function(tab) {
    // Execute content script to automate following and scraping
    chrome.tabs.executeScript(tab.id, { file: "content_script.js" });
  });
  
