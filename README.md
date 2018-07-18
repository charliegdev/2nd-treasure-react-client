# 2nd-Treasure React Client
A CRUD application written in React. You can view it live at this [GitHub Page](https://charliegdev.github.io/2nd-treasure-react-client/).
## Motivation
**I'm learning React.**

One of the most commonly agreed opinion about learning a new programming technology, is to make something using it.

This application you're looking at is my 1st autonomous React project. It is not the result of following a tutorial or a book, where instructions are fed to you. It's based on a small full-stack AngularJS application I have made in the past.

## Original AngularJS Version
A couple weeks ago, I made a full-stack JavaScript application, [2nd Treasure Bookstore](https://github.com/charliegdev/2nd-treasure-ng). Briefly, that is a simple CRUD application that uses:

* [AngularJS](https://angularjs.org/) as front-end;
* [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) as back-end.

I have used AngularJS in my work for over a year now, and have become quite comfortable with it. Unfortunately, as of July 1, 2018, it has officially become [legacy technology](https://docs.angularjs.org/misc/version-support-status). I'm sure a lot of workplaces still need developers who know AngularJS to maintain legacy applications, but I'm not going to bet my career on the next Flash. That was one of the reasons I want to learn React, and this project is part of the process.

## The New React Version
After finishing React's [official tutorial](https://reactjs.org/tutorial/tutorial.html) and one of the best book about the topic, [Road to React](https://www.robinwieruch.de/the-road-to-learn-react/), I asked myself: what should be my next step to solidify my knowledge?

My answer, is to remake that AngularJS CRUD application using React. For learning purpose, I didn't recreate a full-stack application; this repo is only the client side. This means 2 things:

1. The data is stored on the client side instead of on the server-side. There will be no API calls to any server.
1. The client is not hosted by any server I wrote; it'll just live on GitHub Pages, at [this address](https://charliegdev.github.io/2nd-treasure-react-client/).

## Build and Run on Your Own Machine
Follow these steps if you would like to run this application on your own machine.

1. Make sure you have git and Node.js installed; if not, install git from [here](https://git-scm.com/), and Node.js from [here](https://nodejs.org/en/).
1. `git clone https://github.com/charliegdev/2nd-treasure-react-client`
1. `cd 2nd-treasure-react-client`
1. `npm install`

Once the installation is done, there are a couple of things you can do:
1. For **dev builds**, run `npm start`. This will open your default browser, and go to `http://localhost:3000` for you. I have *Hot Module Replacement* enabled, so whenever you make some changes and save it, you'll see the change in your browser instantly. No more recompiling, no more refreshing.
1. For prod builds, run `npm run build`. This will generate a new folder, `build`, in the root directory of your repo. This repo contains the minified built files, and is ignored by git by default. If you have a build pipeline such as Jenkins, you should push the `build` directory to your server.
1. For unit tests, run `npm test`. The tests are in watch mode, so whenever you change your source code, the unit tests will be triggered again. This is a great way of improving the quality of your codebase.
1. After you're happy about your changes and are ready to show it to the world, run `npm run deploy`. This will deploy your `build` directory to GitHub Pages, thus visible on the internet. Think of this as a poor man's Jenkins pipeline. However, before you run that, make sure you change the entry of `"homepage"` in `package.json` to give it correct values; for more detail, check out [this doc](https://github.com/gitname/react-gh-pages).

*Note: for `npm run deploy`, you might run into errors when you execute it the 1st time. Simply execute it again, and it should work fine.*