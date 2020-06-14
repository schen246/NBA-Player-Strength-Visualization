import React, {Component} from 'react';

import nba from '../nba-client';
import Profile from './Profile';
import DataViewContainer from './DataViewContainer';

class Main extends Component {
    constructor() {
        console.log(1);
        super();
        this.state = {
            key: {},
            playerId: 201939,
            a: 1        
        }
    }

    componentDidMount() {
        console.log(7);
        window.nba = nba;
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId})
            .then((info) => {
                console.log(info);
                const mydata = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(mydata);
                this.setState({ key: mydata });
            })
    }

    render() {
        console.log(2);
        return (
            <div className="main">
                <Profile one={this.state.key} />
                <DataViewContainer playerId={this.state.playerId} data={this.state.a} />
            </div>
        );
    }
}

export default Main;