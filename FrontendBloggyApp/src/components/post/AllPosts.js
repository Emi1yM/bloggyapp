import React from "react";
import Post from "./post";

  const AllPosts = (props) => {
    var posts = props.posts.map((post) => {
        return(
          <div key={post.id}>
            <Post post={post} 
            handleDelete={props.handleDelete}
            handleUpdate={props.handleUpdate}
            />
          </div>
        )
      })
    return(
          <div>
            {posts}
          </div>
        )
    }

    export default AllPosts