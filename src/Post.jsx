import React from 'react';
import "./Post.css";
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar
                className="post_avatar"
                alt="gopal"
                src="/static/images/avatar/1.jpg"
            />
            <h3>gopalthere</h3>

            </div>
            {/* header -->dp + username*/}
            {/* image*/}
            <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-react.appspot.com/o/images%2F8-july-react-instagram-clone-sonny-qazi.jpg?alt=media&token=6cd49e23-79d4-42ca-8095-09c3baa95faa" className="post_img" />
        
        
            {/* username + caption */}
            <p><b>gopalthere </b>You Have To Be Odd To Be No One</p>
        </div>
    )
}

export default Post
