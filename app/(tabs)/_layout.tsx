import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';



export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#4CAF50', // Your desired background color
          borderTopWidth: 0, // Optional: remove top border
          height: 65, // Optional: adjust height
        },
        tabBarActiveTintColor: "#001700",
        tabBarInactiveTintColor: '#ffffff',
        // tabBarActiveBackgroundColor: '#',

        tabBarItemStyle: {
          borderRadius: 10, // Optional: rounded corners
        },
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={ color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
