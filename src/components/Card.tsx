import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type ArticleProps = {
  article: {
    id: string | number;
    title: string;
    content: string;
    image: any;
  }
}

export default function ArticleCard({ article }: ArticleProps) {
  const router = useRouter();
  
  return (
    <TouchableOpacity onPress={() => router.push(`/article/${article.id}`)}>
      <View style={styles.card}>
        <Image source={article.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.content}>{article.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12, 
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  image: { width: '100%', height: 200 },
  textContainer: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  content: { fontSize: 14, color: '#666' }
});
