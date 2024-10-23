import { useLoaderData, Outlet, useParams } from "react-router-dom";
import { loadContent } from "./home";
function Location() {
  return (
    <>
      <h1>Headline</h1>
      <Outlet />
    </>
  );
}

export default Location;

export let getParams = async ({ params }) => {
  const { id } = params;

  let res = await loadContent();

  return res.find((data) => data.id == id);
};
