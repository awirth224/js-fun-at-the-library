function createLibrary(name){
var library = {
  name: name,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: []
  }
}
return library
}

function addBook(library, book) {
  if(book.genre === 'fantasy') {
  library.shelves.fantasy.push(book)
  }
  else if (book.genre === 'fiction') {
  library.shelves.fiction.push(book)
  }
  else if (book.genre === 'nonFiction') {
  library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, bookTitle, genre) {
  var  shelf = library.shelves[genre]
  var checkedOut = false
  
  for(var i = 0; i < shelf.length; i++) {
    if(bookTitle === shelf[i].title) {
      shelf.splice(i,1) 
      checkedOut = true
    }
  }
  
  if (checkedOut == true) {
    return `You have now checked out ${bookTitle} from the ${library.name}`
  }
  if (checkedOut === false) {
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
    }
  }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};