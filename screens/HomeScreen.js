import React from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import {
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { signOut } from 'firebase/auth';
import Ionicons from "react-native-vector-icons/Ionicons";

import { auth } from '../config';

export const HomeScreen = () => {

  let sec = [
    {
      src: "require('../assets/donor.png')",
      title: "Help us to grow the community",
      per: "20%",
      raised: "10,000 Rs",
      createdBy: "ABC company",
    },

    {
      src: "require('../assets/donor.png')",
      title: "Help us to grow the community",
      per: "10%",
      raised: "20,000 Rs",
      createdBy: "XYZ company",
    },
    {
      src: "require('../assets/donor.png')",
      title: "Help us to grow the community",
      per: "20%",
      raised: "10,000 Rs",
      createdBy: "ABC company",
    },
  ];

  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    
    <View style={styles.container}>
       <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 100,
              width: 100,
              justifyContent: "center",
              alignSelf: "center",
            }}
            source={require("../assets/donor.png")}
          />

          <View style={{ flex: 0.9 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderColor: "grey",
                padding: 10,
                borderRadius: 5,
                margin: 10,
              }}
            >
              <View style={{ flex: 0.1 }}>
                <Ionicons name="search-sharp" size={20} color="grey" />
              </View>
              <View style={{ flex: 0.8 }}>
                <TextInput placeholder="Search" />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 2,
            borderColor: "white",
            padding: 10,
            borderRadius: 5,
            margin: 10,
          }}
        >
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
              padding: 5,
              backgroundColor: "#9e003a",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("List");
              }}
            ></TouchableOpacity>
            <Ionicons name="ios-medical" size={20} color="#fff" />
          </View>

          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              marginRight: 10,
              alignItems: "center",
              padding: 5,
              backgroundColor: "#9e003a",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("List");
              }}
            >
              <Ionicons name="ios-medkit" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 0.5,

              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              backgroundColor: "#9e003a",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("List");
              }}
            >
              <Ionicons name="ios-heart-sharp" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={sec}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Case");
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    shadowColor: "grey",
                    shadowOffset: 50,
                    shadowRadius: 10,
                    elevation: 1,
                    width: 330,
                    marginLeft: 10,
                    padding: 20,
                    height: 300,
                    marginBottom: 30,
                  }}
                >
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                    source={require("../assets/donor.png")}
                  />

                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {item.title}
                  </Text>

                  <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <View
                      style={{
                        borderWidth: 15 / 2,
                        marginRight: 10,
                        borderRadius: 50,
                        borderColor: "grey",
                        height: 80,
                        width: 80,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ textAlign: "center", fontSize: 20 }}>
                        {item.per}
                      </Text>
                    </View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        Raised
                      </Text>
                      <Text style={{ fontSize: 18, fontWeight: "400" }}>
                        {item.raised}
                      </Text>
                    </View>

                    <View
                      style={{
                        borderRightWidth: 1,
                        borderRightColor: "grey",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 20,
                      }}
                    ></View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>Created By</Text>
                      <Text>{item.createdBy}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />

        <FlatList
          data={sec}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Case");
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    shadowColor: "grey",
                    shadowOffset: 50,
                    shadowRadius: 10,
                    elevation: 1,
                    width: 330,
                    marginLeft: 10,
                    padding: 20,
                    height: 300,
                    marginBottom: 50,
                  }}
                >
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                    source={require("../assets/donor.png")}
                  />

                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {item.title}
                  </Text>

                  <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <View
                      style={{
                        borderWidth: 15 / 2,
                        marginRight: 10,
                        borderRadius: 50,
                        borderColor: "grey",
                        height: 80,
                        width: 80,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ textAlign: "center", fontSize: 20 }}>
                        {item.per}
                      </Text>
                    </View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        Raised
                      </Text>
                      <Text style={{ fontSize: 18, fontWeight: "400" }}>
                        {item.raised}
                      </Text>
                    </View>

                    <View
                      style={{
                        borderRightWidth: 1,
                        borderRightColor: "grey",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 20,
                      }}
                    ></View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>Created By</Text>
                      <Text>{item.createdBy}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />

        <FlatList
          data={sec}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Case");
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    shadowColor: "grey",
                    shadowOffset: 50,
                    shadowRadius: 10,
                    elevation: 1,
                    width: 330,
                    marginLeft: 10,
                    padding: 20,
                    height: 300,
                    marginBottom: 50,
                  }}
                >
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                    source={require("../assets/donor.png")}
                  />

                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {item.title}
                  </Text>

                  <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <View
                      style={{
                        borderWidth: 15 / 2,
                        marginRight: 10,
                        borderRadius: 50,
                        borderColor: "grey",
                        height: 80,
                        width: 80,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ textAlign: "center", fontSize: 20 }}>
                        {item.per}
                      </Text>
                    </View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        Raised
                      </Text>
                      <Text style={{ fontSize: 18, fontWeight: "400" }}>
                        {item.raised}
                      </Text>
                    </View>

                    <View
                      style={{
                        borderRightWidth: 1,
                        borderRightColor: "grey",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 20,
                      }}
                    ></View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>Created By</Text>
                      <Text>{item.createdBy}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScrollView>
      
      <Button title='Sign Out' onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
