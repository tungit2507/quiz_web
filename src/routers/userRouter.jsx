import Home from "@/pages/Home";
import Login from "@/pages/Login";
import About from "@/pages/About";
import UserLayout from "@/layouts/UserLayout";
import SignUp from "@/pages/SignUp";


const userRoutes = [
    {
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
   
];

export default userRoutes;