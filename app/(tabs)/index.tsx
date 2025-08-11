import { Text, View, StyleSheet, ImageSourcePropType, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from '@/app/components/Button';
import ImageViewer from '@/app/components/ImageViewer';
import IconButton from '@/app/components/IconButton';
import CircleButton from '@/app/components/CircleButton';
import EmojiPicker from '@/app/components/EmojiPicker';
import EmojiList from '@/app/components/EmojiList';
import EmojiSticker from '@/app/components/EmojiSticker';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const imageRef = useRef(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  if (status === null) {
    requestPermission();
  }

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
  // Verifica se a referência para a imagem existe
  if (!imageRef.current) return;

  
  if (Platform.OS === 'web') {
    try {
      // Captura o elemento DOM da ref (já que no Web a View vira uma div)
      const node = imageRef.current;

      const dataUrl = await domtoimage.toJpeg(node, {
        quality: 0.95,     
        width: 320,        
        height: 440,       
      });

      // Cria um link para baixar a imagem
      const link = document.createElement('a');
      link.download = 'car.jpeg'; 
      link.href = dataUrl;              
      link.click();                    

      
      alert('Imagem baixada com sucesso!');
    } catch (error) {
      
      console.error('Erro ao salvar imagem no Web:', error);
      alert('Erro ao salvar imagem no navegador.');
    }

  } else {
   
    try {
     
      if (!status?.granted) {
        const permission = await requestPermission();
        if (!permission.granted) {
          alert('Permissão negada para salvar imagem.');
          return;
        }
      }

      // Captura a View como imagem usando react-native-view-shot
      const uri = await captureRef(imageRef, {
        format: 'png',   
        quality: 1,       
      });

      // Salva a imagem capturada na galeria usando MediaLibrary
      await MediaLibrary.saveToLibraryAsync(uri);

     
      alert('Imagem salva na galeria com sucesso!');
    } catch (error) {
     
      console.error('Erro ao salvar imagem no mobile:', error);
      alert('Erro ao salvar imagem no dispositivo.');
    }
  }
};

  
  return (
    <GestureHandlerRootView style={ styles.container}>
    <Text style={styles.title}>Bem vindos ao Sítio Urbano</Text>
      <View style={styles.imageContainer}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
            {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
          </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Voltar" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Salvar" onPress={onSaveImageAsync} />
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