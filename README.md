# fall2025-qadira-razman

## What's On Your Plate? — Navigation Prototype

Option Chosen:
Option B: Single-Page Sections (Show/Hide)

I chose the single-page “show/hide” approach because my project’s content (Home, Recipes, and Diary) is closely related. This structure allows users to stay on one page while navigating between sections, making the experience smoother and faster without full page reloads. It also keeps my code simpler, since I only need one HTML file.

### Sections:
Home – Introduces the site and invites users to start exploring recipes via a search bar. 
Recipes – Displays recipe results in card form with images, descriptions, and buttons.
Diary – Shows saved or favorite recipes added by the user as well as reflections and other prompts users can respond to. 

### Navigation & Anticipated challenges: 
Ideally, users will be able to search for a recipe in the home section via the search bar. This will then take them to the recipe results section. 
- I am not sure how difficult this will be... Perhaps it might be easier to simply guide users to all recipes however I want to give them a sense of agency in picking what recipes to cook and I want to figure out how to filter recipes. 
- I want users to also be able to go to the diary section from the results page (i.e add a recipe to their diary straight away from the recipe cards in the recipe resuls section).
- Ideally, I also want users to access the recipe results section via the search bar and not a button at a top. Perhaps the button at the top could lead them to all recipes but I want to guide users to recipes based off their filters or key words that they searched. 
- Issue: for some reason, my diary section kept appearing below the home section on my Live Server, I asked chatbot for help and it added a section of code in my HTML however I don't quite understand it. 


## What's On Your Plate? — Data with Java Script 

The data I have decided to display are the various recipe cards users will be able to see. 

### What I did 
- My JavaScript creates the HTML by creating arrays for the recipes and the buttons in each recipe card. 
- I used the looping tool to display each recipe card. 
- I did some styling in css to ensure the images were all the same size and that the recipe cards hard a small border and background color to distinguish it from the rest of the page. 

### Challenges and Next Steps 
I asked ChatGPT to help me with the array and loop section for my buttons. I wanted each recipe card to have its own image, description, and then navigation system. I understood how to create the button data array and then loop through that data however, I was a little confused with the final append section here as it wasn't quite clear to me how exactly it works, I hope to clarify these issues during office hours. 

## What's On Your Plate? — Animations with CSS

### What I did 
- Made some layout changes; added a search bar to the home page (doesn't work yet) and changed the flexbox layout of the recipe page. 
- Added a grow and change color animation on the front page when users hover over the title.
- Added a movement and color change animation to each recipe card when hovered over.
- I made the 'Add to diary' button work! So users can now save recipes and view them in their diary page.

### Challenges and Next Steps 
- I wanted to add a cool flip box animation I found online but found it was difficult to implement with my current looping in JS. This is something I would like to spend a little more time trying to do. Ideally I want the front of each recipe card to look as is but have the recipe on the backside for users to see when they click on the card.
- I am also unsure how much work it will be to allow users to search up recipes by name or ingredient so I might have to think about how else I want my website to flow.