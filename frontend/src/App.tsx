import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "@/context";
import { AppRoutes } from "@/routes";


function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <AppRoutes />
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;