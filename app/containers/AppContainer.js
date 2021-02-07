import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import CoinsList from "../components/CoinsList";
import { fetchCoins } from "../redux/actions/CoinsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import PdfFilePage from '../components/pdfFilePage';

class AppContainer extends Component {

  componentDidMount() {
    this.fetchCoins();
    setInterval(this.fetchCoins.bind(this), 120000);
    this.props.fetchCoins(); //Api call to get the data from CoinsActions class
  }

  fetchCoins(){
     this.props.fetchCoins();
  }

  render() {
    let content = <CoinsList coins={this.props.coins.coins} />; //get the coins array
    if (this.props.coins.isFetching) { //if isFetching is true display spinner (content is spinner), else display coins array (content is array) 
      content = <ActivityIndicator size="large" />;
    }
    return (
      <View style={styles.container}>
        {/* spinner/coins array */}
        {content} 
      </View>);
  }
}

AppContainer.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  coins: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

const mapStateToProps = state => { //access all the props that I created inside the reducer (isFetching, errorMessage, coins, for example: this.props.coins.isFetching)
  return {
    coins: state
  };
}

export default connect(mapStateToProps, { fetchCoins })(AppContainer); //AppContainer component will be connect to redux store