import { useState } from "react";

export default function ExamsSection({ exams, onChange, levelName }) {
    const emptyExam = {
        examName: "",
        eligibility: "",
        ageLimit: "",
        categoryCutoffs: [{ category: "General", cutoff: "" }],
        examType: "",
        negativeMarking: "",
        note: "",
    };

    const handleInputChange = (index, field, value) => {
        const updated = [...exams];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleCategoryCutoffChange = (examIndex, cutoffIndex, field, value) => {
        const updated = [...exams];
        updated[examIndex].categoryCutoffs[cutoffIndex][field] = value;
        onChange(updated);
    };

    const handleAddCategoryCutoff = (examIndex) => {
        const updated = [...exams];
        updated[examIndex].categoryCutoffs.push({ category: "", cutoff: "" });
        onChange(updated);
    };

    const handleRemoveCategoryCutoff = (examIndex, cutoffIndex) => {
        const updated = [...exams];
        updated[examIndex].categoryCutoffs = updated[examIndex].categoryCutoffs.filter((_, i) => i !== cutoffIndex);
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
            <h3>Entrance Examinations {levelName ? `for ${levelName}` : ""}</h3>
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
                        <div style={{ gridColumn: 'span 2' }}>
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

                        <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                            <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Cutoffs by Category</label>
                            {exam.categoryCutoffs.map((catCutoff, catIdx) => (
                                <div key={catIdx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-end' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ fontSize: '12px' }}>Category</label>
                                        <select
                                            value={catCutoff.category}
                                            onChange={(e) => handleCategoryCutoffChange(index, catIdx, "category", e.target.value)}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="General">General</option>
                                            <option value="OBC">OBC</option>
                                            <option value="SC/ST">SC/ST</option>
                                            <option value="EWS">EWS</option>
                                            <option value="Minority">Minority</option>
                                            <option value="All">All</option>
                                        </select>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ fontSize: '12px' }}>Cutoff</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 90 Percentile"
                                            value={catCutoff.cutoff}
                                            onChange={(e) => handleCategoryCutoffChange(index, catIdx, "cutoff", e.target.value)}
                                            required
                                        />
                                    </div>
                                    {exam.categoryCutoffs.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveCategoryCutoff(index, catIdx)}
                                            style={{ backgroundColor: "#ff4d4d", padding: '10px', height: '42px' }}
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => handleAddCategoryCutoff(index)}
                                style={{ backgroundColor: "#2e7d32", fontSize: '12px', padding: '5px 10px', marginTop: '5px' }}
                            >
                                + Add Category Cutoff
                            </button>
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

                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Additional Notes / Disclaimer</label>
                            <textarea
                                placeholder="e.g. Dates are subject to change..."
                                value={exam.note || ""}
                                onChange={(e) => handleInputChange(index, "note", e.target.value)}
                                rows={3}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))
            }

            <button type="button" onClick={handleAddMore} style={{ backgroundColor: "#213547", color: "white", border: "1px solid #535bf2" }}>
                {exams.length === 0 ? "Add Entrance Examination" : "+ Add Another Exam"}
            </button>
        </div >
    );
}
