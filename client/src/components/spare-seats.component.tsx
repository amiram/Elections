import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableRow, Theme } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { ResultModel } from '../../../shared/models/result.model';
import { ElectionModel } from '../../../shared/models/election.model';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Switch from '@material-ui/core/Switch';
import { SpareAgreementModel } from '../../../shared/models/spare-agreement.model';

export interface SpareSeatsComponentProps {
    election: ElectionModel;
    result: ResultModel;
    onSpareAgreementStateChanged(spareAgreement: SpareAgreementModel, disabled: boolean): void;
}

interface SpareSeatsComponentState {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 650,
        },
        tableRow: {
            disabled: {
                textDecoration: 'line-through'
            }
        }
    }),
);

export class SpareSeatsComponent extends React.Component<SpareSeatsComponentProps, SpareSeatsComponentState> {
    constructor(props: SpareSeatsComponentProps) {
        super(props);
        this.state = {};
    }

    render() {
        const disabled = {
            textDecoration: 'line-through'
        };

        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>מפלגה 1</TableCell>
                    <TableCell>מפלגה 2</TableCell>
                    <TableCell>קולות</TableCell>
                    <TableCell>מנדטים מקולות</TableCell>
                    <TableCell>מנדטים מעודפים</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.result.spareAgreements.map(sa =>
                    <TableRow style={sa.disabled ? disabled : {}}>
                        <TableCell>
                            <Switch
                                checked={!sa.disabled}
                                onChange={event => this.props.onSpareAgreementStateChanged(sa, !event.target.checked)}
                            ></Switch>
                        </TableCell>
                        <TableCell>
                            <Select value={sa.party1}>
                                {this.props.election.parties
                                    .filter(p => p.name !== sa.party2)
                                    .map(p =>
                                        <MenuItem value={p.name}>{p.name}</MenuItem>
                                    )}
                            </Select>
                        </TableCell>
                        <TableCell>
                            <Select value={sa.party2}>
                                {this.props.election.parties
                                    .filter(p => p.name !== sa.party1)
                                    .map(p =>
                                        <MenuItem value={p.name}>{p.name}</MenuItem>
                                    )}
                            </Select>
                        </TableCell>
                        <TableCell>{sa.votes}</TableCell>
                        <TableCell>{sa.seatsByVotes}</TableCell>
                        <TableCell>{sa.spareSeats}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    }
}
