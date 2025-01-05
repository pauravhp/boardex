# BoarDEX

BoarDEX is a dynamic web application designed to explore and compare board games. It provides users with detailed insights, including game descriptions, mechanics, categories, ratings, and reviews. The platform is user-friendly, responsive, and visually engaging, making it a great resource for board game enthusiasts.

## 🚀 Features

- **Search Board Games**: Easily search and filter board games based on their names or categories.
- **View Details**: Explore comprehensive details about each board game, including ratings, mechanics, and reviews.
- **Compare Games**: Compare different board games side-by-side.
- **Personalized List**: Add board games to your personal list for quick reference.
- **User Reviews**: Browse reviews from other users.
- **Responsive Design**: Fully responsive and optimized for all devices.

---

## 🛠️ Technologies Used

- **Frontend**: React.js with Material-UI
- **State Management**: Redux
- **Routing**: React Router
- **Backend/Database**: Firebase
- **Styling**: SCSS + Material-UI
- **Icons**: Material Symbols + FlatIcon
- **Deployment**: Netlify

---

## 🖱️ How to Use

### Search Board Games

- Use the search bar on the home page to find your favorite board games.

### View Details

- Click on a board game to view its description, mechanics, categories, ratings, and reviews.

### Add to List

- Add board games to your personalized list by clicking the "Add to List" button.

### Compare Games

- Navigate to the "Compare" tab to compare details of two or more board games.

### Explore Reviews

- View detailed reviews and ratings provided by other users.

---

## 📚 Libraries, APIs, and Resources

### Libraries

- **Material-UI**: For implementing responsive and modern UI components. [Material-UI Documentation](https://mui.com/)
- **SCSS**: For enhanced styling and modular CSS. [SCSS Documentation](https://sass-lang.com/)
- **Firebase**: For authentication and real-time database services. [Firebase Documentation](https://firebase.google.com/)
- **React Toastify**: For showing user-friendly notifications. [React Toastify Documentation](https://fkhadra.github.io/react-toastify/)
- **React Icons**: For including Material and Font Awesome icons. [React Icons Documentation](https://react-icons.github.io/react-icons/)
- **DOMParser**: For parsing XML data into usable objects. [MDN Web Docs on DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- **Netlify CLI**: For seamless deployment to Netlify. [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)

---

### APIs

- **BoardGameGeek API**: Used to fetch detailed board game data, including descriptions, categories, mechanics, and reviews. [BoardGameGeek API](https://boardgamegeek.com/wiki/page/BGG_XML_API2)
- **Firebase Authentication API**: For managing user authentication securely. [Firebase Authentication](https://firebase.google.com/products/auth)

---

### Resources

- **YouTube Video**: This project drew inspiration from a video tutorial on creating dynamic, responsive web apps for a Pokedex web application.
  - [Video Title: "Build a Pokemon App with React, Redux Toolkit, Typescript, Firebase and SCSS with Netlify Deployment"](https://www.youtube.com/watch?v=qs2neNqLcmw&t=855s)

---

## 📂 Project Structure

boardex/
├── public/ # Public assets
├── src/
│ ├── app/ # Redux store and slices
│ ├── components/ # Reusable components
│ ├── pages/ # Application pages (Search, About, Compare, etc.)
│ ├── scss/ # SCSS files for styling
│ ├── sections/ # Sections like NavBar and Footer
│ ├── utils/ # Constants, helper functions, and configurations
│ └── index.tsx # Entry point
└── README.md # Project documentation
