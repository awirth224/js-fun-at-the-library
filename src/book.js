function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns, reviews) {
  return {
    name: name, 
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(reviewText, reviews) {
  if(!reviews.includes(reviewText)) {
    reviews.push(reviewText)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
  }

function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: bookTitle.length * 20,
  genre: genre
  }
}

function editBook(book) {
book.pageCount = book.pageCount * .75
return book.pageCount
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}