# Travel App Back-End

## Expanding 201 Travel App

### Summary of Idea
- Expand existing travel app from 201, to add and update the following features:
  - Update questions and add/remove destinations, Add weather, Add entertainment and food, What problem or pain point does it solve? 
  - a. Keep it high level without going into too much detail. (3-4 sentences is enough)The app is intended to reduce the stress of vacation planning. It also helps to minimize potential over exposure to the various choices.
Minimum Viable Product (MVP) definition.
- What is the minimum required for you to present on your demo day?
Destination suggestions, Destination forecast, Images, Entertainment Auth0

### Wireframe

![Wireframe](Wireframe.png "Wireframe")

<br/>

### User Stories

  1. Entertainment API data retrieval

    - User Story
    - As a traveler, I want to know what my options are for entertainment when I decide where to visit.

    - Feature Tasks
      - Use an API to present the user with entertainment options at their selected destination.
      - Allow users to simply clear their search input before submitting a search.

    - Acceptance Tests
      - Ensure the relevant destination is used in the API call
      - Ensure the retrieval of data from API back to server
      - Appropriately store retrieved API data using `Search` model and schema in database.
      - Confirm presentation to user via client after sending server response.
      - Return error messages where appropriate

  2. Weather API data retrieval

    - User Story
      - As a traveler, I want to know what the weather might be like when I decide where to visit.

    - Feature Tasks
      - Use an API to present the user with a weather forecast for their selected destination.

    - Acceptance Tests
      - Ensure the relevant destination is used in the API call
      - Ensure the retrieval of forecasts from API back to server
      - Appropriately store retrieved forecast using `Search` model and schema in database.
      - Confirm presentation to user via client after receiving server response.
      - Return error messages where appropriate

  3. Past searches retrieval

    - User Story
      - As a traveler, I want to revisit data I've been shown already from previous searches.

    - Feature Tasks
      - Present the user with search results for their previously selected destinations.

    - Acceptance Tests
      - Ensure the relevant destination data is retrieved in the API call to database
      - Ensure the retrieval of data from API back to server
      - Confirm presentation to user via client after receiving server response
      - Return error messages where appropriate

  4. Profile creation and persistence

    - User Story
      - As a traveler, I want to create my own user profile on the site, so that I might access my own previously retrieved travel data another time.

    - Feature Tasks
      - Create unique user profiles for each user to access their previously searched data.

    - Acceptance Tests
      - Ensure users are uniquely identified and greeted on all pages while using site
      - Ensure the retrieval of previously searched data from database specifically for current user.
      - Confirm presentation to user via client after receiving server response.
      - Return error messages where appropriate

  5. Profile authentication and security

    - User Story
      - As a traveler, I want to secure my travel data with a username and password

    - Feature Tasks
      - Use Auth0 to authenticate unique profiles and their searches

    - Acceptance Tests
      - Ensure the user is able to log in and out repeatedly using their credentials
      - Ensure the user's data is accessible to them when they log in
      - Bring users to homepage after logging in
      - Return error messages where appropriate

### Data and Domain Modeling

![Data Modeling](DataModeling.png "Data Modeling")

**UML** (database schema included)

[UML Flowchart](https://miro.com/app/board/uXjVOoUQdK4=/)

### Resources

- Pexels.com
  - Images
- developer.ticketmaster.com
  - ticketmaster API
- Weatherbit.io
  - weather API


