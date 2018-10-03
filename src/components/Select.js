import React from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock, Drop} from 'react-bootstrap';

const Select = props => {
    return (
        <FormGroup controlId="formControlsSelect">
            <ControlLabel>{props.title}</ControlLabel>
            <FormControl componentClass="select"
                         placeholder={props.placeholder}
                         onChange={props.handleChange}
                         name={props.name}
            >
                {props.options.map(option => {
                    return (
                        <option key={option.id} value={option.id} label={option.value}>
                            {option.value}
                        </option>
                    );
                })}
            </FormControl>
            <HelpBlock>{props.helptext}</HelpBlock>
        </FormGroup>
    );
};

export default Select;
