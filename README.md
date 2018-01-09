# Create React App Pinterest API diagnose tool
Extends [Create React App](https://github.com/facebookincubator/create-react-app) boilerplate to include a  Pinterest login button ()when not authenticated) or display the currently logged username and avatar.


## Requirements
- NodeJS version >= 6

## Installation and Run
1. Create a [Pinterest app](https://developers.pinterest.com/docs/sdks/js/)
1. Make sure there is an environment variable called REACT_APP_PINTEREST_APP_ID with the generated Pinterest app ID. You can use [any supported mechanism](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) 

In the project directory, run:

1. ``yarn install``
1. ``HTTPS=true yarn start`` will run development server locally on port 3000 using HTTPS (Pinterest API requires it) and launch the default browser.

## Deploy to Firebase
1. ``npm install -g firebase-tools`` will install Firebase command line tools (only once, in your local machine)
1. ``firebase login``
1. ``yarn build``
1. ``firebase deploy``
