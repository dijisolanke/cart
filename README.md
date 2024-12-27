# This is a simple proof of concept for an online store cart

![Screenshot 2024-11-22 at 11 34 58](https://github.com/user-attachments/assets/05332262-f3fa-4cdb-843f-a781a5120d37)


![Screenshot 2024-11-22 at 11 35 24](https://github.com/user-attachments/assets/7631f1fa-4199-4fc2-b323-07864d7ac981)


## Process

- First I built the UI with React
- Then I added functionality beginning with putting the cart information into an array when add to cart button was clicked.
- Confirmed it was working with console log.
- Then I used LocalStorage so the list would persist on page refresh.
  
* I broke the logic into small parts 
  * get an array of the items
  * store them in memory
  * Increment number in cart icon when item is added to cart
  * Get the items to be displayed in a checkout component
  * Make sure rather than duplicating the items, they show up as multiples of the same
  * For each item, tracked the total price per multiples using a unique ID
  * I used the same ID to add a check
    * if certain items had multiple of three and added a discount to the total
  

## Available Scripts

In the project directory, you can run:

### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`


