import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import {Link} from 'expo-router';
import {Image} from 'expo-image';

import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from '@/app/components/Button';
import ImageViewer from '@/app/components/ImageViewer';
import IconButton from '@/app/components/IconButton';
import CircleButton from '@/app/components/CircleButton';
import EmojiPicker from '@/app/components/EmojiPicker';
import EmojiList from '@/app/components/EmojiList';
import EmojiSticker from '@/app/components/EmojiSticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    }); 
    
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // depois
  };
  
  return (
    <GestureHandlerRootView style={ styles.container}>
    <Text style={styles.title}>Bem vindos ao Sítio Urbano</Text>
      <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync}/>
        <Button label="Use essa foto" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      
    </GestureHandlerRootView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#EDF2C9'
  },
  text: {
    color: '#2B282B'
  },
  title: {
    color: '#DC5F87',
    fontWeight: 'bold',
    fontSize: 30
  },
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#2B282B',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});