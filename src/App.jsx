import "./App.css";
import BasicButtonGroup from "./components/BasicButtonGroup/BasicButtonGroup";
import BasicPagination from "./components/BasicPagination/BasicPagination";
import FoodList from "./components/BookList/FoodList";
import BookList from "./components/BookList/FoodList";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import RecipeReviewCard from "./components/ExpandMore/ExpandMore";
import Mailbox from "./components/Mailbox/Mailbox";
import Product from "./components/Product/Product";
import SimpleBackdrop from "./components/SimpleBackdrop/SimpleBackdrop";
import TemporaryDrawer from "./components/TemporaryDrawer/TemporaryDrawer";
import Tittle from "./components/Tittle/Tittle";
import foods from "./data/foods";
// import categories from "./data/categories";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <Tittle name="Backstage-!" />
      {/* <RecipeReviewCard /> */}
      <SimpleBackdrop />
      <BasicButtonGroup />
      <TemporaryDrawer />
      <Card text="Hello Card Component" />
      <FoodList items={foods} />
      <BasicPagination />
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
