import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cashly
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component="main" sx={{ flex: "1 0 auto" }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            py: 8,
            textAlign: "center",
          }}
        >
          <Container>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Cashly
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Manage your finances with ease and efficiency.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/signup"
            >
              Get Started
            </Button>
          </Container>
        </Box>

        {/* Features Section */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Easy Tracking
                </Typography>
                <Typography component="p">
                  Track your income and expenses with a simple, intuitive
                  interface.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Detailed Reports
                </Typography>
                <Typography component="p">
                  Generate detailed financial reports to understand your
                  spending habits.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Secure and Private
                </Typography>
                <Typography component="p">
                  Your data is secure with us. Privacy is our top priority.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "primary.dark",
          color: "white",
          py: 2,
          textAlign: "center",
          mt: "auto", // Pushes footer to the bottom
        }}
      >
        <Container>
          <Typography variant="body1" gutterBottom>
            &copy; {new Date().getFullYear()} Cashly. All rights reserved.
          </Typography>
          <Box>
            <Button color="inherit" href="#" sx={{ color: "white" }}>
              Privacy Policy
            </Button>
            <Button color="inherit" href="#" sx={{ color: "white" }}>
              Terms of Service
            </Button>
            <Button color="inherit" href="#" sx={{ color: "white" }}>
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
