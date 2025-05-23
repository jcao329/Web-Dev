export default function RecipeDetails(props) { 

    const isBookmarked = props.bookmarks.some(b => b.idMeal === props.recipe.idMeal);
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        const ingredient = props.recipe[`strIngredient${i}`];
        const measure = props.recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`.trim());
        }
    }


    return (
    <div className="recipe-detail p-4">
        <button onClick={props.onBack} className='btn btn-secondary mb-3' >← Back to search results</button>

        <h2>{props.recipe.strMeal}</h2>
        <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal} className="img-fluid rounded mb-3" />
        
        <button onClick = {() => props.bookmark(props.recipe)} type="button" className={`btn d-flex align-items-center gap-2 mb-4 ${isBookmarked ? 'btn-primary' : 'btn-outline-primary'}`}>
             <img src="/src/assets/bookmark.svg" alt="Bookmark icon" width="20" height="20"/>
             {isBookmarked ? 'Bookmarked' : 'Save to Bookmarks'}
        </button>
            
        <h4>Ingredients</h4>
        <ul>
            {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
            ))}
        </ul>

        <h4 className="mt-3">Instructions</h4>
        <p style={{ whiteSpace: "pre-line" }}>{props.recipe.strInstructions}</p>
    </div>
  )

}