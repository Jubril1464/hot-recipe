import { useState, useEffect,useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Searched.scss'

const Searched = () => {
    const [searchedRecipe, setSearchRecipe] = useState([])
    const [blur, setBlur] = useState(true);
    
    const param = useParams()
   let  REACT_APP_RECIPE_API_KEY = "eab71f0e42cb4b79b29a0ac214d577c3";

    const getSearchedRecipes = async (search) => {
        setBlur(true)
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=eab71f0e42cb4b79b29a0ac214d577c3&query=${search}`
        );
        const data = await res.json();
        return data.results


    }
    useEffect(() => {
    console.log('run');
        let isMounted = true;
        getSearchedRecipes(param.search).then((data) => {
            if(isMounted) setSearchRecipe(data)
        })
        return () => {
            isMounted = false
        }
    }, [param.search])
    useLayoutEffect(() => {
        setBlur(false)
    })
  return (
    <div className={`searchedRecipe ${blur ? 'blur' : ''}`}>
      {searchedRecipe.map(({ title, id, image }) => (
        <div className="recipeCard" key={id}>
          <img src={image} alt={title} />
          <h4>{title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Searched