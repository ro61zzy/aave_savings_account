import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            p: "1rem",
          }}
        >
          <Button
            sx={{
              p: "10px",
              backgroundColor: "#0681bd",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "10px",
              "&:hover": {
                backgroundColor: "#056b9a",
              },
            }}
          >
            Connect Wallet
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            pt: "1rem",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <Box
            sx={{
              border: "1px solid #808080",
              display: "flex",
              flexDirection: "column",
              p: "2rem",
              ml: "4.5rem",
              width: "50%",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "grey",
                fontSize: "15px",
              }}
            >
              My Asset Balance
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "30px",
              }}
            >
              ETH 0.357878
            </Typography>
          </Box>
          <Box
            sx={{
              width: "45%",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Have you Heard of AAVE? The non-custodial crypto thingy{" "}
              <a
                href="https://aave.com/"
                style={{ color: "#0066FF", fontSize: "25px" }}
              >
                <u>read more....</u>
              </a>
            </Typography>
          </Box>
        </Box>
        <Typography sx={{
            color:"grey",
            p:"3rem 4.3rem",
            fontSize:"20px"
        }}> Start Saving and Earning Interest,,,</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          //  mt: "2.5rem",
            p:"0 4.5rem"
          }}
        >
          <Box
            sx={{
              width: "46%",
              border: "1px solid #808080",
              p: "10px",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "grey",
                textAlign: "center",
              }}
            >
              Deposit
            </Typography>
            <TextField label="Select Asset" sx={{ color: "#fff" }} />
            <TextField id="outlined-basic" label="Amount" variant="outlined" />
            <Button
              sx={{
                backgroundColor: "#0681bd",
                color: "#fff",
              }}
            >
              Deposit
            </Button>
          </Box>
          <Box
            sx={{
              width: "46%",
              border: "1px solid #808080",
              p: "10px",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "grey",
                textAlign: "center",
              }}
            >
              Withdraw
            </Typography>
            <TextField label="Select Asset" sx={{ color: "#fff" }} />
            <TextField id="outlined-basic" label="Amount" variant="outlined" />
            <Button
              sx={{
                backgroundColor: "#0681bd",
                color: "#fff",
              }}
            >
              Withdraw
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default savingHome;
