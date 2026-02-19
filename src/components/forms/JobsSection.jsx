import { useState } from "react";

export default function JobsSection({ jobs, onChange }) {
    const emptyJob = {
        postName: "",
        postType: "",
        organisationType: "",
        govtLevel: "",
        eligibility: "",
        conductedExam: "",
        salary: "",
        officialWebsite: "",
        notificationFrequency: "",
        syllabus: "",
        previousPapers: "",
    };

    const handleInputChange = (index, field, value) => {
        const updated = [...jobs];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAddMore = () => {
        onChange([...jobs, emptyJob]);
    };

    const handleRemove = (index) => {
        const updated = jobs.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <div className="section-container">
            <h3>Job Opportunities</h3>
            {jobs.map((job, index) => (
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
                        <h4 style={{ margin: 0 }}>Job Profile {index + 1}</h4>
                        {jobs.length > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                style={{ backgroundColor: "#ff4d4d", color: "white", padding: "5px 10px", fontSize: "14px" }}
                            >
                                Remove Job
                            </button>
                        )}
                    </div>

                    <div className="form-grid">
                        <div>
                            <label>Name of the Post</label>
                            <input
                                type="text"
                                placeholder="e.g. Software Engineer"
                                value={job.postName}
                                onChange={(e) =>
                                    handleInputChange(index, "postName", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Type of Post</label>
                            <select
                                value={job.postType}
                                onChange={(e) =>
                                    handleInputChange(index, "postType", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="Regular">Regular</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        <div>
                            <label>Organisation Type</label>
                            <select
                                value={job.organisationType}
                                onChange={(e) =>
                                    handleInputChange(index, "organisationType", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="Private">Private</option>
                                <option value="Government">Government</option>
                                <option value="Aided">Aided</option>
                            </select>
                        </div>

                        {job.organisationType === "Government" && (
                            <div>
                                <label>Government Level</label>
                                <select
                                    value={job.govtLevel}
                                    onChange={(e) =>
                                        handleInputChange(index, "govtLevel", e.target.value)
                                    }
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="State">State</option>
                                    <option value="Central">Central</option>
                                </select>
                            </div>
                        )}

                        <div>
                            <label>Eligibility</label>
                            <input
                                type="text"
                                placeholder="e.g. B.Tech in CSE"
                                value={job.eligibility}
                                onChange={(e) =>
                                    handleInputChange(index, "eligibility", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Conducted Examination</label>
                            <input
                                type="text"
                                placeholder="e.g. UPSC, SSC CGL"
                                value={job.conductedExam}
                                onChange={(e) =>
                                    handleInputChange(index, "conductedExam", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label>Salary</label>
                            <input
                                type="text"
                                placeholder="e.g. ₹50,000 – ₹80,000 per month"
                                value={job.salary}
                                onChange={(e) =>
                                    handleInputChange(index, "salary", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Official Website</label>
                            <input
                                type="url"
                                placeholder="https://example.com"
                                value={job.officialWebsite}
                                onChange={(e) =>
                                    handleInputChange(index, "officialWebsite", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label>Notification Frequency</label>
                            <select
                                value={job.notificationFrequency}
                                onChange={(e) =>
                                    handleInputChange(index, "notificationFrequency", e.target.value)
                                }
                            >
                                <option value="">Select</option>
                                <option value="Yearly">Yearly</option>
                                <option value="Twice a Year">Twice a Year</option>
                                <option value="Occasionally">Occasionally</option>
                            </select>
                        </div>

                        <div>
                            <label>Syllabus (Link or Short Description)</label>
                            <input
                                type="text"
                                placeholder="Link or description"
                                value={job.syllabus}
                                onChange={(e) =>
                                    handleInputChange(index, "syllabus", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label>Previous / Sample Question Papers</label>
                            <input
                                type="text"
                                placeholder="Link or description"
                                value={job.previousPapers}
                                onChange={(e) =>
                                    handleInputChange(index, "previousPapers", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button type="button" onClick={handleAddMore} style={{ backgroundColor: "#213547", color: "white", border: "1px solid #535bf2" }}>
                + Add Another Job Profile
            </button>
        </div>
    );
}
