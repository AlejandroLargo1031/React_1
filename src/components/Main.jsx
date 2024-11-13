import { Link } from "react-router-dom";
import "../App.css";
import Contenido from "./Contenido";
import Footer from "./Footer";
import Header from "./Header";

const user = {
  name: "Hedy Lamarr",

  imageUrl: "https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png",

  imageSize: 250,
};
function Main() {
  return (
    <div>
      <Header />
      <h1>Lista de componentes de navegacion</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Input">Input</Link></li>
        <li><Link to="/Modal">Modal</Link></li>
      </ul>
      <Contenido
        saludo={"Hello Word"}
        contenido={"Este es mi componente react con props"}
        usuario={user}
      />
      <Footer />
    </div>
  );
}

export default Main;