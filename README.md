![Mental Minds Hero JPG](/Readme_Resources/Hero_Image_Resource.png)
<h1 align="center">Mental Mind</h1>

<div align="center"> 
<a target="_blank" href="https://meganotton.github.io/Mental_Health_Website/"> | Live Link Here | </a>
<a target="_blank" href="https://github.com/users/MeganOtton/projects/2"> | Project Board | </a>
</div align="center"> 

<h1 align="center"> Introduction: </h1>


<p>
Mental Minds is my first assessed portfolio project developed as part of the Code Institute Full Stack Software Developer Bootcamp, consisting of learning outcomes to utilise HTML5, CSS3 & Bootstrap in order to fulfil the necessary requirements for the brief provided about Mental Health.

The live project can found here: <a target="_blank" href="https://meganotton.github.io/Mental_Health_Website/">Link Here</a>
</p>

## Project Outline

Mental Minds is a fictional organisation dedicated to bringing awareness to mental health, with a primary focus of spotting the signs and symptoms of mental health struggles and what can be done to improve mental health.
The page developed as part of this project documents the organisation's resources and information whilst offering support and contact options for guidance.

#### Key Objectives
 - A clear and easy to navigate website,
 - Positive and uplifting messages to encourage users to seek help or read the resources,
 - Responsive design that works effectively on all web sizes,
 - Color and imagery that matches the theme of the website and is calming for the user,

## UX Design

### User Stories

As a website visitor, I want an easy-to-navigate multi-page layout, so that I can quickly find different sections such as articles, resources, and the contact page.

As a person who needs help, I want an easy-to-navigate page, so that I can quickly find ways to get help.

As a person struggling with insomnia, I want to find sleep tips and tools, so I can improve my sleep patterns and overall health.

As a user experiencing a mental health crisis, I want to quickly find emergency contact information and resources, so I can get immediate help when needed.

As a user curious about mental health, I want to read information on various mental health topics, so I can stay informed and improve my well-being.

### Color Design

Color selection is a important part to any design, however with the nature of the project this consideration is even greater due to the needs of the end user and the potential for negatively impacting their well-being. Colors have connotations to various emotions and using 'calming' colours has been linked to a more stable mental state. I chose a series of light purples which are quite soothing and plain enough not to overstimulate the users eyes. 

### Fonts

Fonts was another thing to consider when deciding this website, the emotions i convey to the user is really important. 

Lemon was used for the logo and brand name, it is a creative and calming font that makes the brand look more approachable and less like an organisation.

Zain was used for the other elements it is also a calming font and very easy to read. 

## Wireframes

These wireframes have been created using Balsamiq to define the key feature layout to guide the user experience design as well as blocking out the rough color pallete to identify any key issues. I will be utilising Bootstrap's framework to help blockout the website key elements. 
#### Index Page

![Index Wireframe](/Readme_Resources/Index%20Wireframe.png)

#### Resources Page

![Resources Wireframe](/Readme_Resources/Resources%20Wireframe.png)

#### Contact Us Page

![Contact Us Wireframe](/Readme_Resources/Contact%20Us%20Wireframe.png)

## Imagery


The imagery is an important way to get infromation across to the users, with that in mind i came up with a specific criteria the images had to fulfill:

- Clear in the meaning of the image,
- Promote Inclusivity,
- Appropriate for the intended audience (16 and above),
- Avoid triggering or sensitive imagery or themes.

Due to the sensitive nature of the project and mental health in itself, i want to avoid any images that can be harmful to the user. The images and icons that are going to be used need to be calm and cheerful, with that in mind i will not be using any realistic imagery when it comes to mental health issues. I will be using more illustrated imagery to represent the issues to be more sensitive to the users. 

Image Credit: Adobe Stock Images

## Features

#### General Features
In order to fulfil the criteria set out by the user stories, listed above, the page will consist of various sectioned information each with a variety of links, resources or other elements that contribute to the website fullfilling its goals and aiding the user.

Upon coding the projectand implementing the Bootstrap Framework the features and design shifted slightly from the original wireframe.
Some key adjustments are as follow:
- On the Index I decided against using images of peoples face when it came to the carousel, i decided to use inspirational/uplifting messages insetad of reviews or personal stories to make the website seem more confidential,
- On the index instead of adding a margin around the website i scaled the website accordingly,
- I removed the bottom image from the resource page on higher resolutions, this was due to the new scale not needing a filler image at the bottom,
- For the same reason above i removed the filler image on the contact page.

#### Navigation and Hero Section
I used Copilot to generate a Bootstrap 5 Navbar, I then customised it fully with CSS.

![image](/Readme_Resources/Hero_Nav.png)

#### CARDS
This was another Bootstrap 5 element that was generated through Copilot, I have done less customization of these elements as i did with the navbar element, i just changed the outline, text size and colour as well as adding a simple box shadow.

![image](/Readme_Resources/Cards.png)

#### CAROUSEL & FOOTER
The carousel and footer was done in the same fashion as above, however these elements especially the carousel had a lot more edits done to them. When it came to the icons for the carousel i didnt want them to be white nor black adn did not know SCSS or how to use Sass variables so i had to manually using an inverter CSS code line to get the perfect shade of purple which took a lot of time and experimentation. I had to get a more experienced coders help to achieve this credit to Charlie Flockhart.

![image](/Readme_Resources/Car_Footer.png)

## Responsive Design


I will be utilising the Bootstrap Framework allowed for an implementation that is responsive without the need for additional CSS or media queries, in most instances.

With some experimentation I have been able to create a page that is fully responsive to modern standards with the use of media queries.

Below is an image of my website from different devices.

![image](/Readme_Resources/Responsive.png)

Improvements:

I would like to have a smoother website between the different media Queries as some of the more unique resolutions can be mismatched to other resolutions.


## AI Implementation

#### Use Cases and Reflections:
#### - Code Creation
  - I used AI like copilot to help implement and generate elements from bootstrap without having to source it from bootstraps website. This sped up creation time exponentially in a project where time is limited.
  - I used it to generate code that i had not yet learned ie the Java Script element for the NavBar.

#### - Debugging 
  - I used Copilot to fix or change elements of my own code to make them more aligned with the websites vision. This was a useful time saving technique which if nto used could have taken hours of research to fix/edit manually.

#### - Overall Impact
  - AI tools streamlined repetive tasks and basic jobs, enabling me to focus on the more complex elements of the development. (Same goes for the Bootstrap elements)

## Testing and QA

| Location               | Feature         | Expected Outcome                                                | Pass/Fail |
| ---------------------- | --------------- | --------------------------------------------------------------- | --------- |
| Index / Nav Bar        | Contact Button  | Takes User to contact-us.html page                              | Pass      |
| Index / Nav Bar        | Resources Button  | Takes User to resource.html page                              | Pass      |
| Index / Nav Bar        | Home Button       | Takes User to index.html page                                 | Pass      |
| Index / Nav Bar        | Brand Name Button | Takes User to index.html page                                 | Pass      |
| Index / Contact Us     | Previous Button | Takes User to contact-us.html page                              | Pass      |
| Index / Carousel       | Next Button     | Take User to next Card Carousel                                 | Pass      |
| Index / Carousel       | Previous Button | Take User to previous Card Carousel                             | Pass      |
| Index / Carousel Messages       | Auto Scroll     | Automatically Scrolls after 6 Seconds to the next Card Carousel | Pass      |
| Contact-Us / Form      | Form Inputs     | Allows User to input data into the form                         | Pass      |
| Contact-Us / Form      | Send Message Button     | Allows User to send the data inputted to the website    | Pass      |
| Thank You / Button      | Return to Home Button     | Allows User to go back to home page   | Pass      |


- Conducted multiple tests on Emulated Mobile, Ipad and Laptop and Desktop. Along with a Manual Test On  Mobile, Ipad and Desktop, testing all webpages and links are working correctly.
  
     - Mobile Iphone 16 +
     - Mobile Iphone 13 Mini
     - IPad Pro 2024
     - 1080P (Desktop Most Common Displays)
     - 1440P (Desktop Most Common Displays)
     - 4K (Desktop Most Common Displays)
 
     - Google Chrome
     - Safari
     - Opera GX
     - Microsoft Edge

- All information can be read clearly and the page is responsive.

### Bugs

- No Bugs Found

### Validation

Index Page:

![image](/Readme_Resources/Index%20Checker.png)
Error warning for a H1 element used.


Resource Page:

![image](/Readme_Resources/resource_checker.png)


Contact Page:

![image](/Readme_Resources/Contact%20Checker.png)


Thank you Page:

![image](/Readme_Resources/Thank%20you%20Checker.png)


CSS:

![image](/Readme_Resources/CSS%20Checker.png)


JS:

![image](/Readme_Resources/JS%20Checker.png)

Lighthouse:

Mobile
![image](/Readme_Resources/Lighthouse_Index_Mobile.png)

Desktop
![image](/Readme_Resources/Lighthouse_Index_Desktop.png)


