import { useState } from "react";

export default function ExamsSection({ exams, onChange }) {
    const emptyExam = {
        examName: "",
        eligibility: "",
        ageLimit: "",
        cutoff: "",
        examType: "",
        negativeMarking: "",
    };

    const handleInputChange = (index, field, value) => {
        const updated = [...exams];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAddMore = () => {
        onChange([...exams, emptyExam]);
    };

    const handleRemove = (index) => {
        const updated = exams.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <div className="section-container">
            <h3>Entrance Examinations</h3>
            {exams.map((exam, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "20px",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h4 style={{ margin: 0 }}>Examination {index + 1}</h4>
                        {exams.length > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                style={{ backgroundColor: "#ff4d4d", color: "white", padding: "5px 10px", fontSize: "14px" }}
                            >
                                Remove Exam
                            </button>
                        )}
                    </div>

                    <div className="form-grid">
                        <div>
                            <label>Exam Name</label>
                            <input
                                type="text"
                                placeholder="e.g. JEE Mains"
                                value={exam.examName}
                                onChange={(e) =>
                                    handleInputChange(index, "examName", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Eligibility</label>
                            <input
                                type="text"
                                placeholder="e.g. 12th Pass"
                                value={exam.eligibility}
                                onChange={(e) =>
                                    handleInputChange(index, "eligibility", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Age Limit</label>
                            <input
                                type="text"
                                placeholder="e.g. 17-25 Years"
                                value={exam.ageLimit}
                                onChange={(e) =>
                                    handleInputChange(index, "ageLimit", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Approx Cutoff</label>
                            <input
                                type="text"
                                placeholder="e.g. 90 Percentile"
                                value={exam.cutoff}
                                onChange={(e) =>
                                    handleInputChange(index, "cutoff", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Exam Type</label>
                            <select
                                value={exam.examType}
                                onChange={(e) =>
                                    handleInputChange(index, "examType", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div>
                            <label>Negative Marking</label>
                            <select
                                value={exam.negativeMarking}
                                onChange={(e) =>
                                    handleInputChange(index, "negativeMarking", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))
            }

            <button type="button" onClick={handleAddMore} style={{ backgroundColor: "#213547", color: "white", border: "1px solid #535bf2" }}>
                + Add Another Exam
            </button>
        </div >
    );
}
