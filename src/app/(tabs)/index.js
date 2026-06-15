import { useState } from 'react';
import { FlatList, View } from 'react-native';
import ArticleCard from '../../components/Card';
import { articlesList } from '../../data/articles';
import { styles } from '../../styles/index.styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articlesList}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={({ item }) => <ArticleCard article={item} />}
      />
    </View>
  );
}
