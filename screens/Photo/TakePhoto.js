import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import { Camera } from "expo-camera";
import constants from "../../constants";
import { TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles";
const View = styled.View`
  flex: 1;
  justify-content : center;
  align-items:center;`;

const Text = styled.Text``;

const Button = styled.View`
width:100px;
height:100px;
border-radius : 50px;
border: 10px solid ${styles.lightGreyColor};
`;

export default ({ navigation }) => {
  const cameraRef = useRef();
  const [canTakePhoto,setCanTakePhoto] =useState(true);
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const takePhoto = async() => {
    if(!canTakePhoto){
      return ;
    }
    try{
      setCanTakePhoto(false);
      const {uri} = await cameraRef.current.takePictureAsync({
        quality :1,
        exif:true
      });
      const assets = await MediaLibrary.createAssetAsync(uri);
      setCanTakePhoto(true);
      navigation.navigate("UploadPhoto",{photo:assets})
    }catch(e){
      console.log(e);
      setCanTakePhoto(true);
    }
  }

  const askPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === "granted") {
        setHasPermission(true);
      }
    } catch (e) {
      console.log(e, "Location : SelectPhotoTab");
      setHasPermission(false);
    } finally {
      setLoading(false);
    }
  };

  const toggleType = () => {
    if(type===Camera.Constants.Type.front){
      setType(Camera.Constants.Type.back);
    }else{
      setType(Camera.Constants.Type.front);
    }
  }

  useEffect(() => {
    askPermissions();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : hasPermission ? (
        <>
        <Camera
          ref={cameraRef}
          type={type}
          style={{ width: constants.width, 
            height: constants.height / 2 ,
            justifyContent:"flex-end",
            padding:15
          }}
        >
          <TouchableOpacity onPress={toggleType}>
              <Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-reverse-camera"
                    : "md-reverse-camera"
                }
                size={28}
                color={styles.greyColor}
              />
          </TouchableOpacity>
        </Camera>
        <View>
          <TouchableOpacity onPress={takePhoto} >
          <Button/>
          </TouchableOpacity>
        </View>
        </>
      ) : null}
    </View>
  );
};
