import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {

//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts);    v2

// const token = useSelector((state) => state.token);   v2
    const [posts, setPosts]= useState([])

    const getPosts = async () => {

    try {const response = await fetch(`${VITE_BACKEND_URL}/api/posts`, {
        method: "GET"
        //   headers: { Authorization: `Bearer ${token}` },  v2
        });

        const data = await response.json();
        // dispatch(setPosts({ posts: data }));              v2
        setPosts({ posts: data })
    } catch(error) {
        console.error(error)
    }
    };

//   const getUserPosts = async () => {
//     const response = await fetch(
//       `${VITE_BACKEND_URL}/api/user/${userId}/posts`,
//       {
//         method: "GET"
//         // headers: { Authorization: `Bearer ${token}` }, 
//       }
//     );
//     const data = await response.json();
//     dispatch(setPosts({ posts: data }));
//   };                                                 v2

    useEffect(() => {getPosts(); }, []);

    return (
        <>
            {posts.map(() => ( <Post/> ))}
        </>
    );
};

export default Posts;