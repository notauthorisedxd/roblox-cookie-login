chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'login') {
        chrome.storage.local.get('robloxCookie', function(data) {
            const robloxCookie = data.robloxCookie;
            if (robloxCookie) {
                chrome.cookies.set({
                    url: 'https://www.roblox.com',
                    name: '.ROBLOSECURITY',
                    value: robloxCookie,
                    domain: '.roblox.com',
                    path: '/',
                    secure: true,
                    httpOnly: true
                }, function(cookie) {
                });
            } else {
                chrome.scripting.executeScript({
                    target: { tabId: sender.tab.id },
                    func: () => alert('No cookie saved.')
                });
            }
        });
    }
});