import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "./Profile";

const stack= createStackNavigator({

    screen1:{
        screen:Profile
    }
})

export const AppNav=createAppContainer(stack)
