import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PostList from "./Sidebar/Posts/Posts";
function VKPosts() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <PostList />
      </main>
    </>
  );
}

export default VKPosts;
