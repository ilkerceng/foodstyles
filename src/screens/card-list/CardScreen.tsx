import {FlatList, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {colors, typographies} from '../../theme/initDesignSystem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Image, Text, View} from 'react-native-ui-lib';
import {FloatingHeader} from '../../navigation/NavigationComponents';
import {Route} from '@react-navigation/native';
import {Routes} from '../../navigation/routesNames';
import {useCardList} from '../../services/cards.service';
import Options from '../../assets/images/options.png';
import AddImage from '../../assets/images/add.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardItem = ({
  item,
  onPress,
}: {
  item: {id: string; name: string};
  onPress: (id: string) => void;
}) => {
  const {id, name} = item;

  return (
    <Pressable
      onPress={() => onPress(id)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 52,
        borderRadius: 6,
        backgroundColor: colors.WHITE,
        shadowColor: colors.GREYISH_40,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 7,
        shadowOpacity: 1,
        paddingTop: 14,
        paddingLeft: 18,
        paddingBottom: 16,
        paddingRight: 14,
      }}
    >
      <Text TEXT_STYLE_7>{name}</Text>
      <TouchableOpacity
        onPress={() => {
          //TODO: Show menu
        }}
      >
        <Image style={{width: 24, height: 24}} source={Options} />
      </TouchableOpacity>
    </Pressable>
  );
};

const CardScreen = ({route}: {route: Route<any>}) => {
  const {data} = useCardList();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={{...styles.container}}>
      <View flex>
        <View style={styles.contentContainer}>
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 18,
            }}
            style={{
              flex: 1,
            }}
            data={data?.cards}
            renderItem={({item}) => (
              <CardItem item={item} onPress={() => false} />
            )}
            keyExtractor={chapter => chapter.id}
            ItemSeparatorComponent={() => (
              <View style={{height: 6, backgroundColor: 'transparent'}} />
            )}
          />
        </View>
      </View>
      <View
        center
        style={{
          width: '100%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
          backgroundColor: 'white',
        }}
      >
        <View
          center
          style={{
            bottom: 12,
            width: '100%',
            // zIndex: 1,
          }}
        >
          <Button
            backgroundColor={colors.WHITE}
            label="New Food Style"
            iconSource={AddImage}
            iconStyle={{tintColor: colors.ORANGE_RED}}
            labelStyle={{
              ...typographies.TEXT_STYLE_6,
              lineHeight: 22,
            }}
            style={{
              width: '90%',
              height: 43,
              borderRadius: 0,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 248)',
  },
  contentContainer: {
    flex: 1,
    marginTop: 18,
  },
});

export default CardScreen;
