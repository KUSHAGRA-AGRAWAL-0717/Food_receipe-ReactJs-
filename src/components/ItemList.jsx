// import Item from "./Item"
// export default function ItemList({ food,isLoading }) {
//   return (
//     <div>
//         {isLoading? <p>Loading....</p>:(food.extendedIngredients.map((Item) => (<Item item={Item}/>)
//       ))}
//     </div>
//   );
// }
import SingleItem from "./Item"; // Renamed imported component to avoid naming conflict

export default function ItemList({ food, isLoading }){
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <SingleItem key={item.id} item={item} /> // Changed variable name to avoid conflict
        ))
      )}
    </div>
  );
}
