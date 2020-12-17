import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { dataContext } from "../DataContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: 100,
  },
  corousal: {
    marginTop: 2,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottom: "2px solid rgb(235, 235, 224)",
    backgroundColor: "rgb(255, 255, 255)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "0 0",
    fontStyle: "italic",
    fontWeight: "light",
    color: "rgb(89, 89, 89)",
  },
  image: {
    maxWidth: "100%",
  },
  shop: {
    fontWeight: 600,
    fontSize: 60,
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    opacity: 0.7,
    "&:hover": {
      cursor: "pointer",
    },
  },
  list: {
    listStyleType: "none",
  },
  div: {
    marginTop: 60,
    marginBottom: 70,
  },
}));

const Home = (props) => {
  const data = useContext(dataContext);
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Carousel className={classes.corousal}>
        {Object.entries(data).map(([productID, { name, img2 }]) => {
          return (
            <li key={productID} className={classes.list}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.paper}>
                    <h1>{name}</h1>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={8}>
                  <Paper className={classes.paper}>
                    <div className={"imgLoad"}>
                      <img
                        className={classes.image}
                        src={img2}
                        alt={name}
                      ></img>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </li>
          );
        })}
      </Carousel>
      <div className={classes.div}>
        <span
          onClick={() => {
            navigate("products");
          }}
          className={classes.shop}
        >
          Lets Shop!
        </span>
      </div>
    </div>
  );
};

export default Home;
