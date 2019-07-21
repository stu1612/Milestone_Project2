# Milestone Project 2

* This Project is for users who are looking to find out more information about upcoming major festivals across the world.  This is a site which provides instant information to the user based on their music preference.

# User Stories

  - As a user of this site, I want to be able to clearly see the categories of musical festivals that i can search for, and instantly see some information which i can then investigate further.
  - As a user, i want the informationn from the site to be accessible on smaller screen resolutions so that i can discuss ideas/planning with friends.
  - As a user, I would expect to camp at a festival, but i would like to have a sense of location of where the festival is so that i can check near by travel landmarks such as airports/bus and train stations so that i can plan my routes.
  - As a user, I want the information to be displayed in a simple and easy way.  It is more important that I can see the advertised events based on what I am looking for or interested in and can then start thinking about planning my trip.

### Features

* Feature 1 - when the page loads, the user is directed to click (select) the categry or genre of music they are interested in / rock, pop or electronic
* Feature 2 - after pressed event, 4 festival choices based on the music genre will be displayed with title, locaiton, image and a link.  The link will load to that particular festival in a new window.
* Feature 3 - the user can select the other music genres and see other festivals based on that musical genre selection.
* Feature 4 - at the bottom of the page is a map with tab marking the locations of the festival.  The user will be encouraged to zoom in on the map so start investigating the area and check near by transport links.

### Features left to implement
* Feature 1 - based on the latitude and longitude values of the festival map locations, a positive feature would be to search for closest transport links and provide a link/notification in the information text of the festivals to give clear and instant feedback to the user to help with their planning.


### Technologies Used
* HTML/CSS - used for basic set up of site
* Bootstrap - with the HTML/CSS, Bootstrap was used to support the site being responsive on all devices
* JavaScript - project uses JS to send data from data file to index.html 
* JQuery - project uses JQuery to simplify DOM manipulation
* Google Maps - Clustering Maps API used to link latitiude and longitude positions of festival locations

### Testing
### Database - 
* originally the plan was to source a festival API which could provide information for my dataset.  However, I was unable to source this data and so I created a CSV file where I inputted data sourced from google search engine on festivals.
* The CSV file was meant to be converted into a JSON file, but I encountered various errors as I didnt have the skill set to effectively catch the data.
* Therefore, the data was created as a seperate JS file into object arrays
### Festival Filtering - 
* The aim of the project is for the user to select a music genre and then see the data - so in terms of the JS functionality the first testing was to test the information being returned when the event handler was clicked.
* When testing - i had problems with sourcing the image and url content - this was because when the event listener was activated the getElementById was sourcing innerHTML and not src / href
### Site responsiveness - 
* Bootstrap was used - and in partiuclar areas it helped with keeping the button nav section displaying correctly when the screen resolution decreases.
### Google Maps - 
* When the page loaded, google maps would appear but then disappear.  During the testing i chnages the meta name information in the head tag - <user-scalable=no"> which worked
### Other functionality testing
* during the project, regular tests were observed on click events / site responsiveness / and other observations which differed from the wireframes.  
### Overview of testing performance
* The aim of the site is to provide quick access to the user when wanting to look at upcoming festival events. The flow is so that when the page loads, the user knows to select a button to see festival events and navigate between the music genres.  The user can also see the map location of these events and source near by landmarks and transport links to support planning purposes.  The user can also clear the content.  The site fulffils these requirments.  As the screen resolution changes the information remains the same but is displayed centrally so that the content does not clutter the users visual experience.  In smaller screen resolutions, where there were onclick/mouseenter event handlers for desktop viewing - these were removed and text was displayed as block so that important content for the user was not lost.
### Deployment
* This project was created locally from the AWS Cloud 9 terminal which was then hosted to Github. File set up was created from AWS - github repository was created Milestone-Project2 
 [https://stu1612.github.io/Milestone_Project2/] The code written in AWS should not be any different from the code presented in Github.

### Credits

* Google Maps Developers - Google map api was downloaded and the provided content was deployed to the site
* Stack Overflow 
* Unsplash.com - images were taken form this site for the festival 
* w3schools
* MDN

### Media
* Credits to the following images taken from unsplash
Photo by Eric Ward on Unsplash
Photo by Stephen Arnold on Unsplash
Photo by Karina Carvalho on Unsplash
Photo by Yvette de Wit on Unsplash
Photo by Luuk Wouters on Unsplash
Photo by Alexandre St-Louis on Unsplash
Photo by Corey Agopian on Unsplash
Photo by Markus Spiske on Unsplash
Photo by Nqobile Vundla on Unsplash
Photo by Chinh Le Duc on Unsplash
Photo by Ezra Comeau-Jeffrey on Unsplash
Photo by Matty Adame on Unsplash
Photo by Krists Luhaers on Unsplash



