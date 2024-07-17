function toggleBlur() {
    const chatElements = document.querySelectorAll('.message-in, .message-out');
    chatElements.forEach(element => {
      element.classList.toggle('blurred');
    });
  }
  
  // Add a button to toggle blur
  const toggleButton = document.createElement('button');
  toggleButton.innerText = 'Toggle Blur';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '10px';
  toggleButton.style.right = '10px';
  toggleButton.style.zIndex = '1000';
  toggleButton.onclick = toggleBlur;
  document.body.appendChild(toggleButton);
  