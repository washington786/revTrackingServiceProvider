import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import History from '../../../../app/main/history/History';

const HistStack = createStackNavigator();
const HistoryStack = () => {
  return (
    <HistStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='history'>
        <HistStack.Screen name='history' component={History}/>
    </HistStack.Navigator>
  )
}

export default HistoryStack