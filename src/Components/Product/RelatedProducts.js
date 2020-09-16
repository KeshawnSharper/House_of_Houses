import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import axios from "axios";
import { Link } from "react-router-dom";
import { changeExt } from "upath";
import { apiKey } from "../variables";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));
export default function RelatedProducts(props) {
  const classes = useStyles();
  let { id, changeProperty } = props;
  console.log(id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log(url)
    axios
      .get(
        `https://realtor.p.rapidapi.com/properties/v2/list-similar-homes?property_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        }
      )
      .then((data) => {
        setProducts(data.data.data.home.related_homes.results);
      })
      .catch();
  }, []);
  console.log(products);
  return (
    <div className={classes.root}>
      {!products ? null : (
        <GridList className={classes.gridList} cols={2.5}>
          {products.map((tile) => (
            <GridListTile key={tile.property_id}>
              <Link
                to={`/product/${tile.property_id}`}
                onClick={(e) => changeProperty(tile.property_id)}
              >
                <img
                  src={tile.primary_photo.href}
                  alt={tile.title}
                  height="200%"
                />
                <GridListTileBar
                  title={tile.location.address.line}
                  subtitle={<span>$ {tile.list_price}</span>}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      )}
    </div>
  );
}
