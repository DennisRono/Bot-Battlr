# Bot Battlr

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Advanced Features](#advanced-features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/DennisRono/Bot-Battlr.git
   cd Bot-Battlr
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the JSON server:

   ```bash
   npm run server
   ```

4. Start the React application:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **View Bots**: The application initially displays a collection of available bots.
- **View Bot Details**: Click on any bot card to view more details about the bot.
- **Enlist Bots**: Enlist a bot into your army by clicking the "Enlist" button.
- **Manage Army**: View your enlisted bots in the "YourBotArmy" section. You can release or permanently delete a bot from your army.

## Features

- **Bot Collection**: Browse through a list of available bots.
- **Enlist Bots**: Add bots to your army. Each bot can only be enlisted once.
- **Release Bots**: Remove a bot from your army.
- **Delete Bots**: Permanently delete a bot from the collection and your army.
- **Persistent Storage**: Enlisted bots are persisted in the database, ensuring data is retained between sessions.

## Advanced Features

- **Bot Details View**: Choose if you want to enlist a bot or just view its data. Clicking on a bot card will display a detailed view of the bot.
- **Sort Bots**: Sort bots by health, damage, or armor using the `SortBar`.
- **Filter Bots**: Filter bots by their class using the `FilterBar`.
- **One Bot Per Class**: Ensure that only one bot from each class can be enlisted in your army.

## Project Structure

```
src/
│
├── components/
│   ├── BotCard.js        # Renders an individual bot card
│   ├── BotCollection.js  # Renders the list of all available bots
│   ├── BotSpecs.js       # Renders detailed view of a selected bot
│   ├── YourBotArmy.js    # Renders the list of enlisted bots
│   ├── SortBar.js        # Component for sorting bots
│   └── FilterBar.js      # Component for filtering bots by class
│
├── App.js                # Main application component
└── index.js              # Entry point of the application
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling components.
- **JSON Server**: A full fake REST API for testing and prototyping.
- **JavaScript**: Programming language used for logic and functionality.
