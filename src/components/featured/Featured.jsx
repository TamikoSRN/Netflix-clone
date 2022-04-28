import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQ5H9p1Oo1ZCTvhikFJjNem6tF30GFG45QTDoqwAyQktWAwE1dCGDHx_5RYY8OPcaG5jFvV4U6IragO5Z_uohSIrWRTz.jpg?r=85d"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRhgZ-479I-Htp79aIARXsTJzD6XcVCmLcFMRVeLSwpdR-e0hlB78xBcT4SJn2ho7NH_Fnk3p6Jb4bpg9Y0G-fwvSGRIZJZTAfop.png?r=2c5"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, fuga
          in, cupiditate mollitia ex deserunt aliquam ut quia voluptates non
          corporis ipsa aut, eum molestiae. Sequi, magnam itaque.
          Exercitationem, eos.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
