import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

export default class CoinsList extends Component {
  renderItem = ({ item }) => {
    const { name, symbol, current_price, total_volume, price_change_percentage_24h, image } = item;

    return (
      <View>
        <View style={styles.cards}>
          <View style={styles.viewCard}>
            <Text style={styles.cardText}>
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
            source={{ uri: image }} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Coins Market:</Text>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.coins}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderItem}
        />
      </View>
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
  cards: {
    width: 300,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#EEEEEE",
    padding: 15,
    borderRadius: 20,
  },
  viewCard: {
    paddingRight: 5,
  },
  coinImage: {
    width: 90,
    height: 90,
  },
  cardText: {
    color: "#000",
    textAlign: "left",
  },
  red_coin: {
    color: '#FF0000',
  },
  green_coin: {
    color: '#27960e',
  },
  title: {
    fontSize: 35,
    marginTop: 40,
    marginBottom: 10,
    color: '#7b3790',
    textAlign: 'center',
  },
});