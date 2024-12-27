# This is a short assesment task

![Screenshot 2024-11-22 at 11 34 58](https://github.com/user-attachments/assets/05332262-f3fa-4cdb-843f-a781a5120d37)


![Screenshot 2024-11-22 at 11 35 24](https://github.com/user-attachments/assets/7631f1fa-4199-4fc2-b323-07864d7ac981)





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


## Process

I Started off with a rough idea of how I wanted to layout my components
![db91af78-e205-47dd-a643-5d8b11fd9076](https://github.com/user-attachments/assets/bb49970a-5de3-41d0-8dbc-110857d09cc2)

- First I built the UI
- Then I slowly added functionality beginning with putting the cart information into an array when add to cart button was clicked to see if I could get the mock shopping item data to behave as I wanted to.
- I then chose to store the information using LocalStorage so it would persist on page refresh.
- I set up my component's in such a way that child components (the button under the items) had to pass information up to its parent component. This proved to be messy and in the end I had to quite a bit of refactoring in order to work out a clean way to do so.
- I don't think I quite found the optimal way to do it and in the end but I opted to try separate the logic(functions) from the structural code as much as I could.
* I broke the logic into small parts 
 * get an array of the items
 * store them in memory
 * Get the cart Icon to update nuber when cart item is added
 * Get the items to be displayed in a checkout component
 * Make sure rather than duplicating the items, they show up as multiples of the same
 * Make sure they had unique ID'a which I used to both address the issue of duplicated components and specify which items to apply special discounts to
 
