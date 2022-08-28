import { React, useEffect, useState } from "react";
import "./Random.scss";
import { APIKEY } from "../../APIKEY";

const Random = () => {
  const [random, setRandom] = useState([]);

  const getRandomRecipes = async () => {
    const getData = localStorage.getItem("random");

    if (getData) {
      setRandom(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=4`
      );
      if (resp.ok) {
        const data = await resp.json();

        setRandom(data.recipes);
        localStorage.setItem("random", JSON.stringify(data.recipes));
        console.log(data.recipes);
      }
    }
  };
  useEffect(() => {
    getRandomRecipes();
  }, []);
  return (
    <div className="random">
      <div className="random__container">
        {random.map((random) => (
          <div className="random" key={random.id}>
            <h1 className="random__title">{random.title}</h1>
            <img
              src={random.image}
              alt={random.title}
              className="random__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random;
