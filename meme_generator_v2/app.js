
// if (localStorage.getItem('memes')) {
//   savedMemes = JSON.parse(localStorage.getItem('memes'));
//   for (let meme of savedMemes) {
//     const libraryEntry = document.createElement('div');
//     libraryEntry.classList.add('savedmeme');
//     libraryEntry.innerHTML = meme;
//     document.querySelector(".library").append(libraryEntry);
//   }

// }
let savedMemes = [];
const imageInput = document.querySelector('#inputFile');
const topText = document.querySelector('#inputTopText');
const bottomText = document.querySelector('#inputBottomText');
const canvas = document.querySelector('canvas');


// change canvas on image upload
// imageInput.addEventListener('change', function() {
//   const imgURL = URL.createObjectURL(imageInput.files[0]);
//   image = document.createElement('img');
//   image.setAttribute('src', imgURL);
//   image.addEventListener('load', function() {
//     updateMeme(canvas, image, topText.value, bottomText.value);
//   }, {once : true})
//   console.log(imgURL)
// ;})

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

  // update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // prpare text
  ctx.strokeStyle = 'black';
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.lineJoin = 'round';
  ctx.font = `${fontSize}px sans-serif`

  // add top text
  ctx.textBaseline = 'top';
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width/2, yOffset);

  // add bottom text
  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width/2, height - yOffset);
}



// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   let imageRef = form.elements[0];
//   let topText = form.elements[1];
//   let bottomText = form.elements[2];
//   if (!imageRef || topText.value === "" && bottomText.value === "") 
//     alert("At least one text field and an image are required.");
//   else{
//     createMeme(topText.value, bottomText.value, imageRef.files[0]);
//     topText.value = bottomText.value = imageRef.value = "";
//   }
// })

// function createMeme(topText, bottomText, imageRef) {
//   // const file = imageRef.files;
//   const newMeme = document.createElement('div');
//   newMeme.classList.add("savedmeme");

//   const ttDiv = document.createElement('div');
//   ttDiv.classList.add("ttDiv");
//   const ttP = document.createElement('p');
//   ttP.innerHTML = topText;
//   ttP.classList.add("toptext");
//   ttDiv.append(ttP);

//   const btDiv = document.createElement('div');
//   btDiv.classList.add("btDiv");
//   btP = document.createElement("p");
//   btP.innerHTML = bottomText; 
//   btDiv.append(btP);

//   const imgDiv = document.createElement('div');
//   imgDiv.classList.add("imgDiv");
//   const pic = document.createElement('img');
//   let imgsrc = "";
//   if (FileReader && imageRef) {
//     let reader = new FileReader();
//     reader.readAsDataURL(imageRef);
//     reader.onload = function () {
//       pic.setAttribute('src', reader.result);
//       imgsrc = reader.result;
//       console.log(imgsrc);
//       pic.setAttribute('alt', 'Meme Picture');
//       imgDiv.append(pic);
//       newMeme.append(ttDiv, imgDiv, btDiv);
//       document.querySelector(".library").append(newMeme);
//       if (!savedMemes.includes()) {
//         savedMemes.push(newMeme.innerHTML);
//         localStorage.setItem('memes', JSON.stringify(savedMemes));
//       }
//     }
//   }

//   if (!savedMemes.includes(newMeme)) {
//     savedMemes.push(newMeme)
//     localStorage.setItem('memes', JSON.stringify(savedMemes));
//   }
// }