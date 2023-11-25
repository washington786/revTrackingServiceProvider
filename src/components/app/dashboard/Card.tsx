import { StyleSheet, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../../infrastructure/GlobalColors'
import CardIcon from './CardIcon'
import { Caption, Text } from 'react-native-paper'

type card={
    title:string;
    total:number;
    iconName:string;
}
const Card = (props:card) => {
  return (
    <View style={styles.con}>
      <CardIcon name={`${props.iconName}`}/>
      <Text variant='labelSmall' style={[styles.text,styles.total]}>{`${props.total}`}</Text>
      <Caption style={styles.text}>{`${props.title}`}</Caption>
    </View>
  )
}

export default React.memo(Card);

const styles = StyleSheet.create({
    con:{
        maxWidth:120,
        minWidth:120,
        maxHeight:130,
        minHeight:130,
        height:"100%",
        width:"100%",
        backgroundColor:GlobalColors.primary.level4Green,
        marginHorizontal:5,
        paddingHorizontal:5,
        paddingVertical:6,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:GlobalColors.white
    },
    total:{
        paddingTop:8
    }
})