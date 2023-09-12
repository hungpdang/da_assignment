import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import {Text, TouchableOpacity} from 'react-native';
import {routes} from './routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import DataProvider from './context/DataProvider';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={routes.LIST_SCREEN}>
            <Stack.Screen
              name={routes.LIST_SCREEN}
              component={ListScreen}
              options={{
                title: 'Digital Avenues',
              }}
            />
            <Stack.Screen
              name={routes.DETAIL_SCREEN}
              component={DetailScreen}
              options={{
                headerBackTitle: 'Back',
                headerTitle: 'Detail',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
