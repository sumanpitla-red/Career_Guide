import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepWrapper from '../components/StepWrapper';

const Success = () => {
  const navigate = useNavigate();

  return (
    <StepWrapper>
      <div className="home-container">
        <div className="card" style={{ padding: "50px", textAlign: "center" }}>
          <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🎉</div>
          <h1 style={{ color: "#28a745", fontSize: "2.5rem" }}>Success!</h1>
          <p className="inspiring-text">
            Your career roadmap has been successfully submitted and stored. 
            Remember, a goal without a plan is just a wish. You've taken the first step towards your professional dreams!
          </p>
          <button 
            className="btn-primary" 
            onClick={() => navigate('/')}
            style={{ marginTop: "30px" }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </StepWrapper>
  )
}

export default Success;
