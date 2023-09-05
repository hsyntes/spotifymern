import { useQuery } from "react-query";
import getAllMusics from "../utils/getAllMusics";
import Spinner from "../components/ui/Spinner";
import Playlist from "../components/playlist/Playlist";
import PlaylistHeader from "../components/playlist/PlaylistHeader";
import { useEffect } from "react";

const MusicsPage = () => {
  // Get all musics
  const { data: musics, isLoading: isMusicsLoading } = useQuery({
    queryKey: "getAllMusics",
    queryFn: getAllMusics,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isMusicsLoading)
    return (
      <center>
        <Spinner />
      </center>
    );

  return (
    <>
      <PlaylistHeader title="SpotifyMERN" musics={musics} />
      <Playlist musics={musics} />
    </>
  );
};

export default MusicsPage;
