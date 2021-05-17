import React, {Component} from "react";
import Button from "./Button";

export default class UpdateUniversity extends Component {
    state = {
        id: "",
        alpha_two_code: "",
        country: "",
        domain: "",
        name: "",
        web_page: ""
    };

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    };

    handleButtonClick = () => {
        this.props.handleUpdateUniversity(this.state);
        this.setState({
            alpha_two_code: "", country: "", domain: "",
            name: "", web_page: ""
        });
    };

    handleEnterKeyDown = event => {
        if (event.keyCode === 13) {
            return this.handleButtonClick();
        }
    };

    render() {
        return (
            <div className="input-group m-2">
                    {this.props.universities.map(university => (
                        <div className="input-group m-2">
                        ID: <input
                            type="text"
                            className="form-control"
                            placeholder="ID"
                            name="id"
                            defaultValue={university.id}
                            onBlur={this.handleChange}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEnterKeyDown}
                        />
                        Name: <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            defaultValue={university.name}
                            onBlur={this.handleChange}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEnterKeyDown}
                        />
                        Country: <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            name="country"
                            defaultValue={university.country}
                            onBlur={this.handleChange}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEnterKeyDown}
                        />
                        Alpha two code: <input
                            type="text"
                            className="form-control"
                            placeholder="Alpha two code"
                            name="alpha_two_code"
                            defaultValue={university.alpha_two_code}
                            onBlur={this.handleChange}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEnterKeyDown}
                        />
                        Domain: <input
                            type="text"
                            className="form-control"
                            placeholder="Domain"
                            name="domain"
                            defaultValue={university.domain}
                            onBlur={this.handleChange}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEnterKeyDown}
                        />
                        Web page: <input
                            type="text"
                            className="form-control"
                            placeholder="Web page"
                            name="web_page"
                            defaultValue={university.web_page}
                            onBlur={this.handleChange}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEnterKeyDown}
                        />
                        <div className = "input-group-append mr-3">
                            <Button
                                className={
                                    "btn btn-" + (this.state.value ? "primary" : "outline-secondary")
                                }
                                onClick={this.handleButtonClick}
                                disabled={!this.state.alpha_two_code || !this.state.country || !this.state.domain
                                || !this.state.name || !this.state.web_page || !this.state.id}
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                    ))}
            </div>
            )
        }
}
