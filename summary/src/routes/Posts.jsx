import { Outlet } from "react-router-dom";
import PostList from "../components/posts/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}
export default Posts;

export async function postLoader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
