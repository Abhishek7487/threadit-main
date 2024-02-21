import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import AppLayout from "./ui/AppLayout";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/feed" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/post" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
