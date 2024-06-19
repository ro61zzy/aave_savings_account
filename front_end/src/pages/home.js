import { Box, Button } from "@mui/material";
import React from "react";

const savingHome = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, #022341 0%, #0F5074 50%, #042C43 100%)",
        height: "100vh",
      }}
    >
      <Box container>
        <Box  sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          p: "1rem",
        }}>
          <Button
            sx={{
              p: "10px",
              backgroundColor: "#0681bd",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "10px",
              "&:hover": {
                backgroundColor:   "#056b9a",
              },
            }}
          >
            Connect Wallet
          </Button>
        </Box>
        <Box
        sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>

        </Box>

      </Box>
    </Box>
  );
};

export default savingHome;
