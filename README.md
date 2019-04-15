# Formula One Winners App

This is a project to consume the [Ergast](http://ergast.com/mrd/ "Ergast") API to list the winners of Forumla One Races from 2005 to 2015 and also marks the World Champion for the selected year.

Project was built using ReactJS 16, React-Router-DOM 5 and Semantic-UI 2.4.1. It starts by creating the boxes for the years from 2005 to 2015 and then allows to click on any box to go to the winners page.

On the Winners Page, two requests are sent:
- [Get Winners for a specific year](https://ergast.com/api/f1/2008/results/1.json "Get Winners for a specific year") https://ergast.com/api/f1/{year}/results/1.json
- [Get World Champion for a specific year](https://ergast.com/api/f1/2008/driverStandings/1.json "Get World Champion for a specific year") https://ergast.com/api/f1/{year}/driverStandings/1.json

Where {year} is replaced by the year of the championship.

Then the two requests are merged and renders the list with marking the World Champion with a star icon.

## [ Live Demo](https://formula-one-winners.netlify.com " Live Demo")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.