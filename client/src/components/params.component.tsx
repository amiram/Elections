import * as React from 'react';
import { ElectionModel } from '../../../shared/models/election.model';
import TextField from '@material-ui/core/TextField';
import { ResultModel } from '../../../shared/models/result.model';

export interface ParamsComponentProps {
    election: ElectionModel;
    result: ResultModel;
}

interface ParamsComponentState {
    blockPercent: number;
    blockPercentInVotes: number;
}

export class ParamsComponent extends React.Component<ParamsComponentProps, ParamsComponentState> {
    constructor(props: ParamsComponentProps) {
        super(props);
        this.state = {
            blockPercent: props.election.blockPercent,
            blockPercentInVotes: this.getBlockPercentInVotes(props.election.blockPercent, props.result.votes)
        };
    }

    getBlockPercentInVotes(blockPercent: number, votes: number) {
        return votes * (blockPercent / 100);
    }

    private onBlockPercentChanged(value: number) {
        this.setState({
            blockPercent: value,
            blockPercentInVotes: this.getBlockPercentInVotes(value, this.props.result.votes)
        });
    }

    render() {
        return <div>
            <div>
                סה"כ קולות:{this.props.result.votes}
            </div>
            <div>אחוז החסימה:
                <TextField
                    type="number"
                    value={this.state.blockPercent}
                onChange={event => this.onBlockPercentChanged(+event.target.value)}/>
            </div>
            <div>
                אחוז החסימה בקולות:
                {this.state.blockPercentInVotes}
            </div>
            <div>
                קולות מעל אחוז החסימה
                {this.props.result.aboveBlockPercentVotes}
            </div>
            <div>
                מודד כללי
                {this.props.result.generalMeasure}
            </div>
            <div>
                מנדטים לפני חלוקת עודפים
                {this.props.result.seatsBeforeSpare}
            </div>
            <div>
                סה"כ מנדטים
                {this.props.result.totalSeats}
            </div>
            <div>
                מנדטים עודפים
                {this.props.result.totalSeats - this.props.result.seatsBeforeSpare}
            </div>
        </div>;
    }

}
