import React, { Component, useState } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";

// async callback from its properties
export default class DataArea extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { first: 'tom', last: 'smith', Image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg', Phone: '41025555', Email: 'tom@tom.com', DOB: '06/03/1950' },
                { first: 'Sam', last: 'Wutang', Image: 'tom.com', Phone: '214025555', Email: 'sam@tom.com', DOB: '07/04/1955' },
                { first: 'Sue', last: 'clark', Image: 'tom.com', Phone: '3015555', Email: 'sue@tom.com', DOB: '07/02/1956' },
            ],
            order: "descend",
            filteredUsers: [{}],
            headings: [
                { name: "Image", width: "10%" },
                { name: "Name", width: "10%" },
                { name: "Phone", width: "20%" },
                { name: "Email", width: "20%" },
                { name: "DOB", width: "10%" }
            ],

            handleSort: heading => {

                if (this.state.order === "descend") {
                    this.setState({
                        order: "ascend"
                    })
                } else {
                    this.setState({
                        order: "descend"
                    })
                }

                const compareFnc = (a, b) => {
                    if (this.state.order === "ascend") {
                        // account for missing values
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        // numerically
                        else if (heading === "name") {
                            return a[heading].first.localeCompare(b[heading].first);
                        } else {
                            return a[heading] - b[heading];
                        }
                    } else {
                        // account for missing values
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        // numerically
                        else if (heading === "name") {
                            return b[heading].first.localeCompare(a[heading].first);
                        } else {
                            return b[heading] - a[heading];
                        }
                    }

                }
                const sortedUsers = this.state.filteredUsers.sort(compareFnc);
                this.setState({ filteredUsers: sortedUsers });
            },
            handleSearchChange: event => {
                console.log(event.target.value);
                const filter = event.target.value;
                const filteredList = this.state.users.filter(item => {
                    // merge data together, then see if user input is anywhere inside
                    let values = Object.values(item)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState({ filteredUsers: filteredList });
            }
        };
    }

    componentDidMount() {
        // API.getUsers().then(results => {
        //     this.setState({
        //         users: results.data.results,
        //         filteredUsers: results.data.results
        //     });
        // });
    }

    render() {
        console.log('this is our state!!!!', this.state)

        return (
            <>
                <Nav handleSearchChange={this.state.handleSearchChange} />
                <div className="data-area">
                    <DataTable
                        headings={this.state.headings}
                        users={this.state.users}
                        handleSort={this.state.handleSort}
                    />
                </div>
            </>
        );
    }
}