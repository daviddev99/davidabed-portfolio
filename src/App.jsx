import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <main className="relative background w-full h-screen">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};
