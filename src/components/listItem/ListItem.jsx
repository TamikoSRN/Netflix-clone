import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import "./ListItem.scss";

const ListItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWBSIsuEE08Fly6ugJ4krgHGBlajIpZ8jliwQ1QR8jvyZbNLkq3UXLLVzyIJdoED_xNum5pEDY9R6bWTjeWs-2ZdgZvpfs3bgK4VPfigQtJMVnWMDSg38dHusm-cfQ.jpg?r=5d0"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpOutlined />
          <ThumbDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
