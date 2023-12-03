const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container')

/*
 *  1. Takes the user submission for year, month, and date.  You can assume that the input is valid.
 *  2. Calls the New York Times API to find the best selling hardcover fiction books for that date
 *  3. Display the following items for the first 5 books:
 *    Title
 *    Author
 *    Description
 */
formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  const bestSelling = `/lists/${year}-${month}-${date}/hardcover-fiction.json`
  const url = `https://api.nytimes.com/svc/books/v3/${bestSelling}?api-key=${API_KEY}`
  // Fetch bestselling books for date and add top 5 to page
 getBestSellers(url);
  
});


async function getBestSellers(url) {
  const response = await fetch(url);
  const result = await response.json();
  let bookNo = 0

  const ulElement = document.createElement('ul')

  for (const book of result.results.books) {
    bookNo++;
    if(bookNo > 4) break

    const listItem = document.createElement("li");
    let image = document.createElement("img")
    image.src = book.book_image
    image.width = 128
    const divimage = document.createElement("div")
    divimage.appendChild(image)

    let title = document.createElement("strong")
    title.textContent = book.title

    let author = document.createElement("p")
    let authorName = document.createElement("i")
    authorName.textContent = book.author
    author.appendChild(authorName)

    const description = document.createElement("p")
    description.textContent = book.description

    let divInfo = document.createElement("div")
    divInfo.appendChild(title)
    divInfo.appendChild(author)
    divInfo.appendChild(description)

    listItem.appendChild(divimage)
    listItem.appendChild(divInfo)

    
    ulElement.appendChild(listItem)
  }
  booksContainer.appendChild(ulElement)
}