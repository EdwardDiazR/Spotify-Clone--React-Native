import { View, Text, Image } from "react-native";
import React from "react";
import { AlbumInfo } from "@/Models/Album";

export const AlbumCard = (albumInfo: AlbumInfo) => {
  const albumCoverSize = 180;

  return (
    <View style={{ maxWidth: 200, justifyContent: "center" }}>
      <Image
        source={{
          uri: "https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134429/Spotify-Good-Contrast-Examples-2-480x476.jpg",
        }}
        style={{
          height: albumCoverSize,
          backgroundColor: "red",
          width: albumCoverSize,
          borderRadius: 7,
        }}
      />
      <Text style={{ color: "white" }}>{albumInfo.title}</Text>
      <Text style={{ color: "lightgray" }}>{albumInfo.artist}</Text>
    </View>
  );
};
