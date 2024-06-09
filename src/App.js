import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./auth/Login";
import Register from "./auth/Register";
import BackOffice from "./pages/BackOffice";
import QAndA from "./pages/QAndA";
import Chats from "./pages/Chats";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="h-screen bg-blue-950">
      <BrowserRouter>
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<BackOffice />}>
              <Route index element={<Chats />} />
              <Route path="Q_&_A" element={<QAndA />} />
              <Route path="chats" element={<Chats />} />
              <Route path="chats/:id" element={<Chat />} />
              <Route path=":id" element={<Chat />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
