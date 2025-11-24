
"use client";
import Link from "next/link";
import Footer from "./Footer.jsx"
import Nav from "./Nav.jsx"

import "../_components/Nav.css"
import "../_components/Footer.css"
import "../_components/MainPageClient.css"
import "../_components/StoryVisualizerPage.css"

const StoryVisualizerPage = () => {
    return (
        <div className="page-container">
            <Nav />
            <p>storyVisualisationPage</p>
            <Footer />
        </div >
    )
}

export default StoryVisualizer;

