import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Paginate = ({ page }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // useEffect: function with a call back function with a dependency array.
    useEffect(() => {
        if (page) {
            dispatch(getPosts(page)); // Fetches all the posts
        }
    }, [dispatch, page])

    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={5}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem  {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate;