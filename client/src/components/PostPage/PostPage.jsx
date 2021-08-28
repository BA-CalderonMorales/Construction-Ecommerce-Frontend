import React from 'react'
import PostDetails from '../PostDetails/PostDetails';

const PostPage = ({ currentId, setCurrentId }) => {
    return (
        <>
            <PostDetails currentId={currentId} setCurrentId={setCurrentId} />
        </>
    )
}

export default PostPage
