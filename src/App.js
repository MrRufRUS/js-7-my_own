import './App.css';
import CardGrid from './CardGrid';
import './HoverCard.css'; // Импортируйте стили для карточек
import './CardGrid.css'; // Импортируйте стили для сетки карточек
import AutoComplete from './Autocomplete';
import suggestions from './suggestions';
import WeatherCard from './WeatherCard';

const data = [
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Жизнь',
    description: 'Здорово жить'
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Спорт',
    description: 'Спорт - это круто'
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Сон',
    description: 'Спать тоже надо'
  },
  // Добавьте больше карточек по мере необходимости
];

function App() {
  return (
    <div className="App">
      <div className='gallery'>
        <h1>Галерея</h1>
        <CardGrid data={data} />
      </div>
      <div className='sayGoodThings'>
        <h1>Пожелание хорошего дня</h1>
        <AutoComplete suggestions={suggestions}></AutoComplete>
      </div>
      <div className='weather'>
      <h1>Погода</h1>
        <WeatherCard city="Vladivostok" />
      </div>
    </div>
  );
}

export default App;
