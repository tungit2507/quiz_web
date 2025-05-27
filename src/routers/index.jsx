import adminRouter from "./AdminRouter";
import userRouter from "./UserRouter";
import NotFound from "../pages/NotFound";
import UserLayout from "../layouts/UserLayout";


const routes = [
    {
        element: <UserLayout />,
        children: userRouter,
    },
    ...adminRouter,
    {
        path: "*",
        element: <NotFound />,
    }
]

export default routes;
