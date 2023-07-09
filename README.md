# Random-Quote-Generator
This project demonstrates a random quote generator. It fetches data from an API and displays a random quote when a button is clicked.

## Explanation of the code 
- An event listener is attached to the button to trigger an action when clicked.
- Inside the event listener , a random number is generated between 0 and 1000.
- `randomQuote()` function is called and the generated random number is passed as an argument.
- The `randomQuote()` fetches data from the API and retrieves the response.
- The first `.then()` is chained to the `fetch` function to handle the response.It takes a callback function that receives the `response` object as a parameter.
-  Inside the callback function, the `response.json()` method is called to parse the response body as JSON and return it as a new promise.
-  A second `.then()` is chained to the previous one to handle the parsed JSON data. It takes a callback function that receives the parsed response data as a parameter.
-  Inside the second callback function, the quotes variable is assigned the parsed JSON data, which represents an array of quotes obtained from the API.
-  Finally, the `document.querySelector('h2').innerHTML` is used to update the inner HTML of the `<h2>` element on the page with the quote text at the specified index from the quotes array.
