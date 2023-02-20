let savedMemes = [];
const imageInput = document.querySelector('#inputFile');
const topText = document.querySelector('#inputTopText');
const bottomText = document.querySelector('#inputBottomText');
const canvas = document.querySelector('canvas');

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (imageInput.value == "" || topText.value === "" && bottomText.value === "") {
    alert("A picture and a bottom or top text required.");
  } 
  else {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'savedMeme');
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'meme');
    const imgURL = URL.createObjectURL(imageInput.files[0]);
    const image = document.createElement('img');
    image.setAttribute('src', imgURL);
    image.addEventListener('load', function() {
      updateMeme(canvas, image, topText.value, bottomText.value);
      bottomText.value = topText.value = imageInput.value = "";
    }, {once : true});
    
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'delete';
    btnDelete.classList.add('button');
    btnDelete.addEventListener('click', function() {
      newDiv.remove();
    })

    newDiv.append(canvas, btnDelete);
    document.querySelector('.library').append(newDiv);
  }
})

function updateMeme(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10)
  const yOffset = height / 25;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  
  ctx.strokeStyle = 'black';
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.lineJoin = 'round';
  ctx.font = `${fontSize}px sans-serif`

  ctx.textBaseline = 'top';
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width/2, yOffset);

  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width/2, height - yOffset);
}
