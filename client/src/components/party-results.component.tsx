import * as React from 'react';
import { ResultModel } from '../../../shared/models/result.model';
import { Table } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

export interface PartyResultsComponentProps {
    result: ResultModel;
}

export class PartyResultsComponent extends React.Component<PartyResultsComponentProps> {
    render() {
        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>שם</TableCell>
                    <TableCell>קולות</TableCell>
                    <TableCell>מנדטים מקולות</TableCell>
                    <TableCell>מנדטים מהסכמי עודפים</TableCell>
                    <TableCell>מנדטים מעודפים</TableCell>
                    <TableCell>סה"כ מנדטים</TableCell>
                    <TableCell>עלות מנדט</TableCell>
                    <TableCell>קולות לאיבוד מנדט</TableCell>
                    <TableCell>מרויחה מאיבוד מנדט</TableCell>
                    <TableCell>קולות לתוספת מנדט</TableCell>
                    <TableCell>מפסידה מרווח מנדט</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.result.parties.map(p =>
                    <TableRow key={p.name}>
                        <TableCell>{p.name}</TableCell>
                        <TableCell>{p.votes}</TableCell>
                        <TableCell>{p.seatsByVotes}</TableCell>
                        <TableCell>{p.seatsBySpareAgreement}</TableCell>
                        <TableCell>{p.seatsBySpare}</TableCell>
                        <TableCell>{p.seatsByVotes + p.seatsBySpareAgreement + p.seatsBySpare}</TableCell>
                        <TableCell>{p.seatCost}</TableCell>
                        <TableCell>{p.votesToLoseSeat}</TableCell>
                        <TableCell>{p.partyEarningSeat}</TableCell>
                        <TableCell>{p.votesToEarnSeat}</TableCell>
                        <TableCell>{p.partyLosingSeat}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    }
}
