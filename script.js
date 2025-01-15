function changeColor(image) {
    const shoeImage = document.getElementById('shoe-image');
    shoeImage.style.opacity = '0';
    shoeImage.style.transform = 'scale(0.9)';
  
    setTimeout(() => {
      shoeImage.src = image;
      shoeImage.style.opacity = '1';
      shoeImage.style.transform = 'scale(1)';
    }, 500);
  }
  
  document.addEventListener('mousemove', (e) => {
    const button = document.getElementById('add-to-cart');
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    button.style.background = `radial-gradient(circle at ${x}px ${y}px, #ff6a00, #e65a00)`;
  });
  function changeColor(image) {
    const shoeImage = document.getElementById('shoe-image');
    shoeImage.style.opacity = '0';
    shoeImage.style.transform = 'scale(0.9)';
  
    setTimeout(() => {
      shoeImage.src = image;
      shoeImage.style.opacity = '1';
      shoeImage.style.transform = 'scale(1)';
    }, 500); // Adjust delay for transition effect if needed
  }
  