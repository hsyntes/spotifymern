import { useQuery } from "react-query";
import getAllMusics from "../utils/getAllMusics";
import Spinner from "../components/ui/Spinner";
import Playlist from "../components/playlist/Playlist";
import PlaylistHeader from "../components/playlist/PlaylistHeader";

const MusicsPage = () => {
  const { data: musics, isLoading: isMusicsLoading } = useQuery({
    queryKey: "getAllMusics",
    queryFn: getAllMusics,
  });

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
