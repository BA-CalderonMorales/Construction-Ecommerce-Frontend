import React from 'react'
import PostDetails from '../postDetails/postDetails';

const PostPage = ({ currentId, setCurrentId }) => {
    return (
        <>
            <PostDetails currentId={currentId} setCurrentId={setCurrentId} />
        </>
    )
}

export default PostPage
