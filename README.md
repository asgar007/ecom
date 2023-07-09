# E-commerce React App

This is a React-based e-commerce application that allows users to browse products, add them to the cart, and perform various actions such as editing and deleting products. The app integrates with a dummy e-commerce API service and utilizes Redux for state management.

## Instructions

To set up the app locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Use the provided dummy e-commerce API service ([my-json-server](https://my-json-server.typicode.com/)) to create a good amount of data.
4. Update the API endpoints in the app's configuration file to match the endpoints provided by the API service.

## Functionality

The app offers the following features:

### Navbar

- Displays the count of items in the cart.
- Shows relevant navigation links.

### All Products Page

- Lists all the products fetched from the API service.
- Allows users to edit each product by clicking the "pencil" button.
- Implements inline editing for each product.
- Shows an alert/notification upon finishing editing a product.
- Enables product deletion with a delete button, accompanied by an alert/notification.
- Implements sorting functionality with a sort button to sort products by price.
- Displays a cross button next to the sorted view, allowing users to remove the sorting.

### Create Page

- Presents a form for adding a product to the database.
- Shows an alert/notification after successfully adding the product.

### Product Detail Page

- Displays all the details of a selected product.
- Provides a button to add the product to the cart.

### Cart Page

- Lists all the items in the cart.
- Allows users to remove items from the cart.

### Error Handling

- Handles errors that occur during API requests.
- Displays appropriate alerts/notifications to inform users of any errors.

### Redux Integration

- Utilizes Redux for managing the application state.
- Sets up the Redux store with the necessary reducers, actions, and middleware.

### Bonus Feature: Persistent Cart Items

- Implements persistence for the cart items using local storage.
- Ensures that the cart items remain intact even after a page refresh.

## Styling

The app is designed to resemble a modern e-commerce website. It utilizes SCSS styles and can be further customized to fit your desired aesthetic. You may also consider using popular UI libraries such as Bootstrap or Material-UI to enhance the app's visual appeal.

## Usage

1. Run the app locally using `npm start`.
2. Access the app in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request.
---

Thank you for using our e-commerce React app! We hope you find it useful and enjoy the development process. Should you have any questions or need assistance, please don't hesitate to reach out.

Happy coding!
