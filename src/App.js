import {
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./layouts/navbar";
import Location from "./layouts/location";
import HomePage from "./layouts/home";
import Error from "./layouts/error";
import Channels from "./layouts/channels";
import Blog from "./layouts/blog";
import Video from "./layouts/video";
import Contact from "./layouts/contact";
import Register from "./layouts/register";
import Locate from "./layouts/locate";
import Login from "./layouts/login";
import Faq from "./layouts/faq";

function App() {
  const provider = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="video" element={<Video />} />
        <Route path="channels" element={<Channels />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="location" element={<Location />}>
          <Route path=":id" element={<Locate />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={provider} />
    </div>
  );
}

export default App;
