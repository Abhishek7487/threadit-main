import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import AppLayout from "./ui/AppLayout";
import Feed from "./pages/Feed";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/feed/best" />} />
            <Route path="/feed/:category" element={<Feed />} />
            <Route path="/post" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
