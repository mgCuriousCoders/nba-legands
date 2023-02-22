import { CSSTransition } from "react-transition-group";
import Card from "react-bootstrap/Card";
import { useState } from "react";
const PlayerCards = ({ name, img, statistics }) => {
  //   const { name, img, statistics } = props;
  const [showFront, setShowFront] = useState(true);

  return (
    <CSSTransition in={showFront} timeout={300} classNames="flip">
      <Card
        className="rounded-2 m-auto card"
        role="button"
        onClick={() => setShowFront((v) => !v)}
      >
        <div className="card-back">
          <div className="back-ul">
            <ul>
              {statistics.map((item, i) => {
                return (
                  <li key={i} className="h5 text-start list-unstyled">
                    🏀{item}
                  </li>
                );
              })}
            </ul>
          </div>
          <Card.Footer>
            <Card.Title>{name}</Card.Title>
          </Card.Footer>
        </div>
        <div className="card-front">
          <Card.Img variant="top" src={img} className="player-logo" />
          <Card.Footer>
            <Card.Title>{name}</Card.Title>
          </Card.Footer>
        </div>
      </Card>
    </CSSTransition>
  );
};
export default PlayerCards;
