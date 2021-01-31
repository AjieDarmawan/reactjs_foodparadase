import React from 'react'
import { Link } from 'react-router-dom'
import RatingLabel from '../components/RatingLabel'

const RestaurantCard = props => (
    
  <>
  
    <div className="col-6" style={{ marginBottom: 20 }}>
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="col-3">
                <img className="img-responsive" src={props.restorant.thumb} alt="" style={{ borderRadius: 5, width: 100 }} ></img>
                </div>
                <div className="col-9">
                <h4 className="text-success" style={{ fontWeight: 800 }}>{props.restorant.name}</h4>
                <h6>{props.restorant.location.locality}</h6>
                <h6 className="text-muted">{props.restorant.location.address}</h6>
                </div>
            </div>
            </div>
            <div className="card-body">
            <table className="table">
                <tbody>
                <tr>
                    <td>Rating</td>
                    <td>
                            <RatingLabel
                             labelColor={props.restorant.user_rating.rating_color}
                             text={`${props.restorant.user_rating.aggregate_rating} (${props.restorant.user_rating.rating_text})`} 
                            />
                    </td>
                </tr>
                <tr>
                    <td>Cuisines</td>
                    <td>
                    {props.restorant.cuisines}
                    </td>
                </tr>
                <tr>
                    <td>Cost for two</td>
                    <td>
                    {props.restorant.currency + ' ' + props.restorant.average_cost_for_two}
                    </td>
                </tr>
                </tbody>
            </table>

            </div>
            <div className="card-footer">
            <Link to={`/restorant/${props.restorant.id}`} style={{ textDecoration: 'none' }}>
                <button type="button" className="btn btn-outline-success btn-block">
                View restorant Details
                </button>
            </Link>
            </div>
        </div>
        </div>
  </>
)

export default RestaurantCard
