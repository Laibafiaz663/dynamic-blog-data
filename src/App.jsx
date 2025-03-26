import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { navitems } from "./data/data";
import { cardarraydata } from "./data/data";
import Blogs from "./components/blogs";
import { blogsdata } from "./data/blogs";

function App() {
  let [items, setitems] = useState(navitems);
  let [blogs, setblogs] = useState(blogsdata);
  let [cards, setcards] = useState(cardarraydata);
  return (
    <>
      <Navbar items={items} />
      <div className="row">
        <Blogs blogs={blogs} />
      </div>
    </>
  );
}

export default App;
