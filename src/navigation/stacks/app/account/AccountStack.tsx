import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../../../app/main/account/Account';

const AccountStacks = createStackNavigator();
const AccountStack = () => {
  return (
    <AccountStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='account'>
        <AccountStacks.Screen name='account' component={Account}/>
    </AccountStacks.Navigator>
  )
}

export default AccountStack