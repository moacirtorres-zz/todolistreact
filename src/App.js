import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator'



const Container = styled.div`
width: 100%;
height: 100vh;
background: #ffdb58;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Wrapper = styled.div`
display: flex;
`; 

const Input = styled.input`
width: 400px;
height: 30px;
display: inline-block;
margin: 10px;
`;

const Button = styled.button`
width: 100%;
line-height: 50px;
margin-top: 10px;
border: none;
color: white;
background: #ffdb58;
font-size: 20px;
border-radius: 5px;
border: 3px solid white;

`;

const List = styled.div`
width: 400px;
height: 400px;
background: white;
margin-top: 20px;
border: 1px solid black;
border-radius: 10px;
`;


const ListItem = styled.li`
border-bottom: 2px solid grey;
font-size: 20px;
color: black;
padding: 10px;
list-style: none;

`;


const App = () => {
  
const [ item, setItem ] = useState('');

const [ secondItem, setSecondItem ] = useState('');

const [ list, setList ] = useState([]);

const handleSubmit = () => {
  if (validator.isEmail(item) && !validator.isEmpty(secondItem)) {
  setList([...list, item, secondItem]);
  setItem('');
  setSecondItem('');
  }
  else {
  alert("Preencha os dados")
  }
 
};


return (
<Container>
<h1>TO DO LIST</h1>
  <div>
  <Wrapper>
    <Input value={item} onChange={e => { setItem(e.target.value)}}></Input>
  </Wrapper>
  <Wrapper>
    <Input value={secondItem} onChange={e => { setSecondItem(e.target.value)}}></Input>
  </Wrapper>
  <Button onClick={() => handleSubmit()}>Add</Button>
  </div>
  <List>
    {list.map((listItem) =>  
      <ListItem> {listItem} </ListItem>
    )}
    
  </List>
</Container>
)





}; 

export default App;
