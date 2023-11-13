import API from './webapi.services';
import {BASE_URL} from './urls';

export const getExerciciosTreinoC = async () => {
  try{
    return await API.get(`${BASE_URL}/660/exerciciosTreinoC`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertExerciciosTreinoC = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/exerciciosTreinoC`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateExerciciosTreinoC = async (param) => {
    try{
      return await API.put(`${BASE_URL}/660/exerciciosTreinoC/${param.id}`, param).then( 
        response => {
          return response.data;
        },
        error =>{
          console.log(error);
          return  null;
        }
      );
    }catch(error){
      console.log(error);
      return null;
    }
  }

  export const deleteExerciciosTreinoC = async (id) => {
    try {
      return await API.delete(`${BASE_URL}/660/exerciciosTreinoC/${id}`).then(
        response => {
          return response.data;
        },
        error => {
          console.log(error);
          return null;
        }
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  };