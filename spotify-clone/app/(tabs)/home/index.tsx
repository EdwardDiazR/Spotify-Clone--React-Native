import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors, ScreenMeasurements } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AlbumCard } from "@/components/album/AlbumCard";
import { AlbumInfo } from "@/Models/Album";
import TrackPlayer from "react-native-track-player";
import { Audio } from "expo-av";
import { BlurView } from "expo-blur";

export default function index() {
  const { bottom } = useSafeAreaInsets();
  const size = 40;
  const Albums: AlbumInfo[] = [
    {
      artist: "Adele",
      title: "Me",
    },
  ];
  const [sound, setSound] = useState<any>();
  const [IsPlayinSong, SetIsPlayingSong] = useState<boolean>(false);

  interface Track {
    title: string;
    path: string;
  }

  const ohnana: Track = {
    path: require("@/assets/song/Kapo-Ohnana.mp3"),
    title: "Ohnana",
  };

  async function playSound(track: Track) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require(track.path));

    setSound(sound);
    console.log("Playing Sound");
    SetIsPlayingSong(true);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={[styles.container, {}]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          paddingVertical: 7,
        }}
      >
        <View
          style={{
            borderRadius: 100,
            backgroundColor: Colors.green.primary,
            height: size,
            width: size,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              color: "white",
            }}
          >
            ED
          </Text>
        </View>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Good night
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <BlurView style={{ position: "absolute", bottom: 0 }}>
          <Text style={{ color: "white" }}>
            {IsPlayinSong ? "Sonando" : "Pausado"}
          </Text>
        </BlurView>
        <View style={{ flex: 1, paddingBottom: bottom + 60 }}>
          <Text>Trending Albums</Text>
          {Albums.map((album: AlbumInfo, i: number) => {
            return (
              <AlbumCard key={i} artist={album.artist} title={album.title} />
            );
          })}
         
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    paddingHorizontal: ScreenMeasurements.horizontalPadding + 5,
  },
});
