import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    if (!email || !password) {
      return;
    }
    // navigate('/dashboard', { replace: true });

   

    // console.log(email, password);

    const data = { username: email, password };

    fetch('http://3.215.66.231/login.php', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: `username=${email}&password=${password}`, // body data type must match "Content-Type" header
    })
      .then((e) => e.json())
      .then((res) => {
       
        if (res.status === 200) {
          localStorage.setItem("user", res.username)
          setMessage("Login Successful")

          setOpen(true);

          setTimeout(() => {
            setOpen(false);
          }, 2000);

          navigate('/dashboard', { replace: true });
        } else {
          setMessage("User not found")

          setOpen(true);

          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClose = () => {};

  return (
    <>
      <Stack spacing={3}>
        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          onClose={handleClose}
          message={message}
        />

        <TextField name="email" value={email} onChange={handleEmailChange} label="Email address" />

        <TextField
          name="password"
          label="Password"
          onChange={handlePasswordChange}
          value={password}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton style={{marginTop: '1rem'}} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
