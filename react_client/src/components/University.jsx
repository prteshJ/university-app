import React from "react";
import Button from "./Button";

const University = ({university, handleRemoveUniversity}) => {
    return (
        <li className="list-group-item d-flex align-items-baseline list-unstyled">
            <label htmlFor={"Id" + university.id}>
                Name: {university.name} &nbsp;
                Country: {university.country} &nbsp;
                Alpha Two Code: {university.alpha_two_code} &nbsp;
                Domain: {university.domain} &nbsp;
                Web Page: {university.web_page}
            </label>
            <div className = "input-group-append ml-auto mr-3">
                <Button className="btn btn-danger ml-auto"
                        onClick={() => handleRemoveUniversity(university)}
                >
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default University;
