import React from 'react';
import Input from "./Input";
import Select from "./Select";
import ButtonGroup from "./ButtonGroup";
import CheckBox from "./CheckBox";

var validator = require("email-validator");


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            donation: {
                name: "",
                email: "",
                referralSource: null,
                recurring: null,
                allocate: null,
                subscribe: false,
            },
            referralSources: [
                {
                    id: 0,
                    value: 'Life you can save'
                },
                {
                    id: 1,
                    value: 'Givewell'
                }
            ]
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleInputBoolean = this.handleInputBoolean.bind(this);
        this.handleInputInteger = this.handleInputInteger.bind(this);
        this.handleInputCheckBox = this.handleInputCheckBox.bind(this);
    }

    handleInputBase(name, value) {
        console.log(value);
        console.log(name);
        this.setState(
            prevState => ({
                donation: {
                    ...prevState.donation,
                    [name]: value
                }
            })
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.handleInputBase(name, value);
    }

    handleInputBoolean(e) {
        let value = e.target.value.toString();
        let name = e.target.name;
        let bool = value === "1";
        this.handleInputBase(name, bool);
    }

    handleInputCheckBox(e) {
        let value = e.target.checked;
        let name = e.target.name;
        this.handleInputBase(name, value);
    }

    handleInputInteger(e) {
        let value = parseInt(e.target.value);
        let name = e.target.name;
        this.handleInputBase(name, value);
    }


    validateLength() {
        const length = this.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    validateEmail() {
        if (this.value.length) {
            return validator.validate(this.value) ? 'success' : 'error';
        }
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <div className="panel">
                    <legend>Donation Details</legend>
                    <ButtonGroup
                        title={"How often will you be donating?"}
                        name={"recurring"}
                        value={this.state.donation.frequency}
                        handleChange={this.handleInputBoolean}
                        options={[
                            {id: false, value: "One-Time"},
                            {id: true, value: "Monthly"}]}
                    />
                    <ButtonGroup
                        title={"How would you like to allocate your donation?"}
                        name={"allocate"}
                        value={this.state.donation.allocate}
                        handleChange={this.handleInput}
                        options={[
                            {id: 0, value: "Where it's needed"},
                            {id: 1, value: "I want to choose"}]}
                    />
                </div>
                <div className="panel">
                    <legend>Donor Details</legend>
                    <Input
                        inputType={"text"}
                        title={"Full Name"}
                        name={"name"}
                        value={this.state.donation.name}
                        placeholder={"Enter your name"}
                        handleChange={this.handleInput}
                        validationState={this.validateLength}
                        helptext={"Help text goes here"}
                    />
                    <Input
                        inputType={"text"}
                        title={"Email Address"}
                        name={"email"}
                        value={this.state.donation.email}
                        placeholder={"Enter your name"}
                        handleChange={this.handleInput}
                        validationState={this.validateEmail}
                        helptext={"Help text goes here"}
                    />
                    <Select
                        inputType={"text"}
                        title={"Where did you hear about us?"}
                        name={"referralSource"}
                        value={this.state.donation.referralSource}
                        handleChange={this.handleInputInteger}
                        options={this.state.referralSources}
                    />
                    <CheckBox
                        title={"Send me news and updates"}
                        name={"subscribe"}
                        value={this.state.donation.subscribe}
                        handleChange={this.handleInputCheckBox}
                    />
                </div>


            </form>
        );
    }
}

export default Form;