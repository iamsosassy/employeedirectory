import React, { Component, useState } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";

// async callback from its properties
export default class DataArea extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { first: 'Rza', last: 'Diggs', Image: 'https://vignette.wikia.nocookie.net/music/images/3/35/RZA.jpg/revision/latest?cb=20190426203932', Phone: '212-555-4321', Email: 'rza@wutangclan.com', DOB: '07/05/1969' },
                { first: 'Gza', last: 'Grice', Image: 'https://famebytes.com/wp-content/uploads/2018/10/GZA.png', Phone: '718-247-1818', Email: 'gza@wutangclan.com', DOB: '08/22/1966' },
                { first: 'Ghostface', last: 'Killa', Image: 'https://s3-us-west-2.amazonaws.com/paradigm-media-library/music_artists/ghostface-killah-20191016.jpg', Phone: '347-292-1736', Email: 'ghostfacekilla@wutangclan.com', DOB: '05/09/1970' },
                { first: 'Method', last: 'Man', Image: 'https://www.gstatic.com/tv/thumb/persons/158640/158640_v9_bc.jpg', Phone: '917-889-7299', Email: 'methodman@wutangclan.com', DOB: '03/01/1970' },
                { first: 'OlDirty', last: 'Bastard', Image: 'https://img.discogs.com/bKSwQGLDWYoKszERnA7-lAX2XTk=/600x800/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-39015-1525011317-4534.jpeg.jpg', Phone: '646-818-1950', Email: 'oldirtybastard@wutangclan.com', DOB: '11/15/1968' },
                { first: 'Raekwon', last: 'Woods', Image: 'https://www.independent.com/wp-content/uploads/2017/08/01/raekwon.jpg?resize=1200,630', Phone: '917-262-8858', Email: 'raekwon@wutangclan.com', DOB: '01/12/1970' },
                { first: 'Inspectah', last: 'Deck', Image: 'https://img.discogs.com/tMJNmw69u4wVogyHMPZfe3xdsj8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-68309-1534400906-2133.jpeg.jpg', Phone: '718-687-2929', Email: 'inspectahdeck@wutangclan.com', DOB: '07/06/1970' },
                { first: 'OlDirty', last: 'Bastard', Image: 'https://img.discogs.com/bKSwQGLDWYoKszERnA7-lAX2XTk=/600x800/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-39015-1525011317-4534.jpeg.jpg', Phone: '646-818-1950', Email: 'oldirtybastard@wutangclan.com', DOB: '11/15/1968' },
                { first: 'Master', last: 'Killa', Image: 'https://img.discogs.com/84qzeaJckzb4a7ypw4e9llVr2rM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-107494-1488108060-7325.jpeg.jpg', Phone: '347-656-9728', Email: 'mastakilla@wutangclan.com', DOB: '08/18/1969' },
                { first: 'Cappadonna', last: 'Hill', Image: 'https://secure.i.telegraph.co.uk/multimedia/archive/03326/wu_cappadonna_edit_3326935b.jpg', Phone: '212-999-1234', Email: 'cappadonna@wutangclan.com', DOB: '09/18/1969' },
                { first: 'U-God', last: 'Hawkins', Image: 'https://media.wnyc.org/i/800/0/c/85/1/lamont.jpg', Phone: '201-222-3999', Email: 'ugod@wutangclan.com', DOB: '11/10/1970' },
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