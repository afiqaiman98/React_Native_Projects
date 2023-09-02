import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://cdn.britannica.com/97/122097-050-B89080F4/Morning-Glory-Pool-Upper-Geyser-Basin-Wyoming.jpg",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Yello Stone</Text>
          <Text style={styles.cardLable}>America</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            tenetur ad temporibus neque, sit repellat aut maiores? Illum vel
            consequuntur hic inventore, veritatis maiores, minus rem dolor
            possimus assumenda omnis?
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'800',
    paddingHorizontal:8,
  },
  card: {
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
  },
  cardElevated: {
    backgroundColor:'#f6f6f6',
    elevation:3,

  },
  cardImage: {
    height: 180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,

  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle:{
    fontSize:22,
    marginBottom:6,

  },
  cardLable:{
    fontSize:14,

  },
  cardDescription:{
    fontSize:12,
    color:'red',

  },
  cardFooter:{}
});
