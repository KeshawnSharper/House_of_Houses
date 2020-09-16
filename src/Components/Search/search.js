import React, { useState, useEffect } from "react";
import "./search.css";
import { states } from "../variables";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "react-loader-spinner";
import {
  fetchProperties,
  reset,
  setPropertyType,
  filterProperties,
  setPageProperties,
  mostPopular,
  highPrice,
  Newest,
  lowPrice
} from "../../actions/actions";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
function Search(props) {
  const [property, setProperty] = useState({
    city: "",
    state: "",
    price_min: null,
    price_max: null,
    beds: null,
    baths: null
  });
  const classes = useStyles();
  const [active, setActive] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const handleValue = (event) => {
    setValue(event.target.value);
    // e.preventDefault();
    // props.setPropertyType(event.target.value);
  };
  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
    console.log(property);
  };
  let divider = Math.ceil(Number(props.match.params.num) / 5);
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  let pages = range(5 * (divider - 1) + 1, 5 * divider);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchProperties(property.city, property.state);
  };
  const handlefilter = (e) => {
    e.preventDefault();

    props.filterProperties(
      property.price_min,
      property.price_max,
      property.beds,
      property.baths,
      value
    );
  };
  const mostPopular = (e) => {
    e.preventDefault();
    setActive("Popular");
    props.mostPopular();
  };
  const Newest = (e) => {
    e.preventDefault();
    setActive("Newest");
    props.Newest();
  };
  const lowPrice = (e) => {
    e.preventDefault();
    setActive("low");
    props.lowPrice();
  };
  const highPrice = (e) => {
    e.preventDefault();
    setActive("high");
    props.highPrice();
  };
  const handleType = (e, type) => {};
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-3">
            <form>
              <div className="well">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        value={property.city}
                        onChange={handleChange}
                        name="city"
                      />
                      <select
                        name="state"
                        id="cars"
                        onChange={handleChange}
                        value={property.state}
                      >
                        {states.map((state) => (
                          <option>{state}</option>
                        ))}
                      </select>
                      <span className="input-group-btn">
                        <button
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* Filter */}
            <form className="shop__filter">
              {/* Price */}
              <h3 className="headline">
                <span>Price</span>
              </h3>

              <div className="form-group shop-filter__price">
                <div className="row">
                  <div className="col-xs-4">
                    <label
                      htmlFor="shop-filter-price_from"
                      className="sr-only"
                    />
                    <input
                      id="shop-filter-price_from"
                      type="number"
                      className="form-control"
                      placeholder="From"
                      name="price_min"
                      value={property.price_min}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-xs-4">
                    <label htmlFor="shop-filter-price_to" className="sr-only" />
                    <input
                      id="shop-filter-price_to"
                      type="number"
                      min={0}
                      className="form-control"
                      placeholder="To"
                      name="price_max"
                      value={property.price_max}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-xs-4">
                    <label htmlFor="shop-filter-price_to" className="sr-only" />
                    <input
                      id="shop-filter-price_to"
                      type="number"
                      min={0}
                      className="form-control"
                      placeholder="# of beds"
                      name="beds"
                      value={property.beds}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-xs-4">
                    <label htmlFor="shop-filter-price_to" className="sr-only" />
                    <input
                      id="shop-filter-price_to"
                      type="number"
                      min={0}
                      className="form-control"
                      placeholder="# of baths"
                      name="baths"
                      value={property.baths}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-xs-4">
                    <button
                      type="submit"
                      className="btn btn-block btn-default"
                      onClick={handlefilter}
                    >
                      Go
                    </button>
                  </div>
                </div>
              </div>
              {/* Checkboxes */}
              {/* Radios */}
              {/* <h3 className="headline">
                <span></span>
              </h3> */}
              <div className="radio">
                <FormControl component="fieldset">
                  <h3 className="headline">
                    <span>Type</span>
                  </h3>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleValue}
                  >
                    <FormControlLabel
                      value="condo"
                      control={<Radio />}
                      label="Condo"
                    />
                    <FormControlLabel
                      value="single_family"
                      control={<Radio />}
                      label="Single Family"
                    />
                    <FormControlLabel
                      value="multi_family"
                      control={<Radio />}
                      label="Multi Family"
                    />
                  </RadioGroup>
                </FormControl>
                {/* <input
                  type="radio"
                  name="shop-filter__radio"
                  id="shop-filter-radio_1"
                  defaultValue
                  onClick={ e => handleType(e,"condo")}
                  Checked = {type ===  }
                />
                <label htmlFor="shop-filter-radio_1">Condo</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="shop-filter__radio"
                  id="shop-filter-radio_2"
                  onClick={ e => handleType(e,"single_family")}
                  defaultValue
                  Checked = {type === "single_family" }
                />
                <label htmlFor="shop-filter-radio_2">Single Family</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="shop-filter__radio"
                  id="shop-filter-radio_3"
                  onClick={ e => handleType(e,"multi_family")}
                  defaultValue
                  Checked = {type ==="multi_family" }
                />
                <label htmlFor="shop-filter-radio_3">Multi Family</label> */}
              </div>

              {/* Colors */}
              {/* <h3 className="headline">
                <span>Reset</span>
              </h3> */}
              <div className="radio">
                <BootstrapButton
                  variant="contained"
                  color="primary"
                  disableRipple
                  className={classes.margin}
                  onClick={(e) => {
                    e.preventDefault();
                    setValue("");

                    props.reset();
                  }}
                >
                  Reset
                </BootstrapButton>
                {/* 
              <Button variant="contained" color="primary" onClick={ e => {
                e.preventDefault()
                props.reset()}}>
 
</Button> */}
              </div>
            </form>
          </div>
          <div className="col-sm-8 col-md-9">
            {/* Filters */}
            <ul className="shop__sorting">
              <li
                className={active === "Popular" ? "active" : null}
                onClick={mostPopular}
              >
                <a href="#">Popular</a>
              </li>
              <li
                className={active === "Newest" ? "active" : null}
                onClick={Newest}
              >
                <a href="#">Newest</a>
              </li>
              <li
                className={active === "low" ? "active" : null}
                onClick={lowPrice}
              >
                <a href="#">Price (low)</a>
              </li>
              <li
                className={active === "high" ? "active" : null}
                onClick={highPrice}
              >
                <a href="#">Price (high)</a>
              </li>
            </ul>
            {props.loading ? (
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            ) : (
              <div className="row">
                {props.pageProperties.map((property) => (
                  <div key={property.property_id} className="col-sm-6 col-md-4">
                    <div className="shop__thumb">
                      <a href="#">
                        <div className="shop-thumb__img">
                          <img
                            src={property.thumbnail}
                            className="img-responsive"
                            alt="..."
                          />
                        </div>
                        <Link to={`/product/${property.property_id}`}>
                          <h5 className="shop-thumb__title">
                            {property.address.line}, {property.address.city}{" "}
                            {property.address.state}
                            {property.address.postal_code}{" "}
                          </h5>
                        </Link>
                        <div className="shop-thumb__price">
                          ${property.price}
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* / .row */}
            {/* Pagination */}
            <div className="row">
              <div className="col-sm-12">
                <ul className="pagination pull-right">
                  {divider === 1 ? null : (
                    <li className="disabled">
                      <a href="#"></a>
                      <Link
                        to={`/search/${5 * (divider - 1)}`}
                        onClick={(e) =>
                          props.setPageProperties(5 * (divider - 1))
                        }
                      >
                        «
                      </Link>
                    </li>
                  )}

                  {pages.map((page) => (
                    <li>
                      <Link
                        to={`/search/${page}`}
                        onClick={(e) => props.setPageProperties(page)}
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                  {divider === 4 ? null : (
                    <li className="disabled">
                      <Link
                        to={`/search/${5 * (divider + 1) - 4}`}
                        onClick={(e) =>
                          props.setPageProperties(5 * (divider + 1) - 4)
                        }
                      >
                        »
                      </Link>
                    </li>
                  )}
                  <li></li>
                </ul>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .col-sm-8 */}
        </div>{" "}
        {/* / .row */}
      </div>
    </div>
  );
}
// actions

function mapStateToProps(state) {
  return {
    properties: state.properties,
    loading: state.loading,
    pageProperties: state.pageProperties
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProperties: (city, state) => {
      dispatch(fetchProperties(city, state));
    },
    filterProperties: (
      min = null,
      max = null,
      beds = null,
      baths = null,
      type = null
    ) => {
      dispatch(filterProperties(min, max, beds, baths, type));
    },
    setPageProperties: (page) => {
      dispatch(setPageProperties(page));
    },
    mostPopular: () => {
      dispatch(mostPopular());
    },
    highPrice: () => {
      dispatch(highPrice());
    },
    lowPrice: () => {
      dispatch(lowPrice());
    },
    Newest: () => {
      dispatch(Newest());
    },
    setPropertyType: (type) => {
      dispatch(setPropertyType(type));
    },
    reset: () => {
      dispatch(reset());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
