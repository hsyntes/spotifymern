# SpotifyMERN Frontend Documentation

[![SpotifyMERN](https://github.com/hsyntes/spotifymern/blob/main/src/logo.svg)](https://spotifymern.vercel.app/)

Welcome to the frontend documentation of SpotifyMERN, a music streaming application inspired by Spotify. This documentation provides an overview of the frontend architecture, components, and key functionalities of the application.

### Backend API

The SpotifyMERN Backend API serves as the core of the SpotifyMERN platform, providing user authentication, data management, AWS Cloud and more. Explore the API documentation for detailed information on endpoints, usage, and integration.

Please visit here to see the backend code: [SpotifyMERN - Backend](https://github.com/hsyntes/spotifymern-api)

## Technologies Used

React: A JavaScript library for building user interfaces, providing a component-based architecture and efficient rendering.

React-Query: A data-fetching library for React applications, enabling seamless data management and caching.

Redux: A state management library, enabling centralized data storage and easy state updates.

React-Router: A routing library for React applications, enabling navigation and URL handling.

Tailwind CSS: A utility-first CSS framework, providing a set of pre-defined classes for styling components.

[![SpotifyMERN](https://spotifymern.s3.us-east-2.amazonaws.com/screenshots/spotifymern-mobile-dark.png)](https://spotifymern.vercel.app)

[![SpotifyMERN](https://spotifymern.s3.us-east-2.amazonaws.com/screenshots/spotifymern-mobile-light.png)](https://spotifymern.vercel.app)

## React-Query Integration

React-Query is used to fetch and manage data in the frontend. The library provides hooks for fetching data from the backend API, caching responses, and handling loading and error states.

## Redux Integration

Redux is used for global state management in the frontend. It stores user authentication information, such as the JWT token, and manages user-related actions like logging in and logging out.

## React-Router Integration

React-Router is used for client-side routing, allowing smooth navigation between different pages and managing URLs for specific content.

## AWS Cloud Integration

Amazon S3 is used for storing and serving musics, including categories, thumbnail images and users' profile pictures.

[![SpotifyMERN](https://spotifymern.s3.us-east-2.amazonaws.com/screenshots/aws-mobile-dark.png)](https://spotifymern.vercel.app)

## TailwindCSS Styling

[![SpotifyMERN](https://spotifymern.s3.us-east-2.amazonaws.com/screenshots/spotifymern-desktop-dark.png)](https://spotifymern.vercel.app)

## Powerful MongoDB Atlash Search Engine

[![SpotifyMERN](https://spotifymern.s3.us-east-2.amazonaws.com/screenshots/search-mobile-dark.png)](https://spotifymern.vercel.app)

## Authentication

User authentication is managed using JWT tokens obtained from the backend upon successful login. The JWT token is stored in the Secure Response Headers and included in the Authorization header for protected API requests also hashing passwords and save them to MongoDB

[![SpotifyMERN](https://spotifymern.s3.us-east-2.amazonaws.com/screenshots/authentication-mobile-dark.png)](https://spotifymern.vercel.app)

## 🔗 Contact

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hsyntes)
