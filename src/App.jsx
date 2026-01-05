import "./App.css";
import FoodList from "./components/BookList/FoodList";
import BookList from "./components/BookList/FoodList";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import Mailbox from "./components/Mailbox/Mailbox";
import Product from "./components/Product/Product";
import foods from "./data/foods";
// import categories from "./data/categories";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <h1 className="title">Backstage</h1>
      <Card text="Hello Card Component" />
      <FoodList items={foods} />
      {/* <FoodList items={categories} /> */}
      <Button text="Push" onClick={handleClick} />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Mailbox username="JohnDoe" messages={["Message 1", "Message 2"]} />
    </>
  );
}

export default App;
