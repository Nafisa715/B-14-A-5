import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/Stacksidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  const addToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const item = stack.find((tech) => tech.id === id);

    setStack(stack.filter((tech) => tech.id !== id));

    if (item) {
      toast.info(`${item.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed.");
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section className="tech-section" id="technologies">
          <div className="heading">
            <div>
              <p className="label">EXPLORE</p>
              <h2>Technologies</h2>
              <p>
                Choose the technologies you want to add to your developer
                stack.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="technology-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              <StackSidebar
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>

        <section className="simple-section" id="projects">
          <p className="section-label">PROJECTS</p>
          <h2>Build something great</h2>
          <p>
            Combine the technologies from your stack and create useful,
            modern web applications.
          </p>
        </section>

        <section className="simple-section" id="about">
          <p className="section-label">ABOUT</p>
          <h2>About Dev Stack</h2>
          <p>
            Dev Stack is a simple place to explore popular web development
            technologies and build your own technology stack.
          </p>
        </section>

        <section className="simple-section" id="contact">
          <p className="section-label">CONTACT</p>
          <h2>Let's connect</h2>
          <p>
            Have a question or idea? Feel free to connect with us through
            the social links below.
          </p>
        </section>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;