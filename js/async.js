const search = async () => {
    document.getElementById("loading").style.display = "block"
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;
    searchField.value = '';


    if (searchFieldText == '') {
        const container = document.getElementById("food-details");
        container.textContent = ''
        const p = document.createElement("p");
        p.classList.add("text-danger")
        p.innerText = "please enter some text before search"
        container.appendChild(p)
        document.getElementById("loading").style.display = "none"


    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`

        try {
            const res = await fetch(url);
            const data = await res.json();
            displayMeal(data.meals)
        } catch (error) {
            console.log(error)
        }
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayMeal(data.meals))
    }


}

const displayMeal = (meals) => {
    document.getElementById("loading").style.display = "none"

    const result = document.getElementById("result");
    result.textContent = '';
    const container = document.getElementById("food-details");
    container.textContent = ''
    if (meals == null) {


        const p = document.createElement("p");
        p.innerText = "Search Result  Not Found"
        container.appendChild(p)
        document.getElementById("loading").style.display = "none"


    }
    meals.forEach(meal => {

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

const mealDetails = async (meals) => {
    document.getElementById("loading").style.display = "none"

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals)
    } catch (error) {
        console.log(error)
    }

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals))

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