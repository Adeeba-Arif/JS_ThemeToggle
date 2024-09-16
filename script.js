var img = document.getElementById('first')
var button = document.getElementById('Mode');
     button.addEventListener('click', function() {
  if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white';
      button.style.backgroundColor = 'black';
      button.style.color = 'black';
     //  button.textContent = 'light mode';
      img.src = './icons/lightmode.png'
 } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.backgroundColor = 'black'
      button.style.backgroundColor = 'white';
      button.style.color = 'white';
     //  button.textContent = 'dark mode';
      img.src = './icons/darkmode.png'
 }
});
