import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').width;

const DashBoard = () => {
  const fotos = [
    {id: 1, usuario: 'rafael'},
    {id: 2, usuario: 'alberto'},
    {id: 3, usuario: 'vitor'},
  ];

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id}
      data={fotos}
      renderItem={({item}) => (
        <View>
          <View style={styles.cabecalho}>
            <Image
              source={require('../../imagens/react-native.png')}
              style={styles.fotoDePerfil}
            />
            <Text>{item.usuario}</Text>
          </View>
          <Image
            source={require('../../imagens/react-native.png')}
            style={styles.foto}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  foto: {
    width: width,
    height: width,
  },
});

export default DashBoard;
