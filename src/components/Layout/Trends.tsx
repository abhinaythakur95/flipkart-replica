import "./Trends.css";
import Fashion from '../../assets/Images/Fashion.jpg';
import Beauty from '../../assets/Images/Beauty.jpg';
import Furniture from '../../assets/Images/Furniture.jpg';
import Sports from '../../assets/Images/Sports.jpg';

const trends = [
  {
    title: "Fashion",
   image: Fashion,
  },
  {
    title: "Furniture",
    image: Furniture,
  },
  {
    title: "Beauty",
    image: Beauty,
  },
  {
    title: "Sports",
    image: Sports,
  },
];

const Trends = () => {
  return (
    <div className="trends-container">
      <h2 className="trends-title">Trends you may like</h2>
      <div className="trends-list">
        {trends.map((trend, idx) => (
          <div className="trend-card" key={idx}>
            <img src={trend.image} alt={trend.title} className="trend-img" />
            <div className="trend-label">{trend.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
