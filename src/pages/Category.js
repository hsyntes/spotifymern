import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import getMusicByCategory from "../utils/getMusicsByCategory";
import Spinner from "../components/ui/Spinner";
import Playlist from "../components/playlist/Playlist";
import PlaylistHeader from "../components/playlist/PlaylistHeader";

const CategoryPage = () => {
  const params = useParams();

  const { category } = params;

  const { data: musics, isLoading: isMusicsLoading } = useQuery(
    ["getMusicByCategory", category],
    {
      queryFn: () => getMusicByCategory(category),
      refetchOnWindowFocus: false,
    }
  );

  if (isMusicsLoading)
    return (
      <center>
        <Spinner />
      </center>
    );

  return (
    <>
      <PlaylistHeader type="category" title={category} musics={musics} />
      <Playlist musics={musics} />
    </>
  );
};

export default CategoryPage;
