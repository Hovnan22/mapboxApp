import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import LoggedIn from './LoggedIn';
import Root from './root';



const Navigation = () => {
    const { isLoggedIn } = useSelector(({ app }) => app);

    console.log({ isLoggedIn })
    return (
        <NavigationContainer >
            {isLoggedIn ? <Root /> : <LoggedIn />}
        </NavigationContainer>
    );
};

export default Navigation;
