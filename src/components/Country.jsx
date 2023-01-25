import React, { Component } from 'react';

class Country extends Component {
    // country = { }
    // medalCount = { }

    state = {
        name: 'United States',
        gold: 0,
    }

    handleIncrement = () => {
        // console.log(this.state.gold);
        this.setState({ gold: this.state.gold+1});
    }

    // 4 elements
    // div element that contains
    //     a div element used to display countries name
    //     div element used to display gold medal countries
    //     button element to increment gold medal count
    render() {
        return (
            <div>
                <div className="Country">
                    { this.state.name}
                </div>
                <div>
                    Gold Medals: { this.state.gold }
                </div>
                <button onClick={ this.handleIncrement}>Add Gold Medal</button>
            </div>
        );
    }
}

export default Country