import Header from "../../component/Header/Header";
import Drinks from "./Drinks";
import './Home.scss'

function Home (){
    return (
        <div className="container">
            <Header />
            <Drinks />
        </div>
    );
};
export default Home;