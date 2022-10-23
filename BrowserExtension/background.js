let verstoß = 0;
browser.tabs.onUpdated.addListener(function () { verstoß = 0 })
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.verstoßAnzahl){
        verstoß = verstoß + request.verstoßAnzahl;
      browser.browserAction.setBadgeText({ text: verstoß.toString(), tabId: sender.tab.id});
    }
  })


