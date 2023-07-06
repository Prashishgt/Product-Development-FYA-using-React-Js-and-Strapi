import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PasswordChecklist from "react-password-checklist";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { Navigate, useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Register() {

  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = React.useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password, username, confirmPassword } = form;
    try {
      const response = await axios.post("http://localhost:1337/api/auth/local/register", {
        username,
        email,
        password
      });
      const data = response.data;

      if (data.user) {
        setAlert("User registered successfully.");
        navigate('/');
        // TODO: handle successful registration (e.g., redirect, show message, etc.)
      } else if (data.message) {
        // Handle errors returned by the server.
        setAlert(data.message[0].messages[0].message);
      } else {
        setAlert("Unknown registration error.");
      }
    } catch (error) {
      if (!username && !email && !password) {
        setAlert("Enter all Input Fields");
      }
      else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setAlert("Invalid Email");
      }
      else if (!(password === confirmPassword)) {
        setAlert("Password don't match");
      }
      else {
        setAlert(error.response.statusText);
      }

    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url(https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 0,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '98vh'
            }}
          >
            {alert && <h4>{alert}</h4>}

            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 0 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital", "match"]}
                minLength={5}
                value={form.password}
                valueAgain={form.confirmPassword}
                iconSize="16px"
                style={{
                  color: "black"
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                color='secondary'
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2" color="secondary">
                    {"Already have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
