import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

export default class CoinsList extends Component {
  renderItem = ({ item }) => {
    const { name, symbol, current_price, total_volume, price_change_percentage_24h, image } = item;

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.cardTextStyle}>
              {name}
              {'\n'}
              {symbol}
              {'\n'}
              ${current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {'\n'}
              ${total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {'\n'}
              {price_change_percentage_24h < 0 ? (
                        <Text style={styles.red_coin}>{price_change_percentage_24h}%</Text>
                    ) : (<Text style={styles.green_coin}>{price_change_percentage_24h}%</Text>)}
            </Text>
          </View>
          <Image
            style={styles.coinImage}
            source={{uri: image}} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.coins}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderItem}
      />
    );
  }
}

CoinsList.propTypes = {
  coins: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339",
  },
  cardContainerStyle: {
    width: 300,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#EEEEEE",
    padding: 10,
    borderRadius: 20,
  },
  coinImage: {
    width: 90,
    height: 90,
  },
  cardTextStyle: {
    color: "#000",
    textAlign: "left",
  },
  red_coin: {
    color: '#FF0000',
  },
  green_coin: {
    color: '#27960e',
  },
});