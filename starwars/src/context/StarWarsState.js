import React, { useReducer} from 'react';
import StarWarsContext from '../context/StarWarsContext';
import StarWarsReducer from '../context/StarWarsReducer';
import { GET_INFO} from '../type';
import clienteAxios from 'axios';


const StarWarsState = (props) => {
  const initialState = {
    starwars: [],
  };

  const [state, dispatch] = useReducer(StarWarsReducer, initialState);
  const getInfo= async () => {
    try {
      const result = await clienteAxios.get('https://swapi.dev/api/people/');
      dispatch({
        type: GET_INFO,
        payload: result.data,
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StarWarsContext.Provider
      value={{
        starwars: state.starwars,
        getInfo,
      }}
    >
      {props.children}
    </StarWarsContext.Provider>
  );
};
export default StarWarsState;
