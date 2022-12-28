import React from 'react';
import Feed from './Feed';
import Post from './Post';
const Home = () => {
    return (
        <div>
            <Post></Post>
            <Feed />
            <Feed />
            <Feed />
            <Feed />
        </div>
    );
};

export default Home;