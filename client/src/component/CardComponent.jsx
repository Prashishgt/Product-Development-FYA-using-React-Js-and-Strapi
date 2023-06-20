import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MatchList from './MatchList';


export default function CardComponent({ gameName, matches }) {
  return (
    <Card sx={{ width: "350px", height: "300px", backgroundColor: "#e6dfdf" }}>
      <CardContent>
        <div className="card__wrapper">
          <h3>{gameName}</h3>
          <div className="match__list">
            {matches.map((match) => (
              <MatchList
                firstFlag={match.attributes.firstFlag}
                time={match.attributes.time}
                lastFlag={match.attributes.lastFlag}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
