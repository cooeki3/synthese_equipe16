import HistoireForm from "@/app/_components/HistoireForm";
import { addHistoire } from "@/app/actions/histoires-actions";

const Creer = () => {
    // Composant serveur simple : on passe l'action serveur au formulaire client
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Créer une Nouvelle Histoire</h1>
            <HistoireForm formAction={addHistoire} />
        </div>
    );
};

export default Creer;