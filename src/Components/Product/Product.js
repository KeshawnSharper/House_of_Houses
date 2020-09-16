import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import RelatedProducts from "./RelatedProducts";
import Photos from "./Photos";
import "./product.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { apiKey } from "../variables";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null,
      loading: false,
      property: {
        price: null,
        down_payment_percent: 20,
        down_payment: null,
        payments: 360,
        interest: 3.5,
        mortgage_insurance: 0,
        property_taxes: null,
        home_insurance: 1192 / 12
      }
    };
    this.changeDownPayment = this.changeDownPayment.bind(this);
    this.changeDownPaymentPercent = this.changeDownPaymentPercent.bind(this);
    this.changePayments = this.changePayments.bind(this);
    this.changeInterest = this.changeInterest.bind(this);
    this.changeMortgageInterest = this.changeMortgageInterest.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeProperty = this.changeProperty.bind(this);
  }
  changePrice(e) {
    this.setState({
      ...this.state,
      property: {
        ...this.state.property,
        price: Number(e.target.value),
        down_payment: Number(e.target.value) * (20 / 100),
        down_payment_percent: 20,
        property_taxes: (Number(e.target.value) * (1.1 / 100)) / 12
      }
    });
    console.log(this.state.property);
  }
  changeDownPayment(e) {
    this.setState({
      ...this.state,
      property: {
        ...this.state.property,
        down_payment: e.target.value,
        down_payment_percent: Math.round(
          (Number(e.target.value) / this.state.property.price) * 100
        )
      }
    });
    console.log(this.state.property);
  }
  changeDownPaymentPercent(e) {
    this.setState({
      ...this.state,
      property: {
        ...this.state.property,
        down_payment:
          this.state.property.price * (Number(e.target.value) / 100),
        down_payment_percent: Number(e.target.value)
      }
    });
    console.log(this.state.property);
  }
  changePayments(e) {
    this.setState({
      ...this.state,
      property: {
        ...this.state.property,
        payments: Number(e.target.value)
      }
    });
    console.log(this.state.property);
  }
  changeInterest(e) {
    this.setState({
      ...this.state,
      property: {
        ...this.state.property,
        interest: Number(e.target.value)
      }
    });
    console.log(this.state.property);
  }
  changeMortgageInterest(e) {
    this.setState({
      ...this.state,
      property: {
        ...this.state.property,
        mortgage_insurance: e.target.checked
          ? (this.state.property.price * (1.2 / 100)) / 12
          : 0
      }
    });
    console.log(this.state.property);
  }
  changeProperty(id) {
    this.setState({
      ...this.state,
      loading: true
    });
    axios
      .get(
        `https://realtor.p.rapidapi.com/properties/v2/detail?property_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        }
      )
      .then((data) => {
        this.setState({
          ...this.state,
          detail: data.data.properties[0],
          loading: false,
          property: {
            ...this.state.property,
            price: data.data.properties[0].price,
            down_payment_percent: 20,
            down_payment: data.data.properties[0].price * (20 / 100),
            payments: 360,
            interest: 3.5,
            mortgage_insurance: 0,
            property_taxes: (data.data.properties[0].price * (1.1 / 100)) / 12,
            home_insurance: 1192 / 12
          }
        });
        console.log(this.state.detail);
      })
      .catch();
  }
  componentDidMount() {
    axios
      .get(
        `https://realtor.p.rapidapi.com/properties/v2/detail?property_id=${this.props.match.params.num}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        }
      )
      .then((data) => {
        this.setState({
          ...this.state,
          detail: data.data.properties[0],
          property: {
            ...this.state.property,
            price: data.data.properties[0].price,
            down_payment_percent: 20,
            down_payment: data.data.properties[0].price * (20 / 100),
            payments: 360,
            interest: 3.5,
            mortgage_insurance: 0,
            property_taxes: (data.data.properties[0].price * (1.1 / 100)) / 12,
            home_insurance: 1192 / 12
          }
        });
        console.log(this.state.detail);
      })
      .catch();
  }
  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        width: "100%",
        height: 400,
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper
      }
    }));

    function renderRow(props) {
      const { index } = props;

      return (
        <ListItem button key={index}>
          <ListItemText primary={`${index}`} />
        </ListItem>
      );
    }

    renderRow.propTypes = {
      index: PropTypes.number.isRequired
    };

    return (
      <div>
        {this.state.detail === null ? null : this.state.loading ? (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        ) : (
          <div id="wrap">
            <div id="product_layout_1">
              <div className="top">
                <div className="product_images">
                  <Photos photos={this.state.detail.photos} />
                </div>

                <div className="product_info">
                  <h1> $ {this.state.detail.price}</h1>
                  <h3>
                    {" "}
                    {this.state.detail.address.line},{" "}
                    {this.state.detail.address.city}{" "}
                    {this.state.detail.address.state},
                    {this.state.detail.address.postal_code}
                  </h3>
                  <h4>
                    {this.state.detail.beds} beds | {this.state.detail.baths}{" "}
                    baths
                  </h4>

                  <div className="product_description">
                    <div class="product_description">
                      {this.state.detail.description}
                    </div>

                    <h4>
                      {" "}
                      {Math.round(
                        ((this.state.property.price -
                          this.state.property.down_payment) *
                          (this.state.property.interest / 100 / 12) *
                          Math.pow(
                            1 + this.state.property.interest / 100 / 12,
                            this.state.property.payments
                          )) /
                          (Math.pow(
                            1 + this.state.property.interest / 100 / 12,
                            this.state.property.payments
                          ) -
                            1) +
                          this.state.property.mortgage_insurance +
                          this.state.property.property_taxes +
                          this.state.property.home_insurance
                      )}
                    </h4>

                    {/* <label htmlFor="quantity"></label> */}
                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <TextField
                          id="standard-basic"
                          label="Home price:"
                          value={this.state.property.price}
                          onChange={this.changePrice}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          width="100%"
                          id="standard-basic"
                          label="Down payment:"
                          value={this.state.property.down_payment}
                          onChange={this.changeDownPayment}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="standard-basic"
                          label="Down payment%:"
                          value={this.state.property.down_payment_percent}
                          onChange={this.changeDownPaymentPercent}
                        />
                      </Grid>
                      <br />
                      <Grid item xs={4}>
                        <TextField
                          id="standard-select-currency"
                          select
                          width="100%"
                          label="Select"
                          onChange={this.changePayments}
                          helperText="Please select your currency"
                        >
                          <MenuItem key={360} value={360}>
                            30 year fixed
                          </MenuItem>
                          <MenuItem key={300} value={400}>
                            25 year fixed
                          </MenuItem>
                          <MenuItem key={240} value={240}>
                            20 year fixed
                          </MenuItem>
                          <MenuItem key={150 + 30} value={150 + 30}>
                            15 year fixed
                          </MenuItem>
                          <MenuItem key={120} value={120}>
                            10 year fixed
                          </MenuItem>
                        </TextField>
                      </Grid>
                      <br />

                      <Grid item xs={4}>
                        <TextField
                          id="standard-basic"
                          label="Mortgage Interest :"
                          value={this.state.property.interest}
                          onChange={this.changeInterest}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <div className="related_info">
                          {/* <input type="checkbox" id="vehicle1" name="vehicle1" value={this.state.property.mortgage_insurance} onChange={this.changeMortgageInterest}/>
<label for="vehicle1">Mortgage insurance</label> */}
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={this.changeMortgageInterest}
                                value={this.state.property.mortgage_insurance}
                              />
                            }
                            label="Mortgage insurance"
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <div>
                      <List subheader={<li />}>
                        <h5> Features</h5>
                        {this.state.detail.feature_tags.map((item) => (
                          <ListItem>
                            <ListItemText
                              primary={`${item.replace("_", " ")}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </div>
                  <div>
                    <h6>{this.state.detail.office.name}</h6>
                    <h6>Call {this.state.detail.office.phones[0].number}</h6>
                  </div>
                </div>
              </div>

              <RelatedProducts
                id={this.props.match.params.num}
                changeProperty={this.changeProperty}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    properties: state.properties,
    pageProperties: state.pageProperties
  };
}
export default connect(mapStateToProps)(Product);
