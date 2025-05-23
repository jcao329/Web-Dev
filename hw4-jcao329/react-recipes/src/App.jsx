import { useState } from 'react'
import './App.css'
import Recipe from './Recipe.jsx'
import RecipeDetails from './RecipeDetails.jsx';



function App() {

    const [bookmarks, setBookmarks] = useState([])
    const [data, setData] = useState([])
    const [recipe, setRecipeDetails] = useState(null)
    const [view, setView] = useState("home")

    function goBackHome(e) { 
        setView("home")
    }

    function handleShowBookmarks(e) {
        e.preventDefault();
        setView("bookmarks")
        setData(bookmarks)
    }


    function handleSearchSubmit(formData) {
        setView("search")
        const keyword = formData.get("keyword")
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + keyword
        fetch(url).then(response => response.json()).then(data => setData(data.meals.slice(0,5)))
        setRecipeDetails(null)
    }

    function handleShowDetails(recipe) { 
        setView("details")
        setRecipeDetails(recipe)
    }
    
    function handleBookmarkRecipe(recipe) {
         if (!bookmarks.some(b => b.idMeal === recipe.idMeal)) {
         setBookmarks([...bookmarks, recipe]);
        }
    }

    function handleBackToSearch(e) { 
        console.log(e)
        setRecipeDetails(null)
        setView("search")
    }

    const recipes = data.map(recipe_data => <Recipe key={recipe_data.idMeal} 
                                                    title={recipe_data.strMeal} 
                                                    thumbnail={recipe_data.strMealThumb} 
                                                    showDetails = {() =>handleShowDetails(recipe_data)}/>)
    
                                                
    let content 
    if (view == "details") {
        content = <RecipeDetails recipe={recipe} 
                                 bookmark = {() => handleBookmarkRecipe(recipe)} 
                                 onBack={handleBackToSearch}
                                 bookmarks = {bookmarks}/>;

    } else if (view == "search") {
    content = recipes;
    } else if (view == "bookmarks") { 
        content = <div>
                    <h2>Bookmarks</h2>
                    {bookmarks.length > 0 ? (recipes) : (<p>No bookmarks saved yet.</p>)}
                </div>
       
    } else { 
        content = <div>
            <p>Welcome to the Recipe Finder! Search and bookmark recipes.</p>
        </div>
    }

    return (
        <>
        <header>
            <nav>
            <h1 onClick={goBackHome}>RecipeFinder</h1>
            <img src="/src/assets/bookmark.svg" alt="Bookmark icon" onClick={handleShowBookmarks}/>
            </nav>
            <form action = {handleSearchSubmit}>
            <input autoFocus type="search" name="keyword" placeholder="Search by recipe name..." className="p-2 rounded-pill w-100 my-4" />
            </form>
        </header>

        <main>
            {content}
        </main>
        </>
    )
}



export default App;