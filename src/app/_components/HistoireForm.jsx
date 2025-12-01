'use client';

const HistoireForm = ({formAction, showName, children}) => {
    return (
        <form
        action={formAction}
        className="histoire-form bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
        <h2 className="text-2xl font-bold mb-4 text-white">Créer une Nouvelle Histoire</h2>
       
            <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="titre">Titre</label>
            <input
            type="text"
            id="titre"
            name="titre"
            required
            placeholder="Entrer votre titre"
            className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
            />
        </div>



        <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="synopsis">Synopsis :</label>
            <input
            type="text"
            id="synopsis"
            name="synopsis"
            required
            placeholder="Entrer votre synopsis"
            className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
            />
        </div>
        <div className="theme mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="banniere">Bannière :</label>

            <select
                id="banniere"
                name="banniere"
                aria-label="Sélection de thème"
                size={5}
                className="w-full max-h-40 overflow-y-auto rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
            >
                <option value="aventure">Aventure</option>
                <option value="fantastique">Fantastique</option>
                <option value="mystere">Mystère</option>
                <option value="science-fiction">Science-fiction</option>
                <option value="romance">Romance</option>
            </select>
        </div>
        <div className="mb-4">
            <button
            type="button"
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
            >
            Ajouter une musique
            </button>
        </div>

        <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded"
        >
            Continuer
        </button>

            {children}
        </form>
    );
}

export default HistoireForm;