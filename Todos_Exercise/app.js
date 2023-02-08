let listStorage = {};
if (localStorage.getItem('todos') !== null) {
  listStorage = JSON.parse(localStorage.getItem('todos'));
  for (let item in listStorage) {
    addToList(item, listStorage[item]);
  }
} 

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  addToList(document.querySelector('#newtodo').value, "incomplete");
})

function addToList(item, status) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.setAttribute('class', status)
  p.innerHTML = item;

  const btnComplete = document.createElement('button');
  btnComplete.innerHTML = 'complete';
  btnComplete.addEventListener('click', function() {
    p.setAttribute("class", "complete");
    listStorage[item] = "complete";
    localStorage.setItem('todos', JSON.stringify(listStorage));
    btnComplete.remove();
  });

  const btnDelete = document.createElement('button');
  btnDelete.innerHTML = 'delete';
  btnDelete.addEventListener('click', function() {
    li.remove();
    delete listStorage[item];
    console.log(Object.keys(listStorage).length);
    if (Object.keys(listStorage).length === 0)
      localStorage.clear('todos');
    else
      localStorage.setItem('todos', JSON.stringify(listStorage));
  })
  
  if (status === "incomplete")
    li.append(p, btnComplete, " ", btnDelete)
  else 
    li.append(p, btnDelete)
  const list = document.querySelector('ul');
  list.append(li);
  if (!listStorage.hasOwnProperty(item)) {
    listStorage[item] = "incomplete";
    localStorage.setItem('todos', JSON.stringify(listStorage));
  }
  document.querySelector('#newtodo').value = '';
}