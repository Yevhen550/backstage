import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import RecipeReviewCard from "../ExpandMore/ExpandMore";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>

      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <Box onClick={(e) => e.stopPropagation()}>
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <RecipeReviewCard />
          )}
        </Box>
      </Backdrop>
    </div>
  );
}
