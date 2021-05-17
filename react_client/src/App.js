import React, { Component } from "react";
import "./App.css";
import Universities from "./components/Universities";

export default class App extends Component {
    state = {
        universities: []
    };

    handleUpdateUniversity = university => {
        const universities = [...this.state.universities];
        const index = universities.indexOf(university);
        const putData = {
            method: "PUT",
            body: JSON.stringify({ alpha_two_code: university.alpha_two_code, country: university.country,
                 domain: university.domain, name: university.name,  web_page: university.web_page}),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch("/universities/" + university.id, putData)
            .then(response => response.json())
            .then(({ university }) => {
                universities[index] = { alpha_two_code: university.alpha_two_code, country: university.country,
                 domain: university.domain, name: university.name,  web_page: university.web_page};
                this.setState({ universities });
            })
            .catch(error => console.log(error));
    };

    handleAddUniversity = (alpha_two_code,country,domain,name,web_page) => {
        const universities = [...this.state.universities];
        const postData = {
            method: "POST",
            body: JSON.stringify({ alpha_two_code: alpha_two_code, country:country,domain:domain,
            name:name, web_page:web_page}),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch("/universities/", postData)
            .then(response => response.json())
            .then(({ university }) => {
                universities.push({alpha_two_code: university.alpha_two_code, country: university.country,
                 domain: university.domain,  name: university.name,  web_page: university.web_page});
                this.setState({ universities });
            })
            .catch(error => console.log(error));
    };

    handleRemoveUniversity = university => {
        const deleteData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch("/universities/" + university.id, deleteData)
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    const universities = this.state.universities.filter(td => td !== university);
                    this.setState({ universities });
                }
            })
            .catch(error => console.log(error));
    };

    universitiesSelector = () => {
        return this.state.universities;
    };

    componentDidMount() {
        fetch("/universities/")
            .then(response => response.json())
            .then(data => {
                this.setState({ universities: data })
            })
            .catch(error => console.log(error));
    }

    render() {
        return ( <
            div className = "container-fluid mt-5" >
            <
            div className = "row justify-content-center" >
            <
            div className = "col-8" >
            <
            div className = "card text-center" >
            <
            div className = "card-header" >
           <
            /div> <
            Universities universities = { this.universitiesSelector() }
            handleAddUniversity = { this.handleAddUniversity }
            handleUpdateUniversity={this.handleUpdateUniversity}
            handleRemoveUniversity = { this.handleRemoveUniversity }
            /> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}