import React from 'react'
import CityCard from '../components/CityCard';


const FeaturedCities = (props) => (
    <>
     <div className="row">
        <div className="col-12">
        <h3>Featured Cities</h3>
        </div>
    </div>
    <div className="row">
        {props.citiesDummy.map(city =>
            <CityCard  key={city.id} city={city}/>
        )}
    </div>
    </>

)

export default FeaturedCities;