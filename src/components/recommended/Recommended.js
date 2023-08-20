import { useQuery } from "react-query";
import Playlist from "../playlist/Playlist";
import getRecommendedMusics from "../../utils/getRecommendedMusics";

const Recommended = () => {
  const { data: musics } = useQuery({
    queryKey: "getRecommendedMusics",
    queryFn: getRecommendedMusics,
  });

  return <Playlist title="Recommended for today" musics={musics} />;
};

export default Recommended;
