import "./App.css";
import Comment from "./components/Comment";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React",
  author: {
    name: "Hello Kitty",
    avatarUrl:
      "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
  },
};

function App() {
  return (
    <div className="App">
      <Comment data={comment} />
    </div>
  );
}

export default App;

