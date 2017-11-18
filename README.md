
## The Andela Developer Challenge

**What?**
This app will help you accept applications to use your center / facilities, and will either decline events when the proposed day is already taken, or suggest an available day.

# EventManager

# Description
Given you manage an events center, this app will help you accept applications to use your center / facilities, and will either decline events when the proposed day is already taken, or suggest an available day


### OVERVIEW
**How?**
This project is broken down into challenges and completion of all phases would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (front-end and back-end) JS application.

* Challenge 1*: UI Templates
* Challenge 2*: Setup Server-Side & Create API Endpoints
* Challenge 3*: Secure The API, Integrate A Database	
* Challenge 4*: Implement Front-end Using React / Redux.

** This document will always be updated after completion of each challenge**

##### Folder Structure
* EventsManager
	* client
	* server
	* template

# Challenge 1 : UI Templates
The static files are hosted on GitHub Pages, from a separate repository.
**Link to the templates : https://anuoluwa.github.io/EventManager/index.html**

###### Prerequisites
HTML,CSS and Bootstrap 4(CDN)

All files for this challenge are in the template folder.

The UI elements were created using these stories:

* User signup and signin pages.
* A page where an authenticated user can add a new event.
* A page, section or view where an authenticated user can 
	* Modify the event he/she added
	* Delete the event he/she added
* A page where an admin can add a new center
* A page, section or view where an admin can modify the details of a center
* A page showing the details of a center and the events slated for that center



##### Description

As a requirement Bootstrap 4 in implementing the mockup pages, these distinct folders; the html files for both user and admin are in the root of template folder, and the css and img folder hold files for styles and image respectively.
You can see each page by accessing each by hitting each html files, also you can navigate gracefully from page to page, with these steps below:

###### Navigation
*This is implemented based on above mentioned user stories in ascending order*
* Click on the *index.html* file  ** The user sign up page doubles as the home page**
* Click on **Submit button or Signin on nav bar**  this takes to you to the next page
* On sign in page hit **signin button** on the form there you have a page where user can add events.
* Then click the **submit button** there you have the page where user can view added events, modify and delete.
* Hit the **Signout** link on nav bar this returns the homepage. 
* On home/signup page, hit the **admin** link on navbar this takes you to a different page where admin users can add center.
* You can hit the **Submit** button to see other pages.
* This returns a page where admin can view, modify and remove centers.
* Now,to view the detail page where you can see a **center and events** related to it, **Click on the Banquet Center card on the page** the first card from left.
**Other event item cards are not linked to any page**

Thank you.
