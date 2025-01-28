Bookshelf Application

This project is a simple Bookshelf application built with React.js and Next.js. It uses the New York Times Books API to fetch and display a list of bestselling books. Users can view book details and save their favorite books to a virtual "bookshelf."

Features

Browse New York Times bestselling books.

View detailed information about each book.

Save favorite books to your personal bookshelf.

Prerequisites

Before running this project, make sure you have the following installed:

Node.js and npm: You can download them from Node.js Official Website.

A New York Times Books API key: Sign up at New York Times Developer Network to get access to the API.

Getting Started

Clone the repository:

git clone https://github.com/yourusername/bookshelf-app.git
cd bookshelf-app

Install dependencies:

npm install

Create a .env.local file in the root directory and add your New York Times Books API key:

NYT_API_KEY=your_api_key_here

Run the development server:

npm run dev

The application should open in your browser at http://localhost:3000.

Browse the list of bestsellers and click on any book to view more details. You can save favorite books to your virtual bookshelf.

Technologies Used

React.js: A JavaScript library for building user interfaces.

Next.js: A React framework for server-side rendering and static site generation.

Axios: For making HTTP requests to the New York Times Books API.

New York Times Books API: Provides data on current bestsellers and book reviews.
