import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const classes = useStyles();

    // useEffect: function with a call back function with a dependency array.
    useEffect(() => {
        if (page) {
            dispatch(getPosts(page)); // Fetches all the posts
        }
    }, [dispatch, page]);

    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={numberOfPages} // Depends on the number of posts we have.
            page={Number(page) || 1} // Current page the client is on.
            color="primary"
            size="large"
            shape="rounded"
            renderItem={(item) => (
                <PaginationItem  {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate;