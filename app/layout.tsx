import { Link, Stack } from "expo-router"
import { View, Text } from "react-native"
export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='donor-register' />
            <Stack.Screen name='profile-screen' />
            <Stack.Screen name='donor-login' />
            <Stack.Screen name='donor-homescreen' />
            <Stack.Screen name='blood-request' />
            <Stack.Screen name='blood-camp' />
            <Stack.Screen name='donor-myrequest' />
            <Stack.Screen name='find-donor' />
            <Stack.Screen name='my-donations' />
            <Stack.Screen name='settings' />
            <Stack.Screen name='edit' />
            <Stack.Screen name='aboutus' />
            <Stack.Screen name='rateus' />
            <Stack.Screen name='refer-a-friend' />
            <Stack.Screen name='privacy&policy' />
            <Stack.Screen name='notification' />
            <Stack.Screen name='logout' />
            


        </Stack>
    );
};