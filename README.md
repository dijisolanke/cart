# This is a short assesment task

![Screenshot 2024-11-22 at 11 34 58](https://github.com/user-attachments/assets/05332262-f3fa-4cdb-843f-a781a5120d37)


![Screenshot 2024-11-22 at 11 35 24](https://github.com/user-attachments/assets/7631f1fa-4199-4fc2-b323-07864d7ac981)


## Process

- First I built the UI
- Then I added functionality beginning with putting the cart information into an array when add to cart button was clicked.
- Confirmed it was working with console log.
- Then I used LocalStorage so the list would persist on page refresh.
  
* I broke the logic into small parts 
  * get an array of the items
  * store them in memory
  * Increment number in cart icon when item is added to cart
  * Get the items to be displayed in a checkout component
  * Make sure rather than duplicating the items, they show up as multiples of the same
  * Make sure they had unique ID'a which I used to both address the issue of duplicated components and specify which items to apply special discounts to
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
