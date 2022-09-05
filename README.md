# Module-14-Tech-Blog

## Table of Content

• [My Task](#my-task)

• [User Story](#user-story)

• [Acceptance Criteria](#acceptance-criteria)

• [Mock-Up](#mock-up)

• [Installation](#installation)

• [Usage](#usage)

• [Skills Used](#skills-used)

• [Credits](#credits)

## My Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

Please find GIF of walk through below

![working example gif](./assets/Object%20Relational%20Mapping.gif)

Please find MP4 of walk through below

[click here for mp4](https://drive.google.com/file/d/1PyFQjxXppL-zDcxn1_LaYSURqwbmniJk/view)

## Installation

```
npm i
```

## Usage

To run this application follow the below:

1. Open the repository in your terminal or bash.
2. Add a .env file
3. Log into MySQL in the command line by entering ```mysql -u root -p``` and the password in your .env file.
4. Create the database by entering ```SOURCE ./db/schema.sql;```.
5. Quit MySQL by entering ```quit```.
6. Seed the database with sample data by entering ```npm run seed``` in the command line. (Pleae note this step is optional) 
7. Start the server by entering ```npm start``` in the command line.

## Skills Used

• HTML
• CSS
• Bootstrap
• Javascript
• Node.js 
• Express.js
• Express-handlebars
• MySQL2
• Sequelize
• Dotenv
• Bcrypt
• Express-session
• Connect-session-sequelize
• Heroku.

## Credits

• [.env](https://www.npmjs.com/package/dotenv)

• [inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)

• [MySQL 2](https://www.npmjs.com/package/mysql2)

• [npm watch](https://www.npmjs.com/package/npm-watch)

• [npm run](https://www.npmjs.com/package/npm-run)

• [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

• [express-handlebars](https://www.npmjs.com/package/express-handlebars)

• [sequelize](https://www.npmjs.com/package/sequelize)

• [express-session](https://www.npmjs.com/package/express-session)

• [bcrypt](https://www.npmjs.com/package/bcrypt)