import gql from 'graphql-tag'

export const GET_CHARACTERS_QUERY = gql`
    query getCharacters {
  characters {
    id
    name
    last_name
    importance
    gender
    age
    pictures
    sexual_orientation
    traits
    ethnicity {
      name
    }
  }
}
`
