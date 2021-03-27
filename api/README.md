# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Garden Plan(ter) - A React app by Nick Blackfff

Garden Plan(ter) is an app designed to help gardeners of any skill level. With it, you can build garden spaces, add beds and planters, selects popular plants to grow, and build a calendar of planting events to keep your garden growing.

### Learning about the plants

No account is needed to review the list of garden plants available and their descriptions

### Create a new account

Click on the 'Get Started' button in the top right and select 'sign up' from the Netlify Identity Widget. Enter your information and click sign up. From there you will be taken to the 'getting started section of the site to create your first garden.

### Create or Add a new garden

If creating a new account, the 'getting started' section of the site will first prompt you for a little more information. The required fields are needed to properly add you to our database but the remaining fields are optional. Whether you are creating a new account or adding a garden to an existing one, the set of the process is the same.

Enter the zipcode for the garden you wish to create. An external API will use that to determine your Plant Hardiness Zone for the proper planting schedules. Then provide the outer dimensions of the area you want to use a garden. This area could be anything from your back yard to a shelf in your living room. If you want to make multiple shelves, create a new garden for each shelf. Currently the max size you can enter is 14' (168").

The next step is to add any garden beds, plots, planters, conainers, or pots you plan to use. You only need to enter each size once. Select 'Planter' from the drop down list to make a round container and 'bed' to make a square or rectangle one. Once you are satisfied with everything you've entered, click Next.

Finally, you can now add your containers to the garden space you created in the first step. Drag and drop your desired container onto the garden space. Then arrange them however you want. If the container goes outside the lines, drag it back in to ensure everything fits. Once you are satisfied, click finish and your garden will be save to your account.

### Selecting plants

When logged into your account, the 'Plants' section now provides the option to select any plant and add them to a list for use in your gardens. Select as many plants and you wish or remove them from the list with the 'X'.

Once selected, you can also review and change your current choices from the 'My Plants' section of the user dashboard.

### Adding plants to your garden

After selecting any number of plants from the list. Click on the 'My Gardens' link from the dashboard or the button in the top right. This will provide a list of all your available gardens. Select the garden you wish to work with. Your layout of containers will be displayed as well as you list of seleced plants. Click on any of your garden containers to begin adding plants from your list to them. Once your container selection appears, begin click on plants from your selected plant list or remove them from the current container. Only one of each type of plant is needed per container. Once you are satisfied, click save and you will be taken back to your dashboard.

### Using the calendar

Once you have added plants to your garden you can now access your calendar. Click on 'My Calendar' from the dashboard or the link at the top right. Your calendar will automatically populate a planting schedule based on any plants you have in your garden. It will give you a date range for when to sow your seeds indoors, or to transplant them into a final container.
