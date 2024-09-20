Weather Application
This project is a simple Weather Application built using React.js and the Open Weather API. 
The application allows users to fetch current weather data for different locations and display key weather details such as temperature, humidity, wind speed, and a weather description.

Table of Contents
    Features
    Technologies Used
    Installation
    Usage
    How It Works
    Bonus Features
    Responsive Design
    Screenshots
    Future Enhancements
Features
    Fetches weather data using the Open Weather API.
    Displays information like:
        City name
        Temperature (°C)
        Humidity
        Wind speed
        Weather description
        Date and time
    Dark Mode/Light Mode toggle.
    Fetch weather data for multiple locations.
    Error handling for invalid locations and empty input.
    Responsive design for desktop, tablet, and mobile devices.
Technologies Used
    React.js: JavaScript library for building user interfaces.
    Open Weather API: To fetch current weather data.
    CSS: For styling and creating a responsive UI.
    HTML: For structuring the application.

Usage
    Enter a city name or zip code in the input field.
    Click the "Get Weather" button.
    The application will display weather data for the entered location, including temperature, humidity, and wind speed.
Dark Mode/Light Mode
    Click the "Dark Mode/Light Mode" button to toggle between the two themes.

Error Handling
    If the input field is empty or if an invalid city name is provided, the application will display a user-friendly error message.
How It Works
    User Input: The user enters a city name or zip code in the input field.
    API Call: When the user clicks "Get Weather," the app sends a request to the Open Weather API with the user’s input.
    Displaying Data: The weather data received from the API (temperature, humidity, wind speed, etc.) is displayed on the page.
    Error Handling: If the input is invalid or no weather data is available for the location, an error message is shown in the UI.
    Multiple Locations: Users can enter multiple cities to display the weather information for several locations at once.
Bonus Features
    Dark Mode/Light Mode: The user can toggle between dark and light themes by clicking the button at the top of the screen.
    Multiple Locations: The application allows users to see weather data for multiple locations in one session.
    The weather information for all searched cities is displayed on the page.
    Additional Weather Information: Apart from temperature, the app also shows:
        Humidity
        Wind speed
        Weather description

Responsive Design

  The application is designed to work well on devices of various screen sizes. It is fully responsive and adapts to:
    Desktops
    Tablets
    Mobile devices