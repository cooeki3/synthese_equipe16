
import HistoireTemp from "@/app/_components/HistoireTemp";
import { getHistoireById } from "@/app/_data/histoires";


export default async function Page({ params }) {
    const { id_histoire } = params;
    const histoire = await getHistoireById(id_histoire);

    if (!histoire) {
        return <div className="p-6">Histoire introuvable</div>;
    }

    const initial = {
        id: histoire.id,
        titre: histoire.title,
        synopsis: histoire.synopsis,
        banniere: histoire.theme,
        musique: histoire.musique,
    };  

    return (
        <div>
            {/* StoryFormPage est un composant client qui attend formAction et initial */}
            <HistoireTemp initial={initial} />
        </div>
    );
}
