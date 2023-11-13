import ErrorPage from "pages/Error/Error";
import Feed from "pages/Feed/Feed";
import User from "pages/User/User";

import {
    createBrowserRouter
} from "react-router-dom";

const RenderRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Feed />,
        errorElement: <ErrorPage />,
        loader: async ({ request }) => {
            return fetch(
                "https://api.escuelajs.co/api/v1/users",
                { signal: request.signal }
            );
        },
    },
    {
        path: "user/:id",
        element: <User />,
        loader: async ({ request, params }) => {
            return fetch(
                `https://api.escuelajs.co/api/v1/users/${params.id}`,
                { signal: request.signal }
            );
        },
    },
]);

export default RenderRoutes;

