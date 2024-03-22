import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";
import Dialog from "../Dialog/Dialog";

const PostList = () => {
  const [posts, setPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (post) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedPost(null);
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const results = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = results.data
          .filter((x) => x.completed === true)
          .slice(0, 5);
        console.log(data);
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div>
      <h5 className=" text-center text-lg font-bold">POST LIST</h5>
      <div className="flex flex-row">
        {posts.map((post) => (
          <ul key={post.id}>
            <Card
              title={post?.title}
              completed={post?.completed}
              onClick={() => openDialog(post)}
            />
          </ul>
        ))}
      </div>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} data={selectedPost} />
    </div>
  );
};

export default PostList;
