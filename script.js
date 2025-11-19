// Data array
const recipes = [
    { 
        name: "Nasi Lemak",
        description: "Often called Malaysia’s national dish, nasi lemak (literally “rich rice”) was once a farmer’s breakfast — rice cooked in coconut milk and wrapped in banana leaves for easy transport to the fields. During British rule, as labor systems diversified, the dish evolved to include fried anchovies, sambal, and eggs, reflecting the mingling of Malay, Chinese, and Indian influences under colonial trade networks. What began as sustenance became a shared national symbol.",
        imagePath: "images/nasilemak.png",
        fullRecipe: "images/recipes/nasilemak-full.png"
    },
    {
        name: "Roti Canai with Dahl",
        description: "Roti canai traces its roots to Indian Muslim laborers who migrated to British Malaya in the 19th century to work on railways and plantations. Adapted from the South Indian parotta, it became softer, flakier, and uniquely Malaysian over time. Served with dhal — a lentil curry rooted in Tamil cooking — the dish speaks to colonial-era migration and the hybrid cuisines born in Malaya’s bustling port towns.",
        imagePath: "images/roticanai.png",
        fullRecipe: "images/recipes/roticanai-full.png"
    },

    {
        name: "Asam Laksa",
        description: "This tangy, fish-based noodle soup carries echoes of Penang’s complex colonial history. The asam (tamarind) base reflects Malay and Nyonya culinary traditions, while Chinese immigrants added rice noodles and condiments. Penang, once a British trading post, became a melting pot where these influences collided — making asam laksa a testament to how migration and colonization reshaped regional tastes.",
        imagePath: "images/asamlaksa.png",
        fullRecipe: "images/recipes/asamlaksa-full.png"
    },
     {
        name: "Satay",
        description: "Though now seen as quintessentially Malay, satay originated from Javanese street vendors in colonial-era port cities who adapted Middle Eastern kebabs to local ingredients. Under Dutch and later British influence, the dish spread across Southeast Asia through trade and labor routes. Its skewered simplicity — grilled meat over charcoal — reflects both resourcefulness and cultural exchange across the Malay Archipelago.",
        imagePath: "images/satay.png",
        fullRecipe: "images/recipes/satay-full.png"
    },
     {
        name: "Hainanese Chicken Rice",
        description: "A dish born from migration and adaptation: Hainanese immigrants brought their Wenchang chicken rice to British Malaya in the late 19th century. Many worked as cooks for colonial officers, adapting the recipe to local palates with chili sauce and cucumber. The result was a subtle blend of Chinese technique, colonial kitchens, and Malayan ingredients — comfort food with a layered colonial past.",
        imagePath: "images/chickenrice.png",
        fullRecipe: "images/recipes/chickenrice-full.png"
    },
];

// Button data array 
const buttons = ["Recipe", "Video Tutorials", "Learn More", "Add to Recipe Diary"];


// Get the container
const container = document.getElementById('recipe-container');

// Loop through data and create elements 
recipes.forEach(recipe => {

  // OUTER FLIP WRAPPER
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const flipInner = document.createElement("div");
  flipInner.classList.add("flip-card-inner");

  // FRONT SIDE
  const front = document.createElement("div");
  front.classList.add("flip-card-front");

  // Create other elements
  const card = document.createElement('article');
  card.classList.add('item'); // adds CSS class
  const title = document.createElement('h2');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const desc = document.createElement('p');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

 
  // Set recipe content 
title.textContent = recipe.name;
desc.textContent = recipe.description;
img.src = recipe.imagePath;

// Append to structure
 figure.appendChild(img);

 // Loop through button data and create elements
  buttons.forEach(label => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = label; // adds visible text to button

    // If the user clicks "Add to Recipe Diary"
  if (label === "Add to Recipe Diary") {
    btn.addEventListener('click', () => {
      e.stopPropagation(); // prevent flipping when clicking button
      addToDiary(recipe);
    });
  }
    // Append buttons to structure
    li.appendChild(btn);  // put button inside li
    ul.appendChild(li);   // put each li into ul
  });

    nav.appendChild(ul); // add the ul (grouped list of buttons) into nav

    // Assemble recipe card 
     card.appendChild(title);   // add recipe name
  card.appendChild(figure);  // add image
  card.appendChild(desc);    // add description
  card.appendChild(nav);     // add the button nav section

   front.appendChild(card); // add card to page


// BACK SIDE
  const back = document.createElement("div");
  back.classList.add("flip-card-back");

  // Because full recipe is an image
  const backImg = document.createElement("img");
  backImg.src = recipe.fullRecipe;
  backImg.classList.add("full-recipe-img");

  back.appendChild(backImg);

   // Flip functionality
  flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
  });

  // Assemble
  flipInner.appendChild(front);
  flipInner.appendChild(back);
  flipCard.appendChild(flipInner);
  container.appendChild(flipCard);
  });
 



function addToDiary(recipe) {
  const diaryContainer = document.getElementById('diary-container');

  // Create a smaller version of the recipe card
  const diaryCard = document.createElement('article');
  diaryCard.classList.add('diary-card');

  const title = document.createElement('h3');
  title.textContent = recipe.name;

  const img = document.createElement('img');
  img.src = recipe.imagePath;
  img.alt = recipe.name;

  // let users remove items later
  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener('click', () => diaryContainer.removeChild(diaryCard));

  diaryCard.appendChild(title);
  diaryCard.appendChild(img);
  diaryCard.appendChild(removeBtn);

  diaryContainer.appendChild(diaryCard);
  location.hash = '#diary';

}



