import request, { gql } from 'graphql-request'

export const getCarList = async() => {
    const query = gql`
    query MyQuery {
        carLists {
          createdAt
          gearBox
          publishedAt
          price
          name
          brand
          id
          seats
          image {
            url
          }
          updatedAt
        }
      }      
    `
    const result = await request("https://api-ca-central-1.hygraph.com/v2/cluz6oxvm0zyo08w4tvsoxf52/master", query)
    return result
}