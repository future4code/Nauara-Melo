import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    textField: {
      marginLeft: 1,
      marginRight: 1,
      width: '50ch',
    },
  }));

export default function TextFieldComponent(props) {
    const classes = useStyles();

    return (
        props.input.type != 'select' ?
                <TextField
                    fullWidth
                    className={classes.textField}
                    onChange={props.handleInputChange}
                    name={props.input.name}
                    type={props.input.type}
                    label={props.input.label}
                    inputProps={ { pattern: props.input.pattern} }
                    required={props.input.required}
                />
            :
                <TextField 
                    fullWidth
                    select
                    className={classes.textField}
                    onChange={props.handleInputChange}
                    name={props.input.name}
                    type={props.input.type}
                    label={props.input.label}
                    required={props.input.required}
                    value={props.value}
                >
                    { props.isOptionsObject ? 
                            props.options.map(option => {
                                return (<MenuItem key={option.id} value={option.id}> { `${option.name} - ${option.planet}` } </MenuItem>)
                            })
                        :
                            props.options.map(option => {
                                return (<MenuItem key={option} value={option}> {option} </MenuItem>)
                            })
                    }
                </TextField>
    );
}