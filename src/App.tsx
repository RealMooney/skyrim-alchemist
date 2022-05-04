import React from "react";
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
    //TODO Filter by effect
    //TODO What can be created from selected effects    
}
  const data = Ingredients.ingredients.map((item,key)  => <ImportIngredients props={item} key={key}></ImportIngredients>)
  return (
    <div className="App">
      <header className="App-header">
        <CContainer xl>
          <CRow>
          {data}          
          </CRow>
          </CContainer>
      </header>
    </div>
  );
}

export default App;
