import React from 'react'
import useStyles from './styles.js';
import { Typography, Divider, Card, CardContent, CardMedia, CardActions, CardActionArea, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Recommendations = ({ recommendedPosts }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (_id) => {
        history.push(`/postDetails/${_id}`);
    }

    return (
        <>
            {recommendedPosts.length && (
                <>
                    <Divider />
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography variant="h5">You might also like:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <div className={classes.section}>                    
                            <div className={classes.recommendedPosts}>
                                {recommendedPosts.map(({ title, message, selectedFile, _id }) => (
                                    <Card className={classes.root} key={_id}>
                                        <CardActionArea onClick={() => handleClick(_id)}>
                                            <CardMedia className={classes.media} >
                                                <img src={selectedFile} className={classes.recommendedImage} />
                                            </CardMedia>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">{message}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" style={{ cursor: 'pointer' }} onClick={() => handleClick(_id)}>
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </>
            )}
        </>
    )
}

export default Recommendations
