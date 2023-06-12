## Objective

The main goal of this task is to develop a frontend web application that fetches and displays zip code availability data based on user input. The application should be able to:

1. Retrieve and parse JSON data from the provided backend server.
2. Implement a search function that allows users to search for a specific zip code.
3. Display availability information for the searched zip code, translating the zipcode data to user-friendly messages, including a low inventory warning.

## Steps

1. **Setup Development Environment:** Set up a local development environment. Typescript is required. Framework of your chosing, you can use a modern JavaScript framework such as React or Vue.js, or even just vanilla JavaScript. We have included React, feel free to change it should you want another.

2. **Fetch and Parse Data:** Implement a function that fetches the JSON data from the local backend server `http://localhost:4000/api/(zipcodes|messages).json` and parses it into a suitable format for the frontend.

3. **Search Function:** Implement a search function that allows users to enter a zip code. The application should display relevant availability information or a message if no matching zip code is found.

4. **Display Data and Warnings:** Based on the user's search query, display the appropriate message(s) from the messages api call. If the searched zip code is found in the zipcodes data, display the relevant availability message(s) for each location ("Available online", "Available in store"). If the quantity of a certain location falls below a certain threshold (e.g., 10), display the "Low inventory" warning. If the zip code is not found or has no availability, display the "Not Available in your region" message.

## Evaluation Criteria

Candidates will be evaluated on:

1. **Code Quality:** Is the code well-structured, clear, and maintainable?
2. **Functionality:** Does the application function as described in the steps?
3. **User Interface:** Is the interface user-friendly and intuitive? Are the messages displayed appropriately, including the low inventory warning?
4. **Error Handling:** How does the application handle potential issues such as network errors when fetching the data?

## Done

When finished create a Pull Request to the main branch.

## Additional Consideration

Try to spend between 2-4 hours, don't worry should you not finish every task.
