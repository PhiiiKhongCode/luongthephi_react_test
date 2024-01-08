import { RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { router } from "./routes";
const App = () => {
    return <div className="flex flex-col justify-center items-center w-full">
        <RouterProvider router={router} />
    </div>;
};
export default App;