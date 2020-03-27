import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrips, deleteTrip, detailTrip, getTripDetail, setTrip } from '../../actions/trips';
import { push } from 'connected-react-router';
import { routes } from '../Router';


class ListTrips extends Component {
    componentDidMount() {
        if (this.props.getTrips) {
            this.props.getTrips()
        }
    }

    detailTrip = (trip) => {
        this.props.setTrip(trip)
        this.props.swipeScreen()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.trips.map(trip => {
                        return (<div> 
                            <li> {trip.name} </li> 
                            <button onClick={()=> this.props.deleteTrip(trip.id)} > Deletar </button>
                            <button onClick={() => this.detailTrip(trip)}> Detalhar </button>
                        </div>) 
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
    getTrips: () => dispatch(getTrips()),
    deleteTrip: (id) => dispatch(deleteTrip(id)),
    swipeScreen: (id) => dispatch(push(routes.detailtrip)),
    setTrip: (trip) => dispatch(setTrip(trip)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTrips)