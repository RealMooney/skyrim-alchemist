import React, {useState} from "react";
import { CCard, CCardImage,CCardBody,CCardTitle,CButton,CListGroup,CListGroupItem, CCardHeader,CCol } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


interface IIngredients {
    effects?: string[];
    image?: string;
    value?: number;
    name: string;
    weight?: number;    
}

    

export default function({props}:{props:IIngredients}){
 const[selected, setSelect] = useState(0); 
 //TODO - Functional ADD and REMOVE   
return (
    <CCol>
<CCard 
textColor='dark'
className={`mb-3 border-dark`}
style={{ width: '16rem' }}>
  <CCardImage orientation="top" src={props.image}/>
  <CCardBody>
    <CCardTitle>{props.name}</CCardTitle>
    <CCardHeader >Effects:</CCardHeader>
    <CListGroup flush>
    <CListGroupItem>{props.effects![0]}</CListGroupItem>
    <CListGroupItem>{props.effects![1]}</CListGroupItem>
    <CListGroupItem>{props.effects![2]}</CListGroupItem>
    <CListGroupItem>{props.effects![3]}</CListGroupItem>
  </CListGroup>  
  <CButton onClick={() => setSelect(selected)}>{  selected? "Remove ingredient" : "Add ingredient" } </CButton>
  </CCardBody>
</CCard>
</CCol>
)

} 



