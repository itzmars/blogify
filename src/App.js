import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import NotFound from "./pages/NotFound";
import LoginForm from "./components/auth/LoginForm";
import { AuthProvider } from "./utilities/userContext";
import AddArticle from "./pages/AddArticle";
import RegisterForm from "./components/auth/RegisterForm";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article-list" element={<ArticleList />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/add-article" element={<AddArticle />} />
            <Route path="/signup" element={<RegisterForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
