import React from "react";
import { useNavigate } from "react-router-dom";
import StepWrapper from "../components/StepWrapper";
import lampImg from "../assets/images/lamp.png";
import roadImg from "../assets/images/road.png";
import sparkImg from "../assets/images/spark.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StepWrapper>
      <div className="home-container">

        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              Bridging the Gap Between{" "}
              <span className="highlight">Confusion</span> and{" "}
              <span className="highlight">Clarity</span>
            </h1>

            <p>
              Thousands of talented rural and underprivileged students struggle
              not because of lack of ability — but because of lack of structured
              guidance. Our professional roadmap transforms uncertainty into opportunity.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/basic-form")}
            >
              Start Your Journey
            </button>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="section card-section">
          <h2>The Problem</h2>
          <p className="section-description">
            Many students face career confusion due to limited exposure,
            lack of mentorship, and absence of structured direction.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <img src={lampImg} alt="Limited Exposure" />
              <h3>Limited Exposure</h3>
            </div>

            <div className="feature-card">
              <img src={roadImg} alt="Directionless Paths" />
              <h3>Directionless Paths</h3>
            </div>

            <div className="feature-card">
              <img src={sparkImg} alt="Spark of Potential" />
              <h3>Spark of Potential</h3>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="section dark-section">
          <h2>The Solution</h2>

          <p className="section-description">
            We structure real-world professional experiences into milestone-based
            roadmaps that give students direction, clarity, and confidence.
          </p>

          <div className="quote-box">
            <p>
              "Not every student has access to mentors, networks, or career
              counseling. But your experience can become their guide."
            </p>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="section vision-section">
          <h2>Our Vision</h2>

          <p className="section-description">
            Talent is everywhere — but structured guidance is not.
            We aim to democratize career clarity through accessible,
            professional roadmaps.
          </p>

          <div className="vision-highlight">
            Share your path. Inspire clarity. Create impact.
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-section">
          <h2>Ready to Build Your Future?</h2>
          <p>
            Discover clarity. Follow a structured roadmap.
            Build your future with confidence.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/basic-form")}
          >
            Get Started Now
          </button>
        </section>

        <footer className="footer">
          © 2026 Career Guide Project. All rights reserved.
        </footer>
      </div>
    </StepWrapper>
  );
};

export default Home;