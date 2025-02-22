chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (
      changeInfo.status === "complete" &&
      tab.url.includes("twitch.tv") &&
      tab.url.includes("/clip/")
    ) {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ["inject.js"],
      });
    }
  });
  