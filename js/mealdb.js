 const search = () => {
     const searchField = document.getElementById("search-field");
     const searchFieldText = searchField.value;
     searchField.value = '';
     if (searchFieldText == '') {
         const container = document.getElementById("food-details");
         container.textContent=''
         const p = document.createElement("p");
         p.classList.add("text-danger")
         p.innerText = "please enter some text before search"
         container.appendChild(p)

     } else {
         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`
         fetch(url)
             .then(res => res.json())
             .then(data => displayMeal(data.meals))
     }


 }

 const displayMeal = (meals) => {
     const result = document.getElementById("result");
     result.textContent = '';
    //  console.log(meals.length)
//  if(meals.length===0){
//         // const container = document.getElementById("food-details");
//         // container.textContent=''
//         // const p = document.createElement("p");
//         // p.classList.add("text-danger")
//         // p.innerText = "Not found"
//         // container.appendChild(p)
//         console.log("not found")
//      }  
     meals.forEach(meal => {

// console.log(meal)
        
         const div = document.createElement("div");
         div.classList.add("col");
         div.innerHTML = `
       <div onclick="mealDetails('${meal.idMeal}')" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text" > ${meal.strInstructions.slice(0,120)} <abbr title="${meal.strInstructions}">Full Details</abbr> </p>
            </div>
       </div>
        `

         result.appendChild(div)

         // console.log(meal)
     })
 }

 const mealDetails = (meals) => {
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
     fetch(url)
         .then(res => res.json())
         .then(data => displayMealDetails(data.meals))

 }

 const displayMealDetails = (data) => {
     const foodDetails = document.getElementById("food-details");
     foodDetails.textContent = '';
     data.forEach(d => {
         const div = document.createElement("div");
         div.classList.add("card")
         div.innerHTML = `
            <img  src="${d.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body">
                <h5 class="card-title">${d.strMeal}</h5>
                <p class="card-text" > ${d.strInstructions.slice(0,120)} <abbr title="${d.strInstructions}">Full Details</abbr> </p>
                <a href="${d.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
            `
         foodDetails.appendChild(div)
         // console.log(d)
     })
 }