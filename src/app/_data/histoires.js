import "server-only";
import { db } from "@/db";
import { histoires } from "@/db/schema/histoires";
import { eq } from "drizzle-orm";

export async function getHistoires() {
    const histoiresList = await db.select().from(histoires);
    return histoiresList;
}

export async function ajouterHistoires( histoire) {
    try {
    await db.insert(histoires).values({
        id: histoire.id,
        titre: histoire.titre,
        synopsis: histoire.synopsis,
        banniere: histoire.banniere,
        musique: histoire.musique,
        creator_id: histoire.creator_id
    });
} catch (error) {
    console.error("Erreur lors de l'ajout de l'histoire :", error);
    throw error;
}
}

export async function deleteHistoire(id) {
    try {
    await db.delete(histoires).where(eq(histoires.id, id));
    
} catch (error) {
    console.error("Erreur lors de la suppression de l'histoire :", error);
    throw error;
}
}