import React from "react";
import { useNavigate } from "react-router-dom";
import StepWrapper from "../components/StepWrapper";
import lampImg from "../assets/images/lamp.png";
import roadImg from "../assets/images/road.png";
import sparkImg from "../assets/images/spark.png";

const Home = () => {
  const navigate = useNavigate();

  // Inline styles
  const styles = {
    container: {
      width: "100%",
      background: "#f8fafc",
      fontFamily: "'Inter', sans-serif",
      overflowX: "hidden",
      color: "#0f172a",
    },
    contentWrapper: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 20px",
      textAlign: "center",
    },
    heroSection: {
      padding: "110px 20px 100px",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "#ffffff",
    },
    heroTitle: {
      fontSize: "2.8rem",
      fontWeight: 800,
      lineHeight: "1.3",
      marginBottom: "25px",
    },
    highlight: {
      color: "#facc15",
    },
    heroSubtitle: {
      fontSize: "1.1rem",
      maxWidth: "700px",
      margin: "0 auto 35px",
      opacity: 0.85,
      lineHeight: "1.7",
    },
    primaryBtn: {
      background: "#facc15",
      color: "#000",
      padding: "14px 32px",
      border: "none",
      borderRadius: "8px",
      fontWeight: 600,
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    section: {
      padding: "90px 20px",
    },
    darkSection: {
      padding: "90px 20px",
      background: "#0f172a",
      color: "#ffffff",
    },
    sectionTitle: {
      fontSize: "2.3rem",
      fontWeight: 700,
      marginBottom: "20px",
    },
    sectionDescription: {
      maxWidth: "650px",
      margin: "0 auto 50px",
      fontSize: "1.05rem",
      lineHeight: "1.7",
      opacity: 0.75,
    },
    featureGrid: {
      display: "flex",
      justifyContent: "center",
      gap: "35px",
      flexWrap: "wrap",
    },
    featureCard: {
      width: "220px",
      padding: "25px",
      borderRadius: "14px",
      background: "#ffffff",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
      color: "#0f172a",
    },
    featureImg: {
      width: "70%",
      height: "70%",
      objectFit: "contain",
      marginBottom: "15px",
    },
    quoteBox: {
      maxWidth: "700px",
      margin: "0 auto",
      padding: "30px",
      borderRadius: "12px",
      background: "rgba(255, 255, 255, 0.08)",
      fontStyle: "italic",
      lineHeight: "1.6",
      color: "#ffffff",
    },
    visionSection: {
      padding: "90px 20px",
      background: "#ffffff",
    },
    visionHighlight: {
      fontSize: "1.4rem",
      fontWeight: 600,
      color: "#f59e0b",
      marginTop: "20px",
    },
    ctaSection: {
      padding: "100px 20px",
      background: "linear-gradient(135deg, #facc15, #f59e0b)",
      textAlign: "center",
      color: "#000",
    },
    footer: {
      background: "#111827",
      color: "#ffffff",
      textAlign: "center",
      padding: "30px 20px",
      fontSize: "0.9rem",
    },
  };

  return (
    <StepWrapper>
      <div style={styles.container}>
        {/* HERO SECTION */}
        <section style={styles.heroSection}>
  <div style={styles.contentWrapper}>
    <h1 style={styles.heroTitle}>
      Your Experience Can Become Someone’s{" "}
      <span style={styles.highlight}>Roadmap</span>
    </h1>

    <p style={styles.heroSubtitle}>
      Thousands of talented rural and underprivileged students struggle
      not due to lack of ability — but due to lack of structured guidance.
      By sharing your professional journey, challenges, and milestones,
      you help transform confusion into clarity and opportunity.
    </p>

    <button
      style={styles.primaryBtn}
      onClick={() => navigate("/basic-form")}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Contribute Your Journey
    </button>
  </div>
</section>

        {/* PROBLEM SECTION */}
        <section style={styles.section}>
          <div style={styles.contentWrapper}>
            <h2 style={{...styles.sectionTitle, color: "#0f172a"}}>The Problem</h2>
            <p style={{...styles.sectionDescription, color: "#334155"}}>
              Many students in rural areas face career confusion due to limited
              exposure, lack of mentorship, and absence of structured direction.
              Multiple unclear paths create fear and hesitation in decision-making.
            </p>

            <div style={styles.featureGrid}>
              <div style={styles.featureCard}>
                <img src={lampImg} alt="Limited Exposure" style={styles.featureImg} />
                <h3 style={{fontSize: "1.1rem", fontWeight: "600"}}>Limited Exposure</h3>
              </div>

              <div style={styles.featureCard}>
                <img src={roadImg} alt="Directionless Paths" style={styles.featureImg} />
                <h3 style={{fontSize: "1.1rem", fontWeight: "600"}}>Directionless Paths</h3>
              </div>

              <div style={styles.featureCard}>
                <img src={sparkImg} alt="Spark of Potential" style={styles.featureImg} />
                <h3 style={{fontSize: "1.1rem", fontWeight: "600"}}>Spark of Potential</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section style={styles.darkSection}>
          <div style={styles.contentWrapper}>
            <h2 style={{...styles.sectionTitle, color: "#ffffff"}}>The Solution</h2>
            <p style={{...styles.sectionDescription, color: "#ffffff"}}>
              By collecting real-world professional experiences and structuring
              them into clear, milestone-based career roadmaps, we provide
              students with direction, clarity, and confidence.
            </p>

            <div style={styles.quoteBox}>
              Not every student has access to mentors, networks, or career
              counseling. But your experience can become their guide.
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section style={styles.visionSection}>
          <div style={styles.contentWrapper}>
            <h2 style={{...styles.sectionTitle, color: "#0f172a"}}>Our Vision</h2>
            <p style={{...styles.sectionDescription, color: "#334155"}}>
              This platform is built to democratize career guidance. Talent is
              everywhere, but structured exposure and mentorship are not. We aim
              to bridge that gap and provide clarity through professional
              roadmaps.
            </p>

            <div style={styles.visionHighlight}>
              Share your path. Inspire clarity. Create impact.
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        

        {/* FOOTER */}
        <footer style={styles.footer}>
          © 2026 Career Guide Project. All rights reserved.
        </footer>
      </div>
    </StepWrapper>
  );
};

export default Home;