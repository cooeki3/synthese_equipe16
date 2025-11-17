import HistoireForm from "@/app/_components/HistoireForm";



const creer = () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const sumbmitAction = async (formData) => {
        setIsLoading(true);
        setError("");

        const titre = formData.get("titre");
        const synopsis = formData.get("synopsis");
        const banniere = formData.get("banniere");
        const musique = formData.get("musique");

        const {data, error}  = await createHistoire({
            titre : titre,
            synopsis : synopsis,
            banniere : banniere,
            musique : musique
        }); 
        if (error) {
            setError("Une erreur est survenue lors de la création de l'histoire.");
            setIsLoading(false);
            return;
        } else {
            router.push("/histoire/utilisateur");
            router.refresh();
        }

    };





    return (
        <div>
            <h1>Créer une Nouvelle Histoire</h1>
            {/* Contenu pour créer une nouvelle histoire */}
            <HistoireForm
            formAction={sumbmitAction}>

            </HistoireForm>
        </div>
    );
};

export default creer;