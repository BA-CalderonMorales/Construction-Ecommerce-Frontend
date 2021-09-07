import React from 'react'
import { Grid } from '@material-ui/core';
import AdminContainer from '../../components/admin-container/admin-container';

const AdminLanding = ({ setCurrentId, setUser }) => {
    
    return (  
        <Grid container alignItems="stretch" spacing={3} >
            <AdminContainer />
        </Grid>
    );
}
 
export default AdminLanding;