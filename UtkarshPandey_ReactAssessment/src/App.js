
import './App.css';
import BasketballPlayerCard from './components/BasketballPlayerCard';

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
      name="LeBron James"
      image="https://popslider.com/wp-content/uploads/2020/09/LeBron-James.png"
      position="Forward"
      stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1,
      reboundsPerGame: 10.5 }}
      />
    </div>
  );
}

export default App;
