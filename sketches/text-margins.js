window.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content');
  const paragraphs = content.getElementsByTagName('p');

  Array.from(paragraphs).forEach(p => {
    const mt = Math.floor(Math.random() * 50);
    const mr = Math.floor(Math.random() * 300);
    const mb = Math.floor(Math.random() * 50);
    const ml = Math.floor(Math.random() * 300);

    p.style.margin = `${mt}px ${mr}px ${mb}px ${ml}px`;
  });
});