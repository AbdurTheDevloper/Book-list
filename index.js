let title = document.getElementById('title');
let author = document.getElementById('author');
let year = document.getElementById('year');
let btn = document.getElementById('btnId');
let bookList = document.getElementById('book-list');


btn.addEventListener('click', function(e){
  e.preventDefault();
   if(title.value=='' || author.value == '' || year.value == ''){
         alert('valid input is missing')
   }else{
     
    var newRow = document.createElement('tr');

    var newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    var newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    var newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);
    
    bookList.appendChild(newRow)
   }
    


})