// import { useEffect, useState } from "react";
// import styles from "./fooddetails.module.css"
// import ItemList from "./components/ItemList"
// export default function FoodDetails({ foodId }) {
//   const [food, setFood] = useState({});
//   const [isLoading,setIsLoading]=useState(true)
//   const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
//   const API_KEY = "c1c37118b0cf433297a16015cf8a8ffe";
//   useEffect(() => {
//     async function fetchFood() {
//       const res = await fetch(`${URL}?apiKey=${API_KEY}`);
//       const data = await res.json();
//       console.log(data);
//       setFood(data);
//       setIsLoading(false)
//     }
//     fetchFood();
//   }, [foodId]);
// }
//   return (
//     <div>
//       <div className={styles.recipeCard}>
//         <h1 className={styles.recipeName}>{food.title}</h1>
//         <img className={styles.recipeImage} src={food.image} alt="" />
//         <div className={styles.recipeDetails}>
//           <span>
//             <strong>⏱️{food.readyInMinutes} Minutes</strong>
//           </span>
//           <span>
//             {food.vegetarian ? "Vegetarian 🥕" : " 🍖 Non-vegetarian"}
//           </span>
//           <span>
//             <strong>Serves {food.servings} 🧑‍🤝‍🧑</strong>
//           </span>
//         </div>
//         <div>
//           <span>{food.pricePerServing / 100} $ Per Serving</span>
//         </div>
//       </div>
//       <h2>Ingredients</h2>
//       <ItemList food={food} isLoading={isLoading}/>
//       <h2>Instructions</h2>
//       <div className={styles.recipeInstructions}>
//         <ol>
//         {isLoading? <p>Loading.....</p> :food.analyzedInstructions[0].steps.map((step) => (
//           <li>{step.step}</li>
//         )) }
//          </ol>
//       </div>
//     </div>
//   );

import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css"
// import ItemList from "./components/ItemList"
import ItemList from "./ItemList";


export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading,setIsLoading]=useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "17370891533c4196b54fbde243578391";
  
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false)
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            {food.vegetarian ? "Vegetarian 🥕" : " 🍖 Non-vegetarian"}
          </span>
          <span>
            <strong>Serves {food.servings} 🧑‍🤝‍🧑</strong>
          </span>
        </div>
        <div>
          <span>{food.pricePerServing / 100} $ Per Serving</span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading}/>
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? <p>Loading.....</p> : food.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
