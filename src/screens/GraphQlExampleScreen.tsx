import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const ChapterItem = ({chapter, onPress}) => {
  const {number, title} = chapter;
  let header, subheader;

  if (number) {
    header = `Chapter ${number}`;
    subheader = title;
  } else {
    header = title;
  }

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </Pressable>
  );
};

export default ({navigation}) => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data?.chapters}
      renderItem={({item}) => (
        <ChapterItem
          chapter={item}
          onPress={() => navigation.navigate('Chapter', {chapter: item})}
        />
      )}
      keyExtractor={chapter => chapter.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
});
