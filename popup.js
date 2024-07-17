// popup.js
document.getElementById('toggleBlur').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: toggleBlur
      });
    });
  });
  
  function toggleBlur() {
    const chatElements = document.querySelectorAll('.message-in, .message-out');
    chatElements.forEach(element => {
      element.classList.toggle('blurred');
    });
  }
  