import PostList from "./components/posts/PostList";
import MainHeader from "./components/shared/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function closeModalHandler() {
    setModalIsVisible(false);
    console.log("closed");
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          onStopPosting={closeModalHandler}
        />
      </main>
    </>
  );
}
export default App;
