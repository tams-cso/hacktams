[![Netlify Status](https://api.netlify.com/api/v1/badges/744489ae-e351-4ea0-9054-670d947b244d/deploy-status)](https://app.netlify.com/sites/hacktams/deploys)

# hackTAMS Official Site

This is the official site for hackTAMS! Feel free to look around and make a pull request to request changes.

## Installation

To install, clone the repository and run `yarn install`.

### Configuration

All the data is in the `data` folder, sorted by years. Each data file will contain the following information:

```json
{
    "year": "YYYY",
    "dates": "Month [Start Date]-[End Date]",
    "participants": 2147483647,
    "projects": 42,
    "devpost": "Link to devpost",
    "site": "Link to website",
    "team": [
        {
            "name": "Name of team member to display",
            "position": "Position of team member to display",
            "link": "(optional) Link to site/github/linkedin/etc to go to when clicked on",
        },
        {
            // team memeber 2
        }
        // etc
    ]
}
```

For images, place the images with the format `first-last.jpg` in the folder specified by `imageDb` in `event.js`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
