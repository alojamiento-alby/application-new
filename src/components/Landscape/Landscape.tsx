import { LegacyRef } from "react";
import LandscapeStyled from "./LandscapeStyled";

interface LandscapeProps {
  imageRef?: LegacyRef<HTMLImageElement> | null;
}

const Landscape = ({ imageRef }: LandscapeProps): React.ReactElement => {
  return (
    <LandscapeStyled className="landscape" id="landscape">
      <div className="landscape__logo-container">
        <div className="landscape__logo">
          <img alt="logo" src="img/lc512w.png" ref={imageRef} />
        </div>
      </div>
      <div className="landscape__background"></div>
    </LandscapeStyled>
  );
};

export default Landscape;
