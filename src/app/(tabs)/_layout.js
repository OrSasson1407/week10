import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';
import Header from '../../components/Header';
import { styles } from '../../styles/tabs._layout.styles';

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{
          tabBarLabel: 'News feed',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/tabIcons/home.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
        <Tabs.Screen name="create" options={{
          tabBarLabel: 'Create article',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/tabIcons/explore.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
        <Tabs.Screen 
          name="article/[id]" 
          options={{ href: null }} 
        />
      </Tabs>
    </View>
  );
}
