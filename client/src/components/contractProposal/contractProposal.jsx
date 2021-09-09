import React, { useState, useEffect } from 'react';
import { Paper, Container, Grid, TextField, Divider, Typography, Button, InputLabel, InputAdornment } from '@material-ui/core';
import useStyle from './styles.js';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { createContract } from '../../actions/contract';
import { useHistory } from 'react-router-dom';
import Map from '../googlemap/map';

const ContractProposal = () => {
    const [values, setValues] = useState({ date: new Date(Date.now()), typeOfWork: null, descriptionOfProject: null, customerPriceProposal: null, image: null });
    const [clicked, setClicked] = useState(false);
    // Thing to note: An admin view would have to handle allocating which contract is for which owner. I was
    // attempting to hardcode the OwnerId into 
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (values) {
            setValues(values);
        }
    }, [values]);

    const clear = () => {
        setValues({
            date: new Date(Date.now()), // Date of project submission
            typeOfWork: '', // Type of Work
            descriptionOfProject: '', // Description of Project
            customerPriceProposal: '', // Customer Price Proposal
            image: '', // Image of Project
        })
    }
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        if (values.image === '') {
            setValues({...values, image: null})
        }
        e.preventDefault();
        console.log(values);

        dispatch(createContract(values)); 
        setClicked(false);
        e.target.reset();
        clear(); // Then clear the form.
        history.push('/contract');
    }

    const getLocation = () => {
        setClicked(!clicked);
    }
    const workType = "Plumbing, Framing, Concrete..."
    const message = "Please provide a detailed description."
    const priceProposal = "(i.e. 30, 200, 499...)"
    const locationText = "Press \"Get Location\" to help.";
    
    return (
        <>
            <Paper>
                <Container maxWidth="xl" className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.root}>Send us your Proposal</Typography>
                    </Grid>
                </Container>
                <Container maxWidth="xl" className={classes.root}>
                    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
                                <InputLabel>Work Type</InputLabel>
                                <TextField onChange={handleChange} variant="standard" name="typeOfWork" label={workType} value={values.TypeOfWork}></TextField>
                                <InputLabel htmlFor="standard-adornment-amount">Price Proposal</InputLabel>
                                <TextField id="standard-adornment-amount" startAdornment={<InputAdornment position="start">$</InputAdornment>} onChange={handleChange} variant="standard" name="customerPriceProposal" label={priceProposal} value={values.CustomerPriceProposal}></TextField>
                                <InputLabel>Description</InputLabel>
                                <TextField onChange={handleChange} variant="standard" name="descriptionOfProject" label={message} value={values.DescriptionOfProject} multiline rows={5}></TextField>
                                <InputLabel>Location</InputLabel>
                                <TextField onChange={handleChange} variant="standard" name="location" label={locationText} value={values.Location}></TextField>
                                {/* Future iterations will allow a customer to just click on the geolocation on the map and autopopulate the necessary info for location */}
                                <Button type="button" variant="text" color="secondary" onClick={getLocation}>Get Location</Button>
                                <FileBase className={classes.chooseFile} type="file" multiple={false} onDone={({base64}) => setValues({ ...values, image: base64 })} />
                                <Button type="submit" variant="contained" color="primary">Send Proposal</Button>
                                {clicked && (
                                    <>
                                        {/* https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng */}
                                        <Map />
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default ContractProposal;