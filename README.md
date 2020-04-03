# FriendFinder

This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Application Flow

When a user visits the site they are brought to a landing page. They can then navigate to the survey and answer 10 questions from 1(strongly agree) to 5(strongly disagree). 

Ex: ![Screenshot of first page to the survey page.](app/public/assets/images/mainToSurvey.gif)

This includes client-side validation which will not allow a user to submit their answers if all fields have not been filled out. A modal will display in the event a field is missing:

Ex: ![Screenshot of error modal for validation](app/public/assets/images/surveyValidation.gif)

When the user has entered all fields, we will send the user response to be compared with the current friends users and determine the best match. This best match will also be displayed in a modal over the survey. Upon closure of the modal we clear the form for another entry. User can submit again or return to the main page.

Ex: ![Screenshot of successful match.](app/public/assets/images/successMatch.gif)

## Technologies

This was built using JavaScript, jQuery, HTML, CSS, Bootstrap and Express for the server connection. Upon cloning this repo, you will need to install the NPM package for Express and ensure CDN for Bootstrap and jQuery are up to date.

