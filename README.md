This repository is made for a machine test.

Technologies and Libraries Used:

- JSX and basic CSS for the development.
- Redux Toolkit for state management.
- Functional components and React hooks.
- Bootstrap CSS classes for layout and responsiveness.
- Skeleton loading with react-loading-skeleton during API fetch.

Pages and Routing:

- Two main pages: Login and Dashboard.
- ProtectedRoute: Basic route access is restricted without login (token required).
- ProtectedAuthRoute: If the user is logged in, the login page is not accessible.
- After a successful login, the user is redirected to the Dashboard.

Authentication:

- Dummy token is generated using jwt-encode for simulation.
- Password validation requirements:
  - Minimum 8 characters
  - At least 1 capital letter
  - At least 1 number
  - At least 1 special symbol

Features:

- Countries are listed as per the instructions.
- "Load More" button is available to fetch and display more countries incrementally.
- Page layout and elements are responsive according to Figma design specifications.

Dependencies:

- axios
- react-icons
- bootstrap
- react-slick
- slick-carousel
- hamburger-react
- animate.css
- jwt-encode
