# :sunny: SINAG WebGIS Front-end

The SINAG WebGIS Front-end runs on React and Node.js environment.

## :wrench: What you need to run this on your local

1. Node v16

2. Npm 8 or higher

## :star: How to install

1. Clone this repository

2. Go to the root directory and create a `.env` file

3. Copy this code to the `.env` file

```
PORT=3000
REACT_APP_API = https://localhost
```

4. Inside the root directory, open a terminal and run `npm install`

5. Next run `npm start`

6. You should now see the app running at localhost:3000, you can edit the port inside the `.env` file if you want to run it in a different port.

## :sparkles: Inside the app

### Technologies Used

-   Javascript Framework: [React v18](https://react.dev/)
-   UI Framework: [https://mantine.dev](https://mantine.dev/)
-   CSS Preprocessor: [SASS/SCSS](https://sass-lang.com/documentation/)
-   State Management: [Redux Toolkit](https://redux-toolkit.js.org/)
-   Data Visualisation: [Recharts](https://recharts.org/en-US)
-   Map Library: [React leaflet](https://react-leaflet.js.org/)

### Accessing the Pages

-   You can go `/src/Router.js` to check the corresponding pages.

### Changing the Mark up or CSS

-   The app runs on JSX and SCSS you can just look for the `classNames` inside the `.scss` files inside `/src/stylesheets`

### Where to find the HTTP Requests

-   If you go to `/src/services/features` you can see different slice files. The slice file depends on the feature of the app. For example if you want to see the http requests made on the Map feature you can go to the `MapsSlice.js`. Read about redux toolkit on their documentation page.

## :rocket: How to Deploy

-   The app is deployed on netlify, you can just push the updates on the `master` branch in git, and it should automatically be deployed.

## :rocket: About the Application

