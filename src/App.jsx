import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import setFoodId from "./components/Foodlist";
import FoodDetails from "./components/FoodDetails";
import InnerContainer from "./components/InnerContainer";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId]=useState("654959")
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
         <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer> 
      </Container>
    </div>
  );
}
export default App;
