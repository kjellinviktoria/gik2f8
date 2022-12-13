'use strict';

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) => searchBooks(e.target.value));

/*searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({title, author}) => {
      const searchTerm = e.target.value.toLowerCase();
      return title.toLowerCase().indexOf(searchTerm) >= 0 || 
      author.toLowerCase().indexOf(searchTerm)>= 0;
    })
  )
); */

async function searchBooks(searchTerm) {
  renderBookList(
    bookList.filter(
      ({ title, author }) =>
        title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
        author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    )
  );
}

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  console.log(existingElement);

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList)); 
}

const bookListHover = document.querySelectorAll('.book-list__item');

bookListHover.forEach(checkHover);
/*bookListHover.addEventListener('mouseout', hoverRemoteElement); */
function checkHover(hover) {
  hover.addEventListener('mouseover', hoverCreateElement)
}
function hoverCreateElement(item) {
  const existingElement = document.getElementById('bookDetail');
  existingElement
  item.insertAdjacentHTML('afterend', bookHover());
}

/*function hoverRemoveElement() {
  const existingElement = document.getElementById('bookDetail');
  existingElement.remove();
}*/

const bookHover = () => { 
  /* bookList.filter(title, author, coverImage, pages, releaseDate) */
  let html = '<ul id="bookDetail" class="float-right box-border h-[17rem] w-64 border-4 rounded-md border-black bg-neutral-700 list-inside"><li class="text-2xl font-semibold m-1">Title: Oliver Twist</li><img class="float-right max-w-[70%] m-2" src="https://www.empowervate.org/wp-content/uploads/2015/11/circle.jpg" alt="book cover"><p class="2m-2">Cover:</p></ul>';
  return html;
}