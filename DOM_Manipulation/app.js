document.getElementById('container')

document.querySelector('#container')

document.querySelectorAll('.second')

document.querySelector('ol > .third')

document.querySelector('#container').innerHTML = "Hello!"

document.querySelector('.footer').classList.add("main")

document.querySelector('.footer').classList.remove("main")

let li = document.createElement('li')

li.innerHTML = "four"

document.querySelector('ul').append(li)

lis = document.querySelectorAll('ol > li')
for(let li of lis) {
  li.style.background = 'green'
}

document.querySelector('.footer').remove()
