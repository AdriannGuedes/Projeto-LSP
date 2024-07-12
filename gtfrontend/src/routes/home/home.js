import "./home.css";
import Cabecario from "../../components/cabecario/cabecario"
import CarWashList from '../../components/card/cardWashList';


const Home = () => {
    return (
        <div>
            <Cabecario/>
            <CarWashList/>
        </div>
    );
};

export default Home;