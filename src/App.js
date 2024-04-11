import "./App.css";
import Accordion from "./components/Accordion";
import Bank from "./components/Bank";
import Currency from "./components/Currency";
import FlashCards from "./components/Flashcard";
import ShowText from "./components/ShowText";
import Split from "./components/Splitbill";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Shanyin's components exercise</h1>
      <div>
        <Accordion data={faqs} />
      </div>
      <FlashCards />
      <br />
      <br />
      <ShowText />
      <br />
      <Currency />
      <br />
      <Bank />
      <Split />
    </div>
  );
}

export default App;
