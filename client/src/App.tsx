import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParamsComponent } from './components/params.component';
import Container from '@material-ui/core/Container';
import { ElectionModel } from '../../shared/models/election.model';
import { SpareSeatsComponent } from './components/spare-seats.component';
import { ResultModel } from '../../shared/models/result.model';
import { SpareAgreementModel } from '../../shared/models/spare-agreement.model';
import { PartyResultsComponent } from './components/party-results.component';

export interface AppProps {
    election: ElectionModel;
    result: ResultModel;
}

interface AppState {
    election: ElectionModel;
    result: ResultModel;
}

export class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            election: props.election,
            result: props.result
        };
    }

    onSpareAgreementStateChanged = (spareAgreement: SpareAgreementModel, disabled: boolean) => {
        this.setState({
            result: {
                ...this.state.result,
                spareAgreements: [
                    ...this.state.result.spareAgreements.filter(sa => sa.party1 !== spareAgreement.party1 && sa.party2 != spareAgreement.party2),
                    {
                        ...spareAgreement,
                        disabled
                    }
                ]
            }
        });
    };

    render() {
        return (

            <Container>
                <ParamsComponent
                    election={this.state.election}
                    result={this.state.result}
                ></ParamsComponent>
                <SpareSeatsComponent
                    election={this.state.election}
                    result={this.state.result}
                    onSpareAgreementStateChanged={this.onSpareAgreementStateChanged}
                >
                </SpareSeatsComponent>
                <PartyResultsComponent
                    result={this.state.result}>

                </PartyResultsComponent>
            </Container>

        );
    };

}
