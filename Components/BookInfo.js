function BookInfo(book){
  let html
    if (book.coverImage == ""){
      html = `<ul id="bookDetail" class="float-right box-border h-[12rem] w-64  border-3 rounded-md border-blue-400 bg-gradient-to-b from-emerald-300 to-rose-300 h-screen list-inside">
          <li class="text-xl font-semibold m-2">${book.title}</li>
          <li class="m-2">Författare: ${book.author}</li>
          <li class="m-2">Sidor: ${book.pages}</li>
          <li class="m-2">Utgivningsår: ${book.releaseDate}</li>
      </ul>`;
    }
    else {
      
     html = `<ul id="bookDetail" class="float-right box-border h-[29rem] w-64 border-3 rounded-md border-blue-400 bg-gradient-to-b from-emerald-300 to-rose-300 h-screen list-inside">
          <li class="text-xl font-semibold m-2">${book.title}</li>
          <li class="m-2">Författare: ${book.author}</li>
          <li class="m-2">Sidor: ${book.pages}</li>
          <li class="m-2">Utgivningsår: ${book.releaseDate}</li>
          <img class="mx-auto max-w-[70%] mt-4" src="${book.coverImage}" alt="Cover of the book">
      </ul>`;
    
  
    }
    return html;}