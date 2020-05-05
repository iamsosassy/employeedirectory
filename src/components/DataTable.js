import React from "react";
import DataBody from "./DataBody";

// created group header content in an HTML table.
function DataTable(props) {
    // console.log('this is our props in data table!!', props)
    return (
        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {props.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        props.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <DataBody users={props.users} />
            </table>
        </div>
    );
}

export default DataTable;