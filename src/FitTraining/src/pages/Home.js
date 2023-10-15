import React, {useState} from 'react';
import { Text } from 'react-native-paper';


import Header from '../components/Header';
import Body from '../components/Body';
import Container from '../components/Container';



const Home = () => {
  const [index, setIndex] = useState(0);
  


  return (

    <Container>
      <Body>
        <Header/>
 
  </Body>
  </Container>
  );
};



export default Home;