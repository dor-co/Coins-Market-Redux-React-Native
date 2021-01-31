import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import PropTypes from "prop-types";

export default class CoinsList extends Component {
  //_keyExtractor = item => item.email;

  _renderItem = ({ item }) => {
    const { name } = item;

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.cardTextStyle}>
              {name}
            </Text>
          </View>
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
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
    backgroundColor: "#093339"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#D5D5D5",
    padding: 15,
    borderRadius: 20,

  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "#000",
    textAlign: "left"
  }
});