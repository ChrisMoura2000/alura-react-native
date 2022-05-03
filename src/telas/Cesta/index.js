import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from './components/Topo'
import Detalhes from './components/Detalhes'

function Cesta({topo, detalhes}) {
  return (
    <>
      <Topo {...topo}/>
      <View style={estilos.cesta}>
        <Detalhes { ...detalhes }/>
      </View>
    </>
  );
}

export default Cesta;

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
