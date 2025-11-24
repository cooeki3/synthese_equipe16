"use server";
import { ajouterHistoires, updateHistoire } from "@/app/_data/histoires";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export async function addHistoire(formData) {
    // Construire l'objet histoire à partir du formulaire
    const histoire = {
        id: formData.get("id") || uuidv4(),
        titre: formData.get("titre"),
        synopsis: formData.get("synopsis"),
        banniere: formData.get("banniere"),
        musique: formData.get("musique") || null,
        creator_id: formData.get("creator_id") || null,
    };

    try {
        console.log("addHistoire: préparation insertion =>", histoire);
        // si creator_id manquant, utiliser un fallback 'anonyme' pour éviter l'erreur NOT NULL
        if (!histoire.creator_id) {
            console.warn("addHistoire: creator_id manquant, utilisation du fallback 'anonyme'.");
            histoire.creator_id = 'anonyme';
        }
        await ajouterHistoires(histoire);
        // après création, rediriger vers la page d'édition pour cet id
        try {
            redirect(`/histoire/${histoire.id}`);
        } catch (e) {
            // si redirect n'est pas possible dans ce contexte on retourne l'objet
            return { success: true, histoire };
        }
    } catch (error) {
        console.error("Erreur addHistoire:", error);
        return { success: false, error: String(error) };
    }
}

export async function editHistoire(formData) {
    const id = formData.get("id");
    const payload = {
        titre: formData.get("titre"),
        synopsis: formData.get("synopsis"),
        banniere: formData.get("banniere"),
        musique: formData.get("musique") || null,
    };

    try {
        if (!id) {
            return { success: false, error: "id manquant" };
        }
        await updateHistoire(id, payload);
        // après mise à jour, rester sur la même page ou rediriger si souhaité
        try {
            redirect(`/histoire/${id}`);
        } catch (e) {
            return { success: true };
        }
    } catch (error) {
        console.error("Erreur editHistoire:", error);
        return { success: false, error: String(error) };
    }
}