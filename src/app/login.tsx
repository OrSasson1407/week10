import { useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import AppButton from '../components/MainButton';
import { styles } from '../styles/login.styles';

export default function Login() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Foo News</Text>
      <Text style={styles.subtitle}>Stay update to date with the latest foo</Text>
      <TextInput placeholder="Email address" style={styles.input} placeholderTextColor="..." />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor="..." />
      <AppButton
        title="Let's go!"
        onPress={() => router.replace('/(tabs)')}
      />
    </View>
  );
}