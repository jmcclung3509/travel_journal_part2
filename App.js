//1. import data.js
//2. map over data to create <Card />

import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.js"

export default function App(){
    // console.log(data)
    const cardData = data.map((item)=> {
        console.log(item)
        key = item.title
        title = item.title
        location= item.location
        map = item.googleMapsUrl
        start = item.startDate
        end = item.endDate
        description = item.description
        image = item.imageUrl
    })
    
    return(
        <div>
            <Header />
           {cardData}
        </div>
    )
}