"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Loading from "./components/Loading/Loading";
import MusicPlayer from "./components/Music/MusicPlayer";
import useUser from "./customHook/useUser";

export default function Home() {
  const [musicList, setMusicList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favSongList, setFavSongList] = useState([]);

  const [selectedMusic, setSelectedMusic] = useState({
    _id: "",
    title: "",
    audio_url: "",
    thumbnail: "",
    artist: "",
  });

  const isFavSong = favSongList?.filter((item) => item._id === selectedMusic._id).length;


  console.log(selectedMusic, "selectedMusic");

  const { getToken } = useUser();

  useEffect(() => {
    async function fetchSongs() {
      setIsLoading(true);
      const url = "https://academics.newtonschool.co/api/v1/music/song";
      const myHeaders = new Headers();
      myHeaders.append("projectID", "69wrdjpfsdpk");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const result = await response.json();
      const data = result.data;

      setMusicList(data);
      setIsLoading(false);
      console.log(data, "New Data");
    }

    try {
      fetchSongs();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    async function getListOfFavoSong() {
      const url =
        "https://academics.newtonschool.co/api/v1/music/favorites/like";

      const myHeaders = new Headers();
      myHeaders.append("projectID", "69wrdjpfsdpk");
      myHeaders.append("Authorization", `Bearer ${getToken}`);
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();
      const songs = data?.data?.songs;

      setFavSongList(songs);
    }

    getListOfFavoSong();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={styles.mainSection}>
          {musicList.map((music) => {
            const { _id, title, audio_url, thumbnail, artist } = music;

            return (
              <>
                <div key={_id} className={styles.cardContainer}>
                  <div
                    onClick={(e) => {
                      setSelectedMusic({
                        _id,
                        title,
                        audio_url,
                        thumbnail,
                        artist,
                      });
                    }}
                  >
                    <div className={styles.images}>
                      <img
                        className={styles.image}
                        src={thumbnail}
                        alt={"thumbnail"}
                      />
                    </div>
                    <div className={styles.detailes}>
                      <h4>{title}</h4>
                      <p style={{ color: "#a8a3a3" }}>{artist.name}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      )}

      {selectedMusic &&  (
        <MusicPlayer
          title={selectedMusic.title}
          _id={selectedMusic._id}
          audio_url={selectedMusic.audio_url}
          thumbnail={selectedMusic.thumbnail}
          isFav={!isFavSong}
        />
      )}
    </>
  );
}
