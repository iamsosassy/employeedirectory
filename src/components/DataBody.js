
import React, { Component } from 'react';

// created data for content
function DataBody({ users }) {
    // console.log('this is our users in data body!!!', users)



    const customStyles = {
        pic: {
            height: '100px'
        }
    }

    return (
        <tbody>
            {
                true === true ?
                    (

                        users.map((singleUser, i) => {
                            //console.log('we r looping !!!', singleUser)
                            return (
                                <tr key={i}>
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