import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { UCard } from "../components/UCard";
import { AppPagination } from "../components/AppPagination";

import { IRandomUser } from "../services/randomUser";

export const Users = () => {
  const [userData, setUserData] = useState<IRandomUser[]>([]);

  return (
    <Box sx={{ backgroundColor: "#FFF", padding: "5px" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "25px" }}>
        {userData?.map((user, index) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <UCard
                  key={index}
                  avatar={user.picture.medium}
                  email={user.email}
                  fName={user.name.first}
                  lName={user.name.last}
                  username={user.login.username}
                  age={user.dob.age}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
      <AppPagination setUserData={(n: any) => setUserData(n)} />
    </Box>
  );
};
