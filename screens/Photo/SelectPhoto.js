import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import Loader from "../../components/Loader";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import constants from "../../constants";
import styles from "../../styles";

const View = styled.View`
  flex: 1;
`;


const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 15px;
  background-color: ${styles.blueColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

export default ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();
  
  const changeSelected = (photo) => {
    setSelected(photo);
  };

  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync();
      const [firstPhoto] = assets;
      setSelected(firstPhoto);
      setAllPhotos(assets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const askPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        setHasPermission(true);
      }
    } catch (e) {
      console.log(e, "Location : SelectPhotoTab");
      hasPermission(false);
    }
  };

  const handleSelected = () => {
    navigation.navigate("UploadPhoto",{photo:selected})
  }
  useEffect(() => {
    askPermissions();
    getPhotos();
  }, []);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          {hasPermission ? (
            <>
              <Image
                style={{ width: constants.width, height: constants.height / 2 }}
                source={{ uri: selected.uri }}
              />
              <Button onPress={handleSelected}>
                <Text>전송</Text>
              </Button>
              <ScrollView
                contentContainerStyle={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                }}
              >
                {allPhotos.map((photo) => (
                  <TouchableOpacity
                    key={photo.id}
                    onPress={() => changeSelected(photo)}
                  >
                    <Image
                      style={{
                        width: constants.width / 3,
                        height: constants.height / 6,
                        opacity : photo.id === selected.id ? 0.5 : 1
                      }}
                      source={{ uri: photo.uri }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          ) : (
            "불허"
          )}
        </View>
      )}
    </View>
  );
};
