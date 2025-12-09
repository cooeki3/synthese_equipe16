"use client";
import Link from "next/link";
import { BookOpen } from "lucide-react";

const truncate = (value, max = 180) => {
  if (!value) return "Pas de synopsis pour le moment.";
  if (value.length <= max) return value;
  return `${value.slice(0, max)}…`;
};

const resolveImage = (theme) => {
  if (!theme) return "../../../img/placeholder.png";
  if (theme.startsWith("http") || theme.startsWith("/") || theme.startsWith("./")) {
    return theme;
  }
  return `../../../img/${theme}`;
};

const RecemmentPubliees = ({ stories = [] }) => {
  if (!stories.length) {
    return (
      <section>
        <h2 className="section-title recently-published-h2" id="stories">Récemment publiées</h2>
        <p className="placeholder-text">
          Aucune histoire publique n'est disponible pour l'instant. Parcourez les
          créations dès qu'elles seront publiées — même en mode invité.
        </p>
      </section>
    );
  }

  return (
    <section >
      <h2 className="section-title recently-published-h2" id="stories">Récemment publiées</h2>
      <div className="swiper-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {stories.map((story, index) => (

              <div
                className={`swiper-slide ${index === 0 ? "swiper-first-slide" : ""
                  } ${index === stories.length - 1 ? "swiper-last-slide" : ""}`}
                key={story.id}
              >
                <div className="card">
                  <Link
                    href={`/storyoverview/${story.id}`}
                    className="card-overlay"
                    aria-label={`Lire ${story.title}`}
                  />
                  <div className="img-container">
                    <img
                      src={resolveImage(story.theme)}
                      className="slide-img"
                      alt={story.title || "Illustration de l'histoire"}
                    />
                    <div className="swiper-buttons-flex-container">
                      <Link
                        href={`/storyoverview/${story.id}`}
                        className="read-button"
                        aria-label={`Lire ${story.title}`}
                      >
                        <p>Lire</p>
                        <BookOpen className="read-icon" />
                      </Link>
                    </div>
                  </div>
                  <h3>{story.title}</h3>
                  <p className="swiper-synopsis">{truncate(story.synopsis)}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecemmentPubliees;
