const content = document.getElementById('content');
const paragraphs = content.getElementsByTagName('p');

window.addEventListener('scroll', function() {
  console.log(window.scrollMaxY)

  for (let i = 0; i < paragraphs.length; i++) {
    const letters = paragraphs[i].innerText.split('');
    let coloredText = '';

    for (let j = 0; j < letters.length; j++) {
      if (Math.random() < window.scrollY/window.scrollMaxY) { // Change only some letters (adjust probability as needed)
        const randomColor = '#ffff' //getRandomColor();
        coloredText += `<span class="color-change" style="color:${randomColor}">${letters[j]}</span>`;
      } else {
        coloredText += letters[j];
      }
    }

    paragraphs[i].innerHTML = coloredText;
  }
});


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
