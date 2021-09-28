import React from 'react';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../actions/userAction';
import Header from "../Header";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  }
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }


  return (
    <Container maxWidth={"xl"}>
      <Header />
      <Grid container spacing={1}>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Box
            style={{ width: "100%" }}
            sx={{
              display: "flex",
              p: "20px 0px",
              flexDirection:"column",
              
            }}>
            <Avatar
              alt="Jamshid Raximov"
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              sx={{ width: 100, height: 100,
              margin:"0px auto", }}
            />
            <Typography variant="overline"
             style={{ width: "100%" }}
             sx={{textAlign:"center"}} 
            >

              Jamshid Raximov
            </Typography>

          </Box>

        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12} >
          
          <Item>xs=6</Item>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}  >
          <Item>xs</Item>
        </Grid>
      </Grid>
      <h1>This is Profile component</h1>
      <button onClick={() => {
        localStorage.removeItem("userInfo");
        history.push("/")
      }}>Log out</button>
    </Container>
  )
}
