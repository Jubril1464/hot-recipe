import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.scss'
import { APIKEY } from '../../APIKEY'

const Recipe = () => {
    const [details, setDetails] = useState({});
      const [activeTab, setActiveTab] = useState("instructions");

    const params = useParams();

    const fetchDetails = async () => {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${APIKEY}`
      );
      const data = await resp.json();
      return data;
    };
     useEffect(() => {
       let isMounted = true;

       fetchDetails().then((data) => {
         if (isMounted) setDetails(data);
       });
       return () => {
         isMounted = false;
       };
     },[params.id]);
  return (
    <div className="recipe__details">
      <div className="recipe__details--container">
        {/* <h2 className="recipe__details--title">{details.title}</h2> */}
        <div className="imageContainer">
          <img
            src={details.image}
            alt={details.title}
            className="recipe__details--image"
          />
        </div>
        <h2 className="recipe__details--title">{details.title}</h2>

        <div className="info">
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map(({ id, original }) => (
                <li key={id}>{original}</li>
              ))}
            </ul>
          )}

          {activeTab === "instructions" && (
            <div className='instructions'>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe