function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns, reviews) {
  return {
    name: name, 
    age: age,
    pronouns: pronouns,
    reviews: [reviews]
  }
}

function saveReview(reviews) {
  reviews = reviews.push(reviews)
  return reviews
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}