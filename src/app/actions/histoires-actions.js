"use server";
export async function addHistoire(formData) {

    const histoire = {
        titre: formData.get("titre"),
        synopsis: formData.get("synopsis"),
        banniere: formData.get("banniere"),
        musique: formData.get("musique"),
        creator_id: formData.get("creator_id")
    };

    return { histoire };
}