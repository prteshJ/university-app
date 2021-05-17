import React, {Component} from "react";
import Button from "./Button";

export default class AddUniversity extends Component {
    state = {
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
        const alpha_two_code = this.state.alpha_two_code.trim();
        const country = this.state.country.trim();
        const domain = this.state.domain.trim();
        const name = this.state.name.trim();
        const web_page = this.state.web_page.trim();
        if (alpha_two_code.length <= 0 || country.length <= 0 || domain.length <= 0 ||
            name.length <= 0 || web_page.length <= 0) {
            return;
        }
        this.props.handleAddUniversity(alpha_two_code, country, domain, name, web_page);
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
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyDown}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyDown}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Alpha two code"
                    name="alpha_two_code"
                    value={this.state.alpha_two_code}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyDown}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Domain"
                    name="domain"
                    value={this.state.domain}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyDown}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Web page"
                    name="web_page"
                    value={this.state.web_page}
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
                        || !this.state.name || !this.state.web_page}
                    >
                        Add
                    </Button>
                </div>
            </div>
        );
    }
}
