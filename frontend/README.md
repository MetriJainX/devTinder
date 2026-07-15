# dev tinder
-created a vite+react app
-REMOVE UNNECESARY CODE AND CREATE A HELLO WORLD APP
-INSTALL TAILWIND.CSS
-INSTALL DAISYui
-ADD NAVNAR TO APP.JSX
-CREATE NAVBAR.JSX SEPARATE COMPONENT FILE
-INSTALL REACT ROUTER DOM
-CREATE BROWSEE ROUTER >ROUTES>ROUTE=/BODY>ROUTECHILDREN
-CREATE AN OUTLET IN BODY COMPONENT
-CREATE A FOOTER
CREATE A LOGIN PAGE
-INSTALL AXIOS
-
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};



## we can install many packages in a single command (npm i daisyUI react/redux cors etc)

## cors(cross origin) error is when we are making a call from one origin to diff origin ie herre from browser to postman.it would be fine agr namstedev.com to namstedev.com.for security reasons browsers have cors error. install core ,add middleware with config:origin,crdentials.whenever ur making an api call  so pas axios=>{withCredentisls:true} otherwise it will not send the token.u can chckthe token in applicatin->cookies

## now we will add redux toolkit
- naavbar shld update as soon as user logs in
- refractor our code to add constants file+create a components folder
- u shld not access other routes without login
- if token is not present redirect user to login page
- build logout 
- build profile page
