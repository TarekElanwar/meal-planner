

var recipes =[
  {
    title: "French Onion Soup",
    img:"./images/5.jpg",
    rating: 4.7,
    subtitle : 'Nice taste',
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter"
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    }
  },

  {
    title: "Chicken Alfredo Pasta",
     subtitle : ' taste and Enjoy',
    rating: 4.8,
    reviews: 421,
    img:"./images/2.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    }
  },

  {
    title: "Beef Tacos",
     subtitle : '  Enjoy and Enjoy ',
    rating: 4.2,
    reviews: 310,
    img:"./images/3.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    }
  },

  {
    title: "Vegetable Stir Fry",
     subtitle : '  Enjoy and tasteee ',
    rating: 4.6,
    reviews: 189,
    img:"/images/4.jpg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    }
  },

  {
    title: "Margherita Pizza",
     subtitle : '  tasteee ',
    rating: 4.9,
    reviews: 502,
    img:"/images/6.jpg",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    }
  }
];














function addproduct(params) {

     var i = Math.floor(Math.random() * recipes.length);


document.getElementById("tarek").innerHTML = `

               <div class="second2 container w-75">

            <div class="row ">

                <div class="inner col-md-5" id="">


                    <img class="" src=${recipes[i].img} alt="">

                              

                   

                        <div class="rating-badge">
                            ⭐${recipes[i].rating}  <span> 
                          ( ${recipes[i].reviews} reviews) </span>
                        </div>

                        <div class="info-box">
                            <div class="info-boxx">
                                <i class="fa-solid fa-clock"></i>
                                <p>Prep Time<br><strong>${recipes[i].prepTime}</strong></p>
                            </div>
                            <div>
                                <i class="fa-solid fa-fire"></i>
                                <p>Cook Time<br><strong>${recipes[i].cookTime}</strong></p>
                            </div>
                            <div>
                                <i class="fa-solid fa-users"></i>
                                <p>Servings<br><strong>${recipes[i].servings}</strong></p>
                            </div>

                               

                  
                        </div>








                </div>





                    <div class="col-md-7">  


                        
                        <div class="recipe-card">
                        <div class="tags">
                            <span class="tag green">${recipes[i].level}</span>
                            <span class="tag blue">${recipes[i].cuisine}</span>
                        </div>

                        <h1 class="title">${recipes[i].title}</h1>
                        <p class="subtitle">${recipes[i].subtitle}</p>

                        <div class="warning-box">
                            <span class="icoon"> <i class="fa-solid fa-triangle-exclamation text-danger "></i>  </span> 
                            <div class="text">
                            <h5>Extended Preparation Time</h5>
                            <p class="lead">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                            </div>
                        </div>

                        <div class="actions">
                            <button class="btn icon-btn"><i class="fa-solid fa-bookmark"></i></button>
                            <button class="btn icon-btn"><i class="fa-solid fa-share-nodes"></i></button>
                        </div>
                        </div>
                    

                        <!-- Tabs -->
                        <ul class="nav nav-tabs custom-tabs" id="myTab" role="tablist">

                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                            data-bs-target="#ingredients" type="button" role="tab">
                            <i class="fa-solid fa-list-ul"></i> Ingredients
                            </button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                            data-bs-target="#instructions" type="button" role="tab">
                            <i class="fa-solid fa-book"></i> Instructions
                            </button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab"
                            data-bs-target="#nutrition" type="button" role="tab">
                            <i class="fa-solid fa-utensils"></i> Nutrition
                            </button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="chefs-tab" data-bs-toggle="tab"
                            data-bs-target="#chefs" type="button" role="tab">
                            <i class="fa-solid fa-lightbulb"></i> Chef's Tips
                            </button>
                        </li>

                        </ul>

                        <!-- Tabs Content -->
                        <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active" id="ingredients" role="tabpanel">
                            <div class="ingredients-box"  >
                            
                            <ul id="ingredients-list"></ul>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="instructions" role="tabpanel">


                        

                            <div class="steps">

                                ${recipes[i].instruction}
                                  
                  

                                </div>


                          
                        </div>

                        <div class="tab-pane fade" id="nutrition" role="tabpanel">
                           
                                              <div class="nutri">
                                        <div class="icon calories">
                                        <i class="fa-solid fa-fire"></i>
                                        </div>
                                        <span class="label">Calories</span>
                                        <span class="value">${recipes[i].nutrition.calories}</span>
                                    </div>

                                    <div class="nutri">
                                        <div class="icon protein">
                                        <i class="fa-solid fa-dumbbell"></i>
                                        </div>
                                        <span class="label">Protein</span>
                                        <span class="value">${recipes[i].nutrition.protein}</span>
                                    </div>

                                    <div class="nutri">
                                        <div class="icon carbs">
                                        <i class="fa-solid fa-wheat-awn"></i>
                                        </div>
                                        <span class="label">Carbohydrates</span>
                                        <span class="value">${recipes[i].nutrition.carbs}</span>
                                    </div>

                                    <div class="nutri">
                                        <div class="icon fat">
                                        <i class="fa-solid fa-droplet"></i>
                                        </div>
                                        <span class="label">Fat</span>
                                        <span class="value">${recipes[i].nutrition.fat}</span>
                                    </div>

                                    <div class="nutri">
                                        <div class="icon fiber">
                                        <i class="fa-solid fa-seedling"></i>
                                        </div>
                                        <span class="label">Fiber</span>
                                        <span class="value">${recipes[i].nutrition.fiber}</span>
                                    </div>

                                    <div class="nutri">
                                        <div class="icon sodium">
                                        <i class="fa-solid fa-cube"></i>
                                        </div>
                                        <span class="label">Sodium</span>
                                        <span class="value">${recipes[i].nutrition.sodium}</span>
                                    </div>



                        </div>

                        <div class="tab-pane fade" id="chefs" role="tabpanel">
                            
                                    <div class="tip">
                                        <span class="line"></span>
                                        <div class="circle"><i class="fa-solid fa-check"></i></div>
                                        <p>Make bolognese sauce a day ahead for better flavor</p>
                                    </div>

                                    <div class="tip">
                                        <span class="line"></span>
                                        <div class="circle"><i class="fa-solid fa-check"></i></div>
                                        <p>Don't skip the resting time after baking</p>
                                    </div>

                                    <div class="tip">
                                        <span class="line"></span>
                                        <div class="circle"><i class="fa-solid fa-check"></i></div>
                                        <p>Use fresh pasta sheets for best texture</p>
                                    </div>

                                    <div class="tip">
                                        <span class="line"></span>
                                        <div class="circle"><i class="fa-solid fa-check"></i></div>
                                        <p>Freeze leftovers in individual portions</p>
                                    </div>



                        </div>

                        </div>
                            
                       
                           <button onclick="addproduct()" class="try-btn  ms-5 ">
                            <i class="fa-solid fa-rotate-right"></i>
                               Try Another Recipe
                                 </button>

                     






                    </div>


                           





                



                </div>





           










            </div>















`



                              var amg = ""

                              for ( var x = 0 ; x < recipes[i].ingredients.length ; x++) 
                              {

                                amg += 
                                    `
                                        <li><span class="number">${x + 1 }</span> 
                                 ${recipes[i].ingredients[x]}
                                
                                </li>

                      
                                    `

                                  document.getElementById("ingredients-list").innerHTML = amg


                              }


                           
                              

                              















}


  

     
     
     
    
  

