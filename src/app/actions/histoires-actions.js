"use server";
import { ajouterHistoires } from "@/app/_data/histoires";

export async function addHistoire(formData) {
    // Construire l'objet histoire à partir du formulaire
    const histoire = {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        titre: formData.get("titre"),
        synopsis: formData.get("synopsis"),
        banniere: formData.get("banniere"),
        musique: formData.get("musique") || null,
        creator_id: formData.get("creator_id") || null,
    };

    try {
        console.log("addHistoire: préparation insertion =>", histoire);
        await ajouterHistoires(histoire);
        return { success: true, histoire };
    } catch (error) {
        console.error("Erreur addHistoire:", error);
        return { success: false, error: String(error) };
    }
}