import './FetchApi.css';
import PokemonApi from './apis/pokemon-api/PokemonApi';
import ReactFetchJson from './apis/react-fetch-json/ReactFetchJson';

function FetchApi() {
  return (
    <div className="fetch-api">
      <div className="sub-content-item">
        <ReactFetchJson />
      </div>
      <div className="sub-content-item">
        <PokemonApi />
      </div>
    </div>
  );
}

export default FetchApi;
