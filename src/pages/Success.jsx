import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StepWrapper from '../components/StepWrapper';
import { FormContext } from '../context/FormContext';

const Success = () => {
  const navigate = useNavigate();
  const { resetForm } = useContext(FormContext);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <StepWrapper>
      <div className="home-container">
        <div className="card" style={{ padding: "50px", textAlign: "center" }}>
          <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🎉</div>
          <h1 style={{ color: "#28a745", fontSize: "2.5rem" }}>Success!</h1>
          <p className="inspiring-text">
            Thank you for taking the time to share your professional journey.
            Your insights will help students who lack exposure, mentorship,
            and structured guidance.
          </p>

          <p className="inspiring-text" style={{ marginTop: "15px" }}>
            Because of professionals like you, talent will no longer be limited
            by lack of direction. Your contribution creates real impact.
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
