import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logoText}>Foo News</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  content: { padding: 16, alignItems: 'center' },
  logoText: { fontSize: 20, fontWeight: 'bold' }
});
