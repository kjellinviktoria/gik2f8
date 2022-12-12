'use strict';

const bookList = [
  {
    id: 1,
    author: 'Charles Dickens',
    title: 'Oliver Twist'
  },
  {
    id: 2,
    author: 'William Shakespear',
    title: 'Hamlet'
  }
];

/*const searchInput = document.children[0].children[1].children[1].children[1];*/
const searchField = document.getElementById('searchField');
console.log(searchField);

/* keydown, keyup */
searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
  /* Ta emot/läsa av värdet i inputfältet.
  Skicka värdet till searchBooks
  SearchBooks returnerar en filtrerad lista.
  Filtrerade listan skickas till renderlist */
  searchBooks(e.target.value);
}

function searchBooks(searchTerm) {
  /* Loopa igenom bookList
  För varje varv i loopen, ta det aktuella elementet (boken)
  Jämför titeln med söktermen
  Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList) 
  Returnerar filteredList eller anropar renderBookList */

  const filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if(title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i]);
    }
  }
  renderBookList(filteredList);
}

function renderBookList(list) {
  /* Element i HTML-listan visas/döljs beroende på listans innehåll. */
  console.log(list);
}