import {
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navabar from "./layouts/navabar"; // Fixed typo in the file name 'navbar'
import Location from "./layouts/location";
import HomePAge from "./layouts/home";
import Error from "./layouts/error";
import Channels from "./layouts/channels";
import Blog from "./layouts/blog";
import Video from "./layouts/video";
import { getParams } from "./layouts/location";
import { loadContent } from "./layouts/home";
import Contact from "./layouts/contact";
import Register from "./layouts/register";
import Locate from "./layouts/locate";
import Login from "./layouts/login";
import Faq from "./layouts/faq";

function App() {
  let provider = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navabar />}>
        {/* Home page with loader */}
        <Route index element={<HomePAge />} loader={loadContent} />

        {/* Other static routes */}
        <Route path="video" element={<Video />} />
        <Route path="channels" element={<Channels />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Dynamic location routes */}
        <Route path="location" element={<Location />}>
          <Route path=":id" element={<Locate />} loader={getParams} />
        </Route>

        {/* Fallback route for non-existing paths */}
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={provider} />
    </>
  );
}

export default App;
