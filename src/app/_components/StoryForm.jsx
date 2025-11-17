"use client";

import "../_components/Nav.css"
import "../_components/Footer.css"
import "../_components/MainPageClient.css"
import "../_components/StoryForm.css"

import Footer from "./Footer.jsx"
import Nav from "./Nav.jsx"

const CreateStory = () => {
    return (
        <div className="story-form-container">
            <img className="bg" src="../../../img/blue-purple_gradient.png" alt="" />
            <Nav />

            <h1 className="h1-story-form">Nouvelle histoire</h1>
            <form className="story-form" >
                <label for="title">Titre</label>
            </form>



            {/* <form class="story-creation">
                <label for="title">Titre</label>
                <input id="title" name="title" type="text" placeholder="Écrire..." required ></input>

                <label for="synopsis">Synopsis</label>
                <textarea id="synopsis" name="synopsis" placeholder="Écrire..." rows="4"></textarea>

                <button type="button" class="banner-btn">Choisir une image de bannière</button>
                <button type="button" class="music-btn">
                    <span class="icon">🎵</span>
                    Ajouter une musique
                </button>

                <div class="divider"></div>
                <button type="submit" class="continue-btn">Continuer</button>
            </form> */}


            <div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default CreateStory;