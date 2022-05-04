import { useEffect, useState } from "react";
import "./App.css";
import Ingredients from "./data/alchemy.json";
import ImportIngredients from "./functions/ImportIngredients";
import { CContainer, CRow, CCol } from "@coreui/react";


function App() {

  interface IIngredients {
    effects?: string[];
    image?: string;
    value?: number;
    name: string;
    weight?: number;
    
    //TODO What can be created from selected ingredients    
}
  
  const[effects, setEffects] = useState<JSX.Element[]>([]);
  useEffect(()=>
  setEffects(Ingredients.effects.map((item,key)=> <option key={key} value={item}>{item}</option>))  
  )

  //OLD cards
  //const data = Ingredients.ingredients.map((item,key)  => <ImportIngredients props={item} key={key}></ImportIngredients>)

  //TODO Filter by effect - somewhat complete
  const [selectedIngredients, setSelectedIngredients] = useState<IIngredients[]>([]);
  function changeIngredients(value : string) {    
    setSelectedIngredients([]);    
    Ingredients.ingredients.filter(item => item.effects.map(itemForeach => {
        if (itemForeach === value) {
            setSelectedIngredients(oldArr => [...oldArr, item]);
        }
    } ));
}


  return (
    <div className="App">
      <header className="App-header">
        <select onChange={(e) => changeIngredients(e.target.value)}>
          <option></option>            
          {effects}
        </select>
        <CContainer xl>
          <CRow>
          {selectedIngredients.map((item, key) => <ImportIngredients props ={item} key={key}></ImportIngredients>)}         
          </CRow>
          </CContainer>
      </header>
    </div>
  );
}

export default App;
