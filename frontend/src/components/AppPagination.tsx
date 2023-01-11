import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import { getUsers } from "../services/randomUser";

const pageSize = 8;

export const AppPagination = ({ setUserData }: any) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    getUsers({ from: pagination.from, to: pagination.to })
      .then(async (res) => {
        if (res) {
          setPagination({ ...pagination, count: res.count });

          setUserData(res.users);
        }

        return;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event: any, page: any) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box justifyContent="center" alignItems="center" display="flex">
      <Pagination count={Math.ceil(pagination.count / pageSize)} onChange={handlePageChange} />
    </Box>
  );
};
