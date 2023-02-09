let storedList = {};

if (localStorage.getItem('todos') !== null) {
  storedList = JSON.parse(localStorage.getItem('todos'));
  for (let todo in storedList) {
    addToList(todo, storedList[todo]);
  }
} 

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  addToList(document.querySelector('#newtodo').value, "incomplete");
})

function addToList(todo, status) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.setAttribute('class', status);
  p.innerHTML = todo;

  const btnComplete = document.createElement('button');
  btnComplete.innerHTML = 'complete';
  btnComplete.addEventListener('click', function() {
    p.setAttribute("class", "complete");
    storedList[todo] = "complete";
    localStorage.setItem('todos', JSON.stringify(storedList));
    btnComplete.remove();
  });

  const btnDelete = document.createElement('button');
  btnDelete.innerHTML = 'delete';
  btnDelete.addEventListener('click', function() {
    li.remove();
    delete storedList[todo];
    console.log(Object.keys(storedList).length);
    if (Object.keys(storedList).length === 0)
      localStorage.clear('todos');
    else
      localStorage.setItem('todos', JSON.stringify(storedList));
  })

  if (status === "incomplete")
    li.append(p, btnComplete, " ", btnDelete)
  else 
    li.append(p, btnDelete)

  const list = document.querySelector('ul');
  list.append(li);
  
  if (!storedList.hasOwnProperty(todo)) {
    storedList[todo] = "incomplete";
    localStorage.setItem('todos', JSON.stringify(storedList));
  }
  document.querySelector('#newtodo').value = '';
}
