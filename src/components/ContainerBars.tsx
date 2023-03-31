import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import  Icon  from "react-native-vector-icons/Ionicons";

const ContainerBars = ()=>{
    return (
      <View style={styles.barsStatus}>
        <View style={[styles.rectangleParent]}>
          <LinearGradient
            style={[styles.groupChild, styles.baseIconPosition]}
            locations={[0, 1]}
            colors={['#0185b9', '#00c6fb']}
            useAngle={true}
            angle={180}
          />
          <View style={styles.iconobar}>
            <Image
              style={[styles.iconobarChild, styles.iconobarChildPosition]}
              resizeMode="cover"
              source={require('../assets/ellipse-12.png')}
            />
            <Image
              style={[styles.unnamed21Icon, styles.iconobarChildPosition]}
              resizeMode="cover"
              source={require('../assets/unnamed2-11.png')}
            />
          </View>
          <TouchableOpacity
            style={{
              marginLeft: 350,
            }}
          >
            <Icon name="menu-outline" size={40} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    baseIconPosition: {
      bottom: '0%',
      top: '0%',
      height: '100%',
      left: '0%',
      right: '0%',
      width: '100%',
      position: 'absolute',
    },
    iconobarChildPosition: {
      right: 0,
      width: 40,
      position: 'absolute',
    },
    groupChild: {
      backgroundColor: 'transparent',
    },
  
    iconobarChild: {
      height: 40,
      top: 0,
    },
    unnamed21Icon: {
      top: 2,
      height: 37,
    },
    iconobar: {
      top: 10,
      right: 317,
      height: 40,
      width: 40,
      position: 'absolute',
    },
    rectangleParent: {
      height: '136.36%',
      top: '97.73%',
      bottom: '-134.09%',
      left: '0%',
      right: '0%',
      width: '100%',
      position: 'absolute',
  
    },
    baseIcon: {
      maxWidth: '100%',
      overflow: 'hidden',
      maxHeight: '100%',
    },
    barsStatus: {
      flex: 1,
      left: 0,
      backgroundColor: '#0185b9',
      width: '100%',
      height: 44,
      top: 0,
      position: 'absolute',
    },
  });
  
  export default ContainerBars;