import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTripDetail, decideCandidate } from '../../actions/trips'

class DetailTrip extends Component {
    componentDidMount() {
        if (this.props.getTripDetail) {
            this.props.getTripDetail(this.props.trip.id)
        }
    }

    render() {
        const { trip } = this.props
        console.log(trip)
        return (

            <div>
                <div> 
                    <p> Nome: {this.props.trip.name}</p>
                    <p> Planeta: {this.props.trip.planet}</p>
                    <p> Duração: {this.props.trip.durationInDays}</p>
                    <p> {this.props.trip.date}</p>
                    <p> {this.props.trip.description}</p>
                    <ul>
                        {this.props.trip.candidates && this.props.trip.candidates.map(candidate => {
                            return ( 
                                <div>
                                    <li> {candidate.name} </li>
                                    <li> {candidate.age}</li>
                                    <button onClick={() => this.props.decideCandidate(this.props.trip.id, candidate.id)}> teste </button>
                                </div>
                                
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trip: state.trips.tripDetailed
})

const mapDispatchToProps = dispatch => ({
    getTripDetail: (id) => dispatch(getTripDetail(id)),
    decideCandidate: (idTrip, idCandidate) => dispatch(decideCandidate(idTrip, idCandidate))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailTrip)