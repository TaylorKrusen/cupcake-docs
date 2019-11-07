import { useStaticQuery, graphql } from 'gatsby'

export const useCustomQuery = () => {
  try {
    const data = useStaticQuery(graphql`
      query {
        allStoneTypesJson {
          edges {
            node {
              all_stone_types {
                GetMetadataArg {
                  parameter
                  type
                  description
                  kind
                }
              }
            }
          }
        }
        doczDb {
          db
          id
        }
      }      
    `)

    // console.log(data.allStoneTypesJson.edges[0].node)
    const dataBlob = {
      "doczData": JSON.parse(data.doczDb.db),
      "stoneTypes": data.allStoneTypesJson.edges[0].node
    }
    // return JSON.parse(data.doczDb.db)
    return dataBlob
  } catch (err) {
    console.error(err)
    console.error('Error when parsing docz database')
    return {}
  }
}