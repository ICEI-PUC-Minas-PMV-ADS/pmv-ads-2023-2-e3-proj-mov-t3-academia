import React from 'react';

import {useUser} from '../contexts/UserContext';

import Main from './Main';
import Auth from './Auth';


const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed 
      ? <Auth />
      : <Main />
    }
    </>
  )
}

export default Route;