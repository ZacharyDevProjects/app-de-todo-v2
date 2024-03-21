import {useNavigate} from "react-router-dom";

function Acceuil() {
    const navigate = useNavigate();
    function navigateToLog() {
    navigate("/login");
    }
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column mb-5">
        <div className="text-wrap fs-1 mb-3" style={{ width: "50vw" }}>
          Une application dédiée à la gestion professionnelle de vos listes de
          tâches en ligne.
        </div>
        <div className="text-wrap fs-4" style={{ width: "50vw" }}>
          grace a cette application vous pourrez planifier plus facilement votre
          travail personnelle et en équipe
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={navigateToLog} className="btn btn-dark" style={{height: "5vh", width: "15vw"}}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Acceuil;
