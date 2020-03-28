import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrips, deleteTrip, setTrip } from '../../actions/trips';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled from 'styled-components';

const Container = styled.div`
    overflow: scroll;
`

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
`

const ColumnButtons = styled.div`
    display: grid;
    grid-template-columns: 10vh 10vh;
    grid-gap: 2px;
    justify-content: center;
`

const Button = styled.button`
    background-color: ${props => props.eBotaoApagar ? '##fef0f0' : '#ecf5ff'};
    color: ${props => props.eBotaoApagar ? '#f56c6c' : '#409eff'};
    border-radius: 4px;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid #d9ecff;
`

const ColumnsNameGrid = styled.div`
    font-weight: bold;
    text-align: center;
`

const RowsGrid = styled.div`
    text-align: center;
`

class ListTrips extends Component {
    componentDidMount() {
        if (!window.localStorage.getItem('token')) {
            alert('Para acessar essa página é necessário está logado!')
            this.props.redirectLogin()
        }
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
            <Container>
                <ContainerGrid>
                    <ColumnsNameGrid> Nome da Viagem </ColumnsNameGrid>
                    <ColumnsNameGrid> Planeta </ColumnsNameGrid>
                    <ColumnsNameGrid> Duração em Dias </ColumnsNameGrid>
                    <ColumnsNameGrid> Data </ColumnsNameGrid>
                    <ColumnsNameGrid> Ações </ColumnsNameGrid>
                </ContainerGrid>
                {this.props.trips.map(trip => {
                    return(
                        <ContainerGrid>
                            <RowsGrid>
                                {trip.name}
                            </RowsGrid>
                            <RowsGrid>
                                {trip.planet}
                            </RowsGrid>
                            <RowsGrid>
                                {trip.durationInDays}
                            </RowsGrid>
                            <RowsGrid>
                                {trip.date}
                            </RowsGrid>
                            <ColumnButtons>
                                <Button eBotaoApagar={true} onClick={ () => this.props.deleteTrip(trip.id) }> Apagar  </Button>
                                <Button eBotaoApagar={false} onClick={ () => this.detailTrip(trip) }> Detalhar </Button>    
                            </ColumnButtons>
                        </ContainerGrid>
                    )
                })}
            </Container>
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
    setTrip: (trip) => dispatch(setTrip(trip)),
    redirectLogin: () => dispatch(push(routes.root)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTrips)