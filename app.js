// recipes array of objects
const recipies = [
    {
        id:0,
        name: "Afang Soup",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/09/afang-soup-with-eba.jpg?w=750&ssl=1",
        directions: "Slice the onions and scotch bonnet peppers. Braise the goat meat with one onion, scotch bonnet peppers, 1 tsp bouillon, and 1 tsp salt on low-medium heat for 30 minutes, adding ½ cup of water halfway through. Keep the pot covered. Meanwhile, wash and chop the water leaf, removing tough stems, and roughly grind the afang leaves.Once the meat is tender, set it aside. Heat palm oil in a pot and sauté the remaining onion for 10 minutes. Add snails and clams, and sauté for another 5 minutes. Add the goat meat and reserved braising liquid, then 2 tsp bouillon, crayfish, and cayenne pepper. Stir in the water leaf until it wilts, then add the afang leaves. Add 1 cup of braising liquid, cover, and cook on low heat for 10 minutes. Adjust seasoning, let sit for 5 minutes, and serve hot.",
        category: "Soup",
        origin:"Nigeria",
        ingredients: ["2 lbs Water leaf or regular/Malabar spinach","57 g 2 oz dried Afang leaves ","3 lbs Goat meat cut into large bite size cubes","½ cup of cooked shelled Apple snails","½ cooked shelled Clams","½ cup palm oil","2 Red onions","2 Scotch bonnet peppers substitute with habanero peppers","4 tbsp Ground smoked dried shrimp aka crayfish","3 tsp Chicken Bullion","2 tbsp cayenne pepper/ crushed red pepper flakes optional","Salt to taste"],
        video: "https://www.youtube.com/embed/21nskCk7l-0",
        calories:"362kcal",
        description: "Afang soup, eaten by Efik and Ibibio people of Nigeria is a delicious stew made with Afang leaves and a leafy vegetable called waterleaf."

    },
    {
        id:1,
        name: "Nigerian Tomato Stew",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2018/09/Nigerian-tomato-stew-dished-and-ready.jpg?w=750&ssl=1",
        directions: "Blend tomatoes, one onion, bell peppers, scotch bonnet peppers, garlic, and ginger. Broil the braised lamb until browned. Cook the blended mixture in a pot on medium heat until it reduces by half. Slice another onion. Once the mixture is reduced, set it aside. In the same pot, heat oil and caramelize the sliced onion. Add the tomato paste and cook for 5 minutes. Add stock, bouillon, thyme, and curry powder. Cook on low heat for 10 minutes. Add the lamb, stir, and cook covered for 5 minutes. Adjust salt, cook for another 5 minutes, and serve.",
        category: "Stew",
        origin:"Nigeria",
        ingredients: [
            "2 lbs Braised ram meat chunks",
            "3.5 lbs Plum tomatoes (about 1570 grams)",
            "2 large Onions",
            "2 large Bell peppers",
            "4 Scotch bonnet peppers",
            "3 cloves Garlic",
            "Ginger small thumb size",
            "½ cup Flavorless oil (I used grape seed oil)",
            "1 ¾ cups Lamb stock (I used the liquid from braising the ram)",
            "1 tsp Curry powder",
            "2 tsp Dried thyme",
            "1 tsp Bouillon",
            "Salt (to taste)"
        ],
        video: "https://www.youtube.com/embed/FKYkDOG1GyY",
        calories:"353.4kcal",
        description: "This Nigerian red stew recipe features my favorite Nigerian tomato stew using farm raised ram meat which adds a distinct, delicious gamey flavor!"

    },
    {
        id:2,
        name: "Caribbean Curried Goat",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2018/03/curry-goat-07.jpg?w=750&ssl=1",
        directions: "Chop 1 onion, 1 scotch bonnet pepper, and 1 clove of garlic. Marinate the goat meat with the chopped ingredients, 2 tsp salt, ground allspice, and 2 tbsp curry powder. Refrigerate for at least 3 hours or overnight. Let the meat sit at room temperature for 30 minutes. Slice another onion and scotch bonnet pepper. Sauté them in oil on low-medium heat for 10 minutes. Add the marinated goat meat and 1 tbsp curry powder, sauté on high heat for 5 minutes. Reduce heat to low, add water to cover the meat halfway, cover, and simmer for 30 minutes. Taste and adjust seasoning, then add sugar. Cook covered for another 30 minutes until the meat is tender. Peel and cube potatoes. Add them to the pot, cook on medium heat for 10 minutes, then add coconut milk and simmer for another 10 minutes. Serve with boiled rice or roti.",
        category: "Sauce",
        origin:"Jamaica",
        ingredients: ["3 lbs chopped bone in goat meat", 
        "13.5 fl. oz coconut milk (about 1 can)", 
        "2 small red onions", 
        "2 medium size russet potatoes", 
        "2 scotch bonnet peppers", 
        "½ cup flavorless oil (I used canola oil)",
         "1 clove garlic", "3 tbsp Jamaican style curry powder", 
         "2 tsp sugar", 
         "1 tsp ground allspice"],
        video:"https://www.youtube.com/embed/W5Wcd3oeEyY",
        calories:"424.6kcal",
        description: "Jamaican curry goat is a finger licking, savory, comforting and flavorful curry that will deliver a major punch to your taste buds! It is usually eaten with rice and sometimes with a side of fried plantains and is one of the jamaican food staples you absolutely should not hesitate to try!"

    },
    {
        id:3,
        name: "Mixed Seafood Coconut Fried Rice",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2017/05/seafood-fried-rice.jpg?w=750&ssl=1",
        directions: "In a medium pot, boil jasmine rice in coconut milk with a teaspoon of salt and a stick of lemon grass on medium heat until just short of done. Set aside to cool completely. In a wok or large pan, heat 1 tablespoon of coconut oil and sauté onions, shrimp, and calamari for about 5 minutes until just cooked, then set aside. Add another tablespoon of coconut oil, turn heat to high, and toss in bell pepper slices and cooled jasmine rice (remove and discard the lemon grass). Stir-fry for 5 minutes, add bouillon and white pepper, and stir-fry for another 10 minutes. Add cooked shrimp, calamari, shallots, crab meat, green onions, basil, and lime leaf. Stir, taste for salt, adjust seasoning if needed, and stir-fry for 2 more minutes on high heat. Serve hot.",
        category: "Rice dish",
        origin:"Nigerian, Tropical",
        ingredients:[
            "1.5 cups Jasmine Rice",
            "2 cups coconut milk fresh if possible or canned if not",
            "8 oz crab meat",
            "270 g / 0.5 lb large deveined and shelled shrimp",
            "450 g/ 1 lb cleaned calamari",
            "3 shallots/ 1 red onion sliced",
            "4 stalks of green onions",
            "1 small or half of a large orange bell pepper, sliced (you may substitute with any color bell pepper you choose)",
            "2 tsp shrimp bouillon",
            "3 kaffir lime leaves",
            "1 small handful of clove basil aka scent leaves/ Thai basil",
            "2 tbsp coconut oil",
            "1 tsp white pepper",
            "Salt to taste",
          ],
        video: "https://www.youtube.com/embed/pdZF1YKmqaU",
        calories:"428.3kcal",
        description: "In this delicious mixed seafood coconut fried rice recipe I'll be showing how to cook coconut fried rice with a seafood medley featuring a mix of fresh crab meat, shrimp, calamari and fresh homemade coconut milk!"

    },
    {
        id:4,
        name: "Senegalese Sombi",
        image: "https://i0.wp.com/www.yummymedley.com/wp-content/uploads/2015/04/RicePudding1.jpg?resize=1080%2C1622&ssl=1",
        directions: "Boil the rice with two cups of water until soft. In a separate saucepan, bring coconut milk, coconut cream, and brown sugar to a gentle boil over low-medium heat, stirring continuously for 5 minutes until the sugar dissolves. Add the rice and salt, and continue cooking and stirring for 5 minutes. Chill in the refrigerator and serve with coconut chips on top.",
        category: "Dessert",
        origin:"Senegal",
        ingredients:[
            "1 cup medium grain rice",
            "2 cups water",
            "1 cup coconut milk",
            "1 cup coconut cream",
            "1/2 cup brown sugar",
            "1/4 tsp salt",
            "A handful of coconut chips"
        ],
        video: "https://www.youtube.com/embed/oWjVvxDYeUo",
        calories:"213kcal",
        description: "Sombi is a senegalese and very easy coconut rice pudding to make that can serve as a cool summertime dessert as well as a comforting cold weather treat."

    }

]


// DOM variable initilization
const recipeImg = document.querySelector('#recipe-img');
const mealTitle = document.getElementById('meal-name');
const mealInstructions = document.getElementById('instructions');
const video = document.getElementById('video');
const btn = document.getElementById('gen-btn');
const region = document.querySelector('.recipe-area');
const category = document.querySelector('.recipe-cat');
const ingredientsUl = document.querySelector('.ingredients-ul');
const calCount = document.querySelector('.cal-count');
const mealDesc = document.querySelector('.description');
const meal = document.querySelector('.main-section');

//variable for used to acess array via indexing
let currentItem  = 0;


// the update function that assign the values of the arrays object to DOM elements
function updateData(meal){
    let item = recipies[meal];
    recipeImg.src = item.image;
    mealTitle.textContent = item.name;
    mealInstructions.textContent = item.directions;
    region.textContent = item.origin;
    category.textContent = item.category;
    video.src = item.video;
    mealDesc.textContent = item.description;
    calCount.textContent = item.calories
    // accessing the condiments ingredients array in the recipies object
    let condiments = item.ingredients

    condiments.forEach(item => {
        let li = document.createElement("li");
        li.textContent=item;
        ingredientsUl.append(li);
        
    });
}


// event listener on the window object that is trigered when the webpage is loaded
// window.addEventListener('DOMContentLoaded',()=>{
//     // calling the upate function
//     updateData(currentItem);

// })

//event listen for the get recipe btn
btn.addEventListener('click',()=>{
    //select all the li's on the page
    const lis = document.querySelectorAll('li');
   //removes all the lis on the page
    lis.forEach(li => {
        li.remove()
   });
    
   //checks if the hide class is on the meal element if so then it removes it
   if(meal.classList.contains('hide')){
        meal.classList.remove('hide');
   }

   //genrate a random number between 0 and the length of the array
    currentItem = Math.floor(Math.random()* recipies.length);
   //randomly genrated number is then passed into the update function call to access the recipies array by its index.
    updateData(currentItem);

})