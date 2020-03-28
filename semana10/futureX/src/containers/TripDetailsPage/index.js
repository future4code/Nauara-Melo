import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTripDetail, decideCandidate } from '../../actions/trips'
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Container = styled.div`
    display: grid;
    grid-template-areas: "container-trip container-candidates";
`

const ContainerCandidates = styled.div`
    grid-area: container-candidates;
    border: solid black 1pt;
`

const ContainerTripDetail = styled.div`
    grid-area: container-trip;
    border: solid black 1pt;
`
const SpanStyled = styled.span`
    font-size: 3vh;
    display: block;
`

const AreaCandidate = styled.div`
    margin-top: 5px;
    border: solid black 1pt;
`

class DetailTrip extends Component {
    componentDidMount() {
        if (!window.localStorage.getItem('token')) {
            alert('Para acessar essa página é necessário está logado!')
            this.props.redirectLogin()
        }

        if (this.props.getTripDetail) {
            this.props.getTripDetail(this.props.trip.id)
        }
    }

    render() {
        return (
            <Container>
                <ContainerTripDetail>
                    <h1> Detalhes da Viagem </h1>
                    <p> Nome da Viagem: {this.props.trip.name}</p>
                    <p> Planeta: {this.props.trip.planet}</p>
                    <p> Duração (em dias): {this.props.trip.durationInDays}</p>
                    <p> Data: {this.props.trip.date}</p>
                    <p> Descrição da Viagem: {this.props.trip.description}</p>
                </ContainerTripDetail>
                <ContainerCandidates>
                    <h1> Lista de Candidatos </h1>
                    {this.props.trip.candidates && this.props.trip.candidates.map(candidate => {
                        return (
                            <AreaCandidate>
                                <SpanStyled>
                                    Nome: {candidate.name}
                                </SpanStyled>
                                <SpanStyled>
                                    Idade: {candidate.age}
                                </SpanStyled>
                                <SpanStyled>
                                    Descrição: {candidate.applicationText}
                                </SpanStyled>
                                <SpanStyled>
                                    Profissão: {candidate.profession}
                                </SpanStyled>
                                <SpanStyled>
                                    País: {candidate.country}
                                </SpanStyled>
                                <Button
                                    type="button"
                                    color="primary"
                                    onClick={() => this.props.decideCandidate(this.props.trip.id, candidate.id)}
                                >
                                    Aprovar Candidato
                                </Button>
                            </AreaCandidate>
                        )
                    })}
                </ContainerCandidates>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    trip: state.trips.tripDetailed
})

const mapDispatchToProps = dispatch => ({
    getTripDetail: (id) => dispatch(getTripDetail(id)),
    decideCandidate: (idTrip, idCandidate) => dispatch(decideCandidate(idTrip, idCandidate)),
    redirectLogin: () => dispatch(push(routes.root)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailTrip)