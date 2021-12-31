# address-book

## Project Commands
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Runs Unit Testing
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Deployment
For this project I used Netlify to deploy the application as a static app due to the lack of necessary features for a full app and funding.
https://festive-stonebraker-5feea2.netlify.app

### Netlify
 To deploy to Netlify you can simply go to https://www.netlify.com and login through github. You can either fork my repository to your github account and run these commands or you can run through the original repository.

First you go to the root folder of the project and run 
```
npm install
```
Then you can build the app by running
```
npm run build
```
This should create a `dist` folder within the root folder of the app.

This is the folder that you can use to deploy a static web site. You can either upload this folder to Netlify by manually deploying the site or you if forked go and choose you project name and deploy that. Make sure when you do this the build command is `npm run build` and the publish directory is `dist`.


### Container based deployment

For container based deployment I have included a `dockerfile` along with a `.dockeringnore`. The docker file creates images based on `nginx` and `node:16.6-apline`. To get a docker container up and running you can follow these steps. Make sure you have docker installed. It can be installed at https://www.docker.com/products/docker-desktop. 

Head to the root folder of the application and run
```
docker build . -t address-book
```
This takes awhile to build but once this is done the image will be set up. To run the image you can run 
```
docker run -it -p 8080:80 --rm --name address-book address-book
``` 
This will create the container. You can use the image to deploy to any container service including AWS ECS and Google Cloud Run.

## Project Summary

### Overall Approach

My approach started with getting to know what exactly I was coding. In other word getting to know the specifications and creating a rough flow for the project in my mind. I had to carefully write down the requirements since this will be the basis of me choosing the project stack. Based on these I ended up choosing the client side framework `Vue.js 2`. This was something I was familiar with and it would easily be able to fufill the requirements. Of course, something to consider would be future development specs but Vue.js was a great choice for good code structure and allowing for client side routing. `ReactJs` was another consideration but I stuck with `Vue` for better familiarity.

Once chosing the stack I had to choose the test environments. I would base them on their ability to cover the code and their ease of use. Tests should be simple but should also cover as much of the code as possible. I used `Jest` and `Vue Test Utils`. This allowed me to create a solid unit testing environment.

After selecting the stack and test environments, I was able to proceed to creating the setup of the environment. `Vue` has a great starter package for this called `Vue CLI`. This allows us to setup with ease since it manages folder structure and package installation.

I moved on to planning and designing the routes and page structure. I went ahead and planned the routes for the basic implementation. I also selected a color scheme. In planning what each page would allow I thought up of the solution to use a store between routes using `Vuex`. This will handle the api call and store our data rather than using props and calling the api each time on the `/` page. This way you would need to call the api only on the mounting of the `App Component`. I had reviewed the routes and query structure of the api beforehand and decided to use a seed for 25 people. Once decided I created all the routes using `Vue Router` and I set up the api request and the state/mutations I would need. I added the components for the `/` and `details` page and the components for each. I created the tests for each of the components and I started debugging using the tests.

After I have thought of the deployment process. The best deployment method that came into my mind was cloud deployment in which would need funding so I implemented a container system for the app to create for future deployment. The cloud would make this app easy to scale and manage. This would definitely be the best option for future consideration. Since the app was static I just deployed using a static host called `Netlify` which allows for an easy drag and drop deployment.

### Features

- Client Side Routing
- Single Request Application
- Contact List
- Details Page including Address and Phone

### Future Features

- Creating a search box for easier contact retrieval by filtering the list 
  - Could take a couple hours to implement depending on the search complexity `(min 3 hours)`

- Adding Sorted Contact List which allows for faster UX access 
  - Could take a `min of 1 hour`

- Adding a google map on the `details` page with access to a google maps link 
  - Could take around `2-4 days` to implement since getting the api access and setting up billing, keys, and adding the UI to the page add to the time

- Allowing for Infinite Scrolling for many users using something like `Ajax`
  - Could take around `1-2 days` to implement 

### Making the Project Robust
Given more time I would have created a more optimized UI handling multiple tests when api goes wrong or doesnt give proper data. I would have made the UI look stronger. I would have added more tests to cover greater area of the code. I would also move to automated E2E testing rather than self testing.