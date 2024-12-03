# MC FOOTBALL

## Description

This project is an interactive application that allows you to manage a football team. It provides an intuitive user interface to organize players according to specific tactical formations, such as 4-3-3. The application also supports managing a file of player data for easy import and export of player information in JSON format, with new player data being stored in local storage. The styling is handled using both Tailwind CSS, including some pre-built components, and custom CSS.
 
---
You can try the live demo of this project [here](https://anouar-elbarry-fut.vercel.app/).

## Features

### UI Integration and Dynamic Player Addition
- **Player addition form**:
  - Fields for name, position, rating, statistics, and other relevant details.
  - Positions automatically adjusted based on the selected formation (e.g., 4-3-3).

### Player Positioning According to the Selected Tactical Formation
- Positions are assigned based on the selected tactical formation:
  - **4-3-3 Formation**:
    - 1 GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.
- Automatic adaptation of player positions based on the chosen formation.

### Player Card Management
- **Add, edit, and delete player cards** via the **Player Page**.
  - Players can be **edited** or **deleted** directly on their respective player page.
- Strict limitation of 11 players in the main formation:
  - Additional players are assigned as substitutes.

### Dynamic Forms for Player Management
- Add and remove players while adhering to tactical formation rules.
- Validation of fields to ensure data consistency:
  - Verifying information such as name, position, and rating.

### Player File Management
- **Player file**:
  - Supports importing and exporting player data in JSON format.
  - Allows you to easily load and save player data for use across sessions.
  - **Local storage** is used to store new player data persistently within the user's browser.

### Styling with Tailwind and Custom CSS
- The project utilizes **Tailwind CSS** for utility-based styling.
- **Tailwind components** are incorporated for faster UI development.
- Custom CSS is used to manage unique styles and overrides as needed.

---

## Prerequisites

- **Languages**: HTML, CSS, JavaScript.
- **Browser**: Chrome, Firefox, or any modern browser.
- **Player Data File**: The player data file should be in JSON format for importing and exporting.
- **Tailwind CSS**: Tailwind is used for utility-based styling, with some pre-built components integrated.
- **Custom CSS**: Custom styles and overrides are included to fine-tune the design.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Youcode-Classe-E-2024-2025/anwar-elbarry-fut.git
   `````
2. Navigate to the project directory:
   ```bash
   cd anwar-elbarry-fut
   `````
3. Run the application:
- Open index.html in a browser.
- If a server is required, start it and access the corresponding URL.
4. Player Data File:
- Import player data by uploading the player file using the application’s interface.
- Export player data to save your team’s player details.
- New player data is stored in local storage.

## Author
   Developed by ANOUAR EL BARRY.