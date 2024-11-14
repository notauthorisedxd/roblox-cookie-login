document.getElementById('loginBtn').addEventListener('click', function() {
    const cookieValue = document.getElementById('cookieInput').value.trim();
    if (cookieValue) {
      chrome.storage.local.set({ robloxCookie: cookieValue }, function() {
        document.getElementById('message').innerText = 'Cookie saved. Reload the tab to use the account.';
        chrome.runtime.sendMessage({ action: 'login' });
      });
    } else {
      document.getElementById('message').innerText = 'Please enter a valid cookie.';
    }
  });
  