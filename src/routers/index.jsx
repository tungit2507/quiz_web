import adminRouter from "./AdminRouter";
import userRouter from "./UserRouter";
import NotFound from "../pages/NotFound";
import UserLayout from "../layouts/UserLayout";


const routes = [
    ...userRouter,
    ...adminRouter,
    {
        path: "*",
        element: <NotFound />,
    }
]

export default routes;
