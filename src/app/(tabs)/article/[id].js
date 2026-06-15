import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { articlesList } from '../../../data/articles';
import { styles } from '../../../styles/[id].styles';

export default function ArticleInsideTabs() {
  const { id } = useLocalSearchParams();
  const article = articlesList.filter(elem => elem.id == id)[0];
  
  return (
    <ScrollView style={styles.container}>
      <Image source={article.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.subtitle}>{article.author}</Text>
        <Text style={styles.body}>
          {article.content}
        </Text>
      </View>
    </ScrollView>
  );
}