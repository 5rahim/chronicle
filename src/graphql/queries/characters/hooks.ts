import { useQuery }             from '@apollo/react-hooks'
import { GET_CHARACTERS_QUERY } from './query'

export const useCharacters = () => {
   const {loading, error, data} = useQuery(GET_CHARACTERS_QUERY);
   
   if (!loading && data.characters) {
      return {
         loading,
         error,
         data: {
            characters: data.characters
         }
      };
   }
   
   return {
      loading,
      error,
      data
   };
};
