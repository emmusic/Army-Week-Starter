import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

const Imgquery = () => {
    const data = useStaticQuery(graphql`{
        allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
              relativePath
            }
          }
        }
      }`);
      return data.allFile.edges
}

export default Imgquery