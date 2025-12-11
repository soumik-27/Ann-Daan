# AnnDaan - Food Donation Platform

AnnDaan is a modern, responsive frontend prototype for a food donation platform. It is built with pure Vanilla JavaScript, HTML, and CSS, and features an interactive map to display donation locations.

## Features

- **Interactive Map**: Displays donation locations using the Google Maps API.
- **Dynamic Content**: Donation cards and map markers are generated dynamically from JavaScript data.
- **Theme Toggle**: Switch between a light and dark mode theme, with the map style changing accordingly.
- **Filtering**: Filter donation cards by category (All, Cooked, Raw).
- **Responsive Design**: A clean, modern UI that works across different screen sizes.
- **Modal Form**: A pop-up modal for submitting new food donations.

## Tech Stack

-   **Frontend**:
    -   Vanilla JavaScript (ES6+)
    -   CSS3 with Custom Properties
    -   Semantic HTML5
-   **APIs & Libraries**:
    -   Google Maps JavaScript API
    -   FontAwesome (for icons)
    -   Google Fonts ('Inter')

## Project Structure

The project consists of three main files:

-   `index.html`: The main HTML file containing the structure of the web page.
-   `style.css`: The stylesheet responsible for all styling, layout, and theming.
-   `script.js`: The JavaScript file that handles all dynamic behavior, including map initialization, content rendering, and event handling.

## Setup and Installation

This is a static web project and does not require a build step or complex setup.

1.  **Clone the repository or download the files.**
2.  **Configure the Google Maps API Key.**
3.  **Run the project.**

### Step 1: Configure API Key

Before the map will work, you must add your own Google Maps API key.

Open the `index.html` file and find the following line at the bottom:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initMap" async defer></script>
```

Replace `YOUR_API_KEY_HERE` with the key you obtained from the Google Cloud Console.

**IMPORTANT**: Remember to secure your API key by adding HTTP referrer restrictions in the Google Cloud Console to prevent unauthorized use.

### Step 2: Run the Project

You can run this project in two ways:

-   **Using a local web server (Recommended)**:
    -   If you use VS Code, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. Right-click on `index.html` and select "Open with Live Server".
    -   Any local server will work (e.g., `python -m http.server`).
-   **Opening the file directly**:
    -   You can also open the `index.html` file directly in your web browser, though using a local server is better practice.
