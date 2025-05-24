import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/home";
import { ROUTE_HOME } from "./routes";



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTE_HOME} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;