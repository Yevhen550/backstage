import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import s from "./BasicPagination.module.css";

const BasicPagination = () => {
  return (
    <Stack spacing={2} className={s.wrap}>
      <Pagination count={3} color="secondary" />
    </Stack>
  );
};

export default BasicPagination;
