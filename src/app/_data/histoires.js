import "server-only";
import { db } from "@/db";
import { Histoires } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";

export async function getHistoires() {
    const histoiresList = await db.select().from(Histoires);
    return histoiresList;
}

export async function getHistoireById(id) {
    const [row] = await db.select().from(Histoires).where(eq(Histoires.id, id));
    return row || null;
}

export async function ajouterHistoires(histoire) {
    try {
        console.log("ajouterHistoires: objet reçu =>", histoire);
        const result = await db.insert(Histoires).values({
            id: histoire.id,
            title: histoire.titre,
            synopsis: histoire.synopsis,
            theme: histoire.banniere || null,
            musique: histoire.musique || null,
            creator_id: histoire.creator_id || null,
            createdAt: Date.now(),
        });
        console.log("ajouterHistoires: insertion effectuée =>", result);
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'histoire :", error);
        throw error;
    }
}

export async function deleteHistoire(id) {
    try {
        await db.delete(Histoires).where(eq(Histoires.id, id));
    } catch (error) {
        console.error("Erreur lors de la suppression de l'histoire :", error);
        throw error;
    }
}

export async function updateHistoire(id, payload) {
    try {
        const result = await db.update(Histoires).set({
            title: payload.titre,
            synopsis: payload.synopsis,
            theme: payload.banniere || null,
            musique: payload.musique || null,
        }).where(eq(Histoires.id, id));

        return result;
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'histoire :", error);
        throw error;
    }
}