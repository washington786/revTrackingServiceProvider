import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../../app/main/dashboard/Dashboard';
import OrderDetails from '../../../../app/main/dashboard/OrderDetails';

const DashStack = createStackNavigator();

const HomeStack = () => {
  return (
    <DashStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='dashboard'>
        <DashStack.Screen name='dashboard' component={Dashboard}/>
        <DashStack.Screen name='details' component={OrderDetails}/>
    </DashStack.Navigator>
  )
}

export default React.memo(HomeStack)