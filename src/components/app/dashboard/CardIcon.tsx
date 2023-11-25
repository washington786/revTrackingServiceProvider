import { StyleSheet, View } from 'react-native'
import React from 'react'

import Icons from 'react-native-vector-icons/Feather';
import { GlobalColors } from '../../../infrastructure/GlobalColors';

type icon={
    name:string;
}
const CardIcon = (props:icon) => {
  return (
    <View style={styles.con}>
      <Icons name={`${props.name}`} size={25} color={GlobalColors.grey.l4}/>
    </View>
  )
}

export default CardIcon

const styles = StyleSheet.create({
    con:{
        padding:10,
        backgroundColor:"#fff",
        borderRadius:100,
        width:50,
        height:50,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
    }
})