# Software Requirements

## Vision
Minimum Length: 3-5 sentences

What is the vision of this product?
  - Provide vacationers with ideas for entertainment attractions and nightlife where they plan to travel.
What pain point does this project solve?
  - Gives people a centralized location on the web for all their entertainment needs.
Why should we care about your product?
  - This project makes travel planning easier, and saves consumers time. Furthermore our site may serve to get people excited about traveling, and thereby support and encourage travel and participate in consumer engagement.

## Scope (In/Out)

- IN - What will your product do
  - Provide desination photos, weather, and entertainment attractions and events at a given destination.

- OUT - What will your product not do.
  - No purchasing or booking. Only providing information.
  - Only provides information for U.S. cities.
  - 
  - These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.

## MVP

- MVP functionality
  - Use user input to present relevant photos, weather, and entertainment to client
  - Store search results in database
  - Allow users to create unique user-Profiles, and store their data privately
  - Authenticate user ID at login page
  - 

- Stretch Goals
  - Cache hit and miss data storage/retrieval
  - International data
  - Multiple languages
  - Admin dashboard with permissions and functionality

## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

- An admin can create and delete user accounts (STRETCH)
- A user can update their profile information
- A user can search any US city (International: STRETCH)
- A user can create a unique profile for their use of the site.
- A user can access saved search results.

## Non-Functional Requirements

Examples include:

- Security 
  - Auth0 - Authenticate user IDs at login

- Usability
  - Google Chrome Dev Tools
    - Console.log()'s in the code with provide proof of life throughout development.
  - Thunderclient
    - Requests to .get, .put. .delete, etc. can be tested for data retrieval, creation, etc.
  - Netlify
    - Front end deployment site will report back on whether or not deployments is possible
  - Heroku
    - Back end deployment site will report back on whether or not deployments is possible