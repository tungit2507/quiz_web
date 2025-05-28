import Home from "@/pages/Home";
import Login from "@/pages/Login";
import About from "@/pages/About";
import UserLayout from "@/layouts/UserLayout";
import SignUp from "@/pages/SignUp";
import StartQuiz from "@/pages/StartQuiz";
import Blog from "@/pages/Blog";
import ForgotPassword from "@/pages/ForgotPassword";
import EnterOTP from "@/pages/EnterOTP";
import EnterNewPassword from "@/pages/EnterNewPassword";
import Quiz from "@/pages/Quiz";
import CreateQuiz from "@/pages/CreateQuiz";
import QuizResult from "@/pages/Result";
import HistoryQuiz from "@/pages/HistoryQuiz";
import QuizHistoryDetail from "@/pages/QuizHistoryDetail";
import Profile from "@/pages/Profile";


const userRoutes = [
    {
        element: <UserLayout />,
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/create-quiz",
                element: <CreateQuiz />,
            },
            {
                path: "/history-quiz",
                element: <HistoryQuiz />,
            },
            {
                path: "/quiz-history-detail",
                element: <QuizHistoryDetail />,
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
    {
        path: "/start-quiz",
        element: <StartQuiz />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/enter-otp",
        element: <EnterOTP />,
    },
    {
        path: "/enter-new-password",
        element: <EnterNewPassword />,
    },
    {
        path: "/do-quiz",
        element: <Quiz />,
    },
    {
        path: "/quiz-result",
        element: <QuizResult />,
    },


];

export default userRoutes;