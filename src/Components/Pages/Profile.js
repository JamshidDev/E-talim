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
import { Button } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import UpdateIcon from '@mui/icons-material/Update';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
  display: 'none',
});

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
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
              flexDirection: "column",

            }}>
            <Avatar
              alt="Jamshid Raximov"
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              sx={{
                width: 100, height: 100,
                margin: "0px auto",
              }}
            />
            <Typography variant="overline"
              style={{ width: "100%" }}
              sx={{ textAlign: "center" }}
            >
              Jamshid Raximov
            </Typography>
            <Typography variant="overline"
              style={{ width: "100%" }}
              sx={{ textAlign: "center" }}
            >
              Mern stack developer
            </Typography>
            <Box style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}>

              <Button variant="outlined" size="small" color="primary" endIcon={<AddPhotoAlternateIcon />}>Edit</Button>
              <Button color="secondary" size="small" variant="outlined" endIcon={<DeleteIcon />}>Delete</Button>
            </Box >

          </Box>

        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12} >
          <List>

            <ListItem sx={{ display: "flex", position:"relative" }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ padding:"0px 10px 0px 0px", width:90, }}
                gutterBottom
              >
                Name
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom >
                Jamshid Raximov
              </Typography>
              <Typography variant="overline" display="block" sx={{ padding: "0px 10px", position: 'absolute', right:"0px" }} gutterBottom>
                12/09/2021
              </Typography>
            </ListItem>
            <Divider />

            <ListItem sx={{ display: "flex" }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ padding:"0px 10px 0px 0px", width:90, }}
                gutterBottom
              >
                TEL
              </Typography>
              <Typography variant="subtitle1" display="block"  gutterBottom >
                995016004
              </Typography>
              <Typography variant="overline" display="block" sx={{ padding: "0px 10px", position: 'absolute', right:"0px" }} gutterBottom>
                12/09/2021
              </Typography>
            </ListItem>
            <Divider />
            <ListItem sx={{ display: "flex" }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{padding:"0px 10px 0px 0px", width:90, }}
                gutterBottom
              >
                EMAIL
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom >
               raximovj662@gmail.com
              </Typography>
              <Typography variant="overline" display="block" sx={{ padding: "0px 10px", position: 'absolute', right:"0px" }} gutterBottom>
                12/09/2021
              </Typography>
            </ListItem>
            <Divider />
            <ListItem sx={{ display: "flex" }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{padding:"0px 10px 0px 0px", width:90, }}
                gutterBottom
              >
                ADDRES
              </Typography>
              <Typography variant="subtitle1" display="block" gutterBottom >
                Xorazm, Uzbekistan
              </Typography>
              <Typography variant="overline" display="block" sx={{ padding: "0px 10px ", position: 'absolute', right:"0px" }} gutterBottom>
                12/09/2021
              </Typography>
            </ListItem>
            <Divider />
            <ListItem sx={{ display: "flex" }}>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                sx={{ padding:"0px 10px 0px 0px", width:90, }}
                gutterBottom
              >
                Name
              </Typography>
              <Typography variant="subtitle1" display="block"  gutterBottom >
                Jamshid Raximov
              </Typography>
              <Typography variant="overline" display="block" sx={{ padding: "0px 10px", position: 'absolute', right:"0px" }} gutterBottom>
                12/09/2021
              </Typography>
            </ListItem>
            <Divider />


          </List>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}  >
        <Box sx={{width:"100%", display:"flex"}}>
        <Typography variant="body"
              style={{ width: "100%", padding:"16px 0px 15px 5px" }}
              sx={{ textAlign: "left",  }}
            >
              Hisob raqamini o'chirish
            </Typography>
        </Box>
          <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Button size="small" variant="contained" color="secondary">
            <LogoutIcon/>
          </Button>
          </Box>

          <Box sx={{width:"100%", display:"flex"}}>
        <Typography variant="body"
              style={{ width: "100%", padding:"16px 0px 15px 5px" }}
              sx={{ textAlign: "left",  }}
            >
              Kesh xotiradagi fayllarni o'chirish
            </Typography>
        </Box>
          <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Button size="small" variant="contained" color="secondary">
            <AutoDeleteIcon/>
          </Button>
          </Box>

          <Box sx={{width:"100%", display:"flex"}}>
        <Typography variant="body"
              style={{ width: "100%", padding:"16px 0px 15px 5px" }}
              sx={{ textAlign: "left",  }}
            >
              Natijalar tarixini tozalash
            </Typography>
        </Box>
          <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Button size="small" variant="contained" color="primary">
            <UpdateIcon/>
          </Button>
          </Box>

        </Grid>
      </Grid>
      <Button onClick={() => {
        localStorage.removeItem("userInfo");
        history.push("/")
      }}>Log out</Button>

    </Container>
  )
}
