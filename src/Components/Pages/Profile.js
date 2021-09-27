import React from 'react';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../actions/userAction';
import Header from "../Header";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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


    return (
        <Container maxWidth={"xl"}>
            <Header />
            <Grid container spacing={3}>
        <Grid item xs={4} md={6}>
          <Item>variable width content</Item>
        </Grid>
        <Grid item xs={8} md={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
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
