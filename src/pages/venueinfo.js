import * as React from "react"

//Components
import Layout from "../components/layout"
import Map from "../components/Map/map"

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } 

function VenueInfo () {
    return (
        <Layout>
            <Map location={location} zoomLevel={17} />
        </Layout>
    )
}

export default VenueInfo