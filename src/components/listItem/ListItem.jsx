import { useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import "./ListItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [youtubeID] = useState("GTA20VJeyYk");

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTyDAmzRmRNYNP1o8GGL9apQQz0sAZ19m600IkGZb0q4mIuAZyXGeu1weOuNnTbHSTp5fazXEr8L-52ZJgG-x47nVrNF.jpg?r=6b0"
        alt=""
      />
      {isHovered && (
        <>
          <iframe
            title="Youtube player"
            src={`https://youtube.com/embed/${youtubeID}?autoplay=${false}`}
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2013</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              possimus ipsa corporis.
            </div>
            <div className="genre">Action, Anime, Fantasy</div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default ListItem;
