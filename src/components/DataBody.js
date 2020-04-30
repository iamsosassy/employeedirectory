import React from "react";


// created data table for content
function DataBody({ users }) {
    console.log('this is our users in data body!!!', users)
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        //const formattedDate = [month, day, year].join("-");
        const formattedDate = '05/05/1995'
        return formattedDate;
    }

    const customStyles = {
        pic: {
            height: '100px'
        }
    }

    return (
        <tbody>
            {

                //users[0] !== undefined && users[0].name !== undefined ? (
                true === true ? (
                    users.map((singleUser) => {
                        console.log('we r looping !!!', singleUser)
                        return (
                            <tr>
                                <td data-th="Image" className="align-middle">
                                    <img
                                        src={singleUser.Image}
                                        alt={"profile image for " + singleUser.first + " " + singleUser.last}

                                        className="img-responsive"
                                        style={{ height: '100px' }}
                                    />
                                </td>
                                <td data-th="Name" className="name-cell align-middle">
                                    {singleUser.first} {singleUser.last}
                                </td>
                                <td data-th="Phone" className="align-middle">
                                    {singleUser.Phone}
                                </td>
                                <td data-th="Email" className="align-middle">
                                    <a href={"mailto:" + singleUser.Email} target="__blank">
                                        {singleUser.Email}
                                    </a>
                                </td>
                                <td data-th="DOB" className="align-middle">
                                    {singleUser.DOB}
                                </td>
                            </tr>
                        );
                    })
                ) : (
                        <></>
                    )}
        </tbody>
    );
}

export default DataBody;