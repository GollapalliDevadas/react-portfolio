import { Box, Typography } from "@mui/material";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material"; 

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        py: 3,
      }}
    >
      <Typography variant="body1" fontWeight="bold">
        © 2025 Devadas. All Rights Reserved.
      </Typography>
      <Typography variant="body2">Designed & Developed by Devadas</Typography>

      
      <Box sx={{ mt: 2 }}>
       
        <a href="https://www.linkedin.com/in/gollapalli-devadasu-468285184" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
          <LinkedIn />
        </a>
        <a href="https://github.com/GollapalliDevadas" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
          <GitHub />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
          <Twitter />
        </a>
      </Box>
    </Box>
  );
}
