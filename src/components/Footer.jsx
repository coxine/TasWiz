import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 10 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/coxine/TasWiz/">
          TasWiz
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
