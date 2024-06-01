import { useEffect, useState } from "react";
import styles from "./search.module.css"
//here we use the concept of the Useeffect hook
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "c1c37118b0cf433297a16015cf8a8ffe";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]); //in this array we pass the query because it iterates the function when something is happen in the search bar
  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="search....."
      ></input>
    </div>
  );
}
