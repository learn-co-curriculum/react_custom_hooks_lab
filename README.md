# React Custom Hooks Lab – Form Storage

## Description
This project demonstrates how to create and use a custom React hook to store form data in the browser's Local Storage.

The form saves the user's name and service number, allowing the information to remain available even after refreshing the page.

## Features
- Custom `useLocalStorage` hook.
- Saves form information automatically.
- Retrieves previously saved information.
- Maintains form data after refreshing the browser.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Vite
- Local Storage API

## Screenshot

![Form Storage Screenshot](./screenshots/local storage.png)

## Installation and Setup

1. Clone the repository.
2. Navigate into the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Custom Hook

The `useLocalStorage` hook manages form data by retrieving saved values from Local Storage and updating them whenever the state changes.

## How It Works

The custom useLocalStorage hook uses React's useState
to manage form values and useEffect to save changes
to the browser's Local Storage.

When the page loads, previously saved values are
retrieved and displayed in the form. This allows
the user's information to remain available after
refreshing the browser.

## Author
Terecinta Mocheche Manyi