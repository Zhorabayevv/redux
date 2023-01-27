import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./store/components/PostContainer";
import PostContainer2 from "./store/components/PostContainer2";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  // React.useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      <h1 className="title">Redux Toolkit</h1>
      <div className="posts__div">
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
