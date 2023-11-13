import API from './webapi.services';
import {BASE_URL} from './urls';


export const getExerciciosTreinoA = async () => {
  try{
    return await API.get(`${BASE_URL}/660/exerciciosTreinoA`).then( 
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

export const insertExerciciosTreinoA = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/exerciciosTreinoA`, param).then( 
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

export const updateExerciciosTreinoA = async (param) => {
    try{
      return await API.put(`${BASE_URL}/660/exerciciosTreinoA/${param.id}`, param).then( 
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

  export const deleteExerciciosTreinoA = async (id) => {
    try {
      return await API.delete(`${BASE_URL}/660/exerciciosTreinoA/${id}`).then(
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