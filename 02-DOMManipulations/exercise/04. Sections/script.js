function create(words) {

   words.forEach(word => {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';
      
      div.addEventListener('click', () => {
         paragraph.style.display = 'inline-block';
      });

      div.appendChild(paragraph);
      document.getElementById('content').appendChild(div);
   });
}
