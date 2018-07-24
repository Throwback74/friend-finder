# Friend Finder Application

## Description

*Friend Finder* is a compatibility based application -- basically a dating app. This is a full-stack site that takes in the results from the user's survey - 10 questions with responses ranging from 1 (Strongly Disagree) to 5 (Strongly Agree) - and compares them with the answers from other users. The app then displays the name and picture of the user with the best overall match based on the user who's answers have the lowest absolute difference for all ten questions combined.

The *Friend Finder* application is meant to simulate a simple dating app. The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Bootstrap](https://getbootstrap.com/) CSS framework on the front end along with the jQuery plugin [Chosen](https://harvesthq.github.io/chosen/) for creating the survey form.

## Demo
	
*Friend Finder* is deployed to Heroku. Please check it out [here](https://friend-finder-appcbc.herokuapp.com/).

## Running Locally

To run the application locally and access it in your browser, first clone and install the GitHub repo, following the instructions below:

	open git bash or the terminal in the directory of your choice
	git clone https://github.com/Throwback74/friend-finder.git
	open repo in VS Code (alternatively you can use VS code's built in bash/terminal to clone the repo and save a step)
	cd friend-finder/right-click OR cmd-click and open in Command prompt/Terminal
	npm install
	
once packages have installed: 
	
	node server.js
	* If you need to alter the default Port number of 3000 then add your chosen port number after server.js as in the following example:
	node server.js 8080
	Then in any browser, open http://localhost:PORT replaceing PORT with 3000 OR with your chosen port number
	OR follow the link created by the console.log displayed in the terminal