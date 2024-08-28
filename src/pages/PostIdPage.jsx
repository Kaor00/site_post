import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loaderr from "../components/UI/Loaderr/Loaderr";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
  });

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, []);
  return (
    <div>
      <h2>Вы открыли страницу поста с ID = {params.id}</h2>
      {isLoading
        ? <Loaderr />
        : <div>{post.id}. {post.title}</div>
      }
      <h1>
        Комментарии
      </h1>
      {isComLoading
        ? <Loaderr/>
        : <div>
            {comments.map(comm => 
                <div key={comm.id} style={{marginTop:15}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
        </div>
      }
      
    </div>
  );
};

export default PostIdPage;
