import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "../../bottomNavigation/BottomTabNavigation";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="app" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default MainStack;
