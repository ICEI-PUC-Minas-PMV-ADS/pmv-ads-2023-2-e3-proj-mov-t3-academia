import API from './webapi.services';
import {BASE_URL} from './urls';

export const getExerciciosTreinoB = async () => {
  try{
    return await API.get(`${BASE_URL}/660/exerciciosTreinoB`).then( 
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

export const insertExerciciosTreinoB = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/exerciciosTreinoB`, param).then( 
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

export const updateExerciciosTreinoB = async (param) => {
    try{
      return await API.put(`${BASE_URL}/660/exerciciosTreinoB/${param.id}`, param).then( 
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

  export const deleteExerciciosTreinoB = async (id) => {
    try {
      return await API.delete(`${BASE_URL}/660/exerciciosTreinoB/${id}`).then(
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