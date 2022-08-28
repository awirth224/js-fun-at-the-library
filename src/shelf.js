function shelfBook(book,sciFiShelf) {
  if(sciFiShelf.length < 3){
sciFiShelf = sciFiShelf.unshift(book)
  }
return sciFiShelf
}

function unshelfBook(books, shelf) {
  for (var i = 0; i < shelf.length; i++) 
    if(shelf[i].title.includes(books)) {
      shelf.splice([i],1)
    }
  
  return shelf

}

function listTitles(shelf) {
  var titlesList = []
  for (var i = 0; i < shelf.length; i++){
  var list = shelf[i].title
  titlesList.push(list)
  } 
  return titlesList.join(', ')
}

function searchShelf(shelf, book) {
  for(var i = 0; i < shelf.length; i++)
  var bookTitle = shelf[i].title
  //console.log('shelf', shelf)
  console.log('bookTitle', bookTitle)
  if(bookTitle.includes(book)){
    return true
  }else{
    return false
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};