import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory for Wu-Tang Clan Entertainment</h1>
                <p>Click to filter by heading or use the search box to narrow your results.</p>
            </div>
        )
    }
}