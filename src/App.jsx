import "./App.css";
import BookList from "./components/BookList/BookList";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Mailbox from "./components/Mailbox/Mailbox";
import Product from "./components/Product/Product";
import favBooks from "./data/favBooks";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <h1 className="title">Backstage</h1>
      <Card text="Hello Card Component" />
      <Button text="Push" onClick={handleClick} />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Mailbox username="JohnDoe" messages={["Message 1", "Message 2"]} />
      <BookList books={favBooks} />
    </>
  );
}

export default App;
