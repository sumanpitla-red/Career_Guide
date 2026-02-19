import { useState } from "react";

export default function ScholarshipsSection({ scholarships, onChange }) {
    const emptyScholarship = {
        scholarshipName: "",
        providerType: "",
        scholarshipType: "",
        categoryEligibility: "",
        incomeLimit: "",
        amount: "",
        renewalType: "",
        officialWebsite: "",
    };

    const handleInputChange = (index, field, value) => {
        const updated = [...scholarships];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAddMore = () => {
        onChange([...scholarships, emptyScholarship]);
    };

    const handleRemove = (index) => {
        const updated = scholarships.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <div className="section-container">
            <h3>Scholarships</h3>
            {scholarships.map((item, index) => (
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
                        <h4 style={{ margin: 0 }}>Scholarship {index + 1}</h4>
                        {scholarships.length > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                style={{ backgroundColor: "#ff4d4d", color: "white", padding: "5px 10px", fontSize: "14px" }}
                            >
                                Remove Scholarship
                            </button>
                        )}
                    </div>

                    <div className="form-grid">
                        <div>
                            <label>Scholarship Name</label>
                            <input
                                type="text"
                                placeholder="e.g. National Merit Scholarship"
                                value={item.scholarshipName}
                                onChange={(e) =>
                                    handleInputChange(index, "scholarshipName", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Provider Type</label>
                            <select
                                value={item.providerType}
                                onChange={(e) =>
                                    handleInputChange(index, "providerType", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="Government">Government</option>
                                <option value="Private">Private</option>
                                <option value="University">University</option>
                                <option value="NGO">NGO</option>
                            </select>
                        </div>

                        <div>
                            <label>Scholarship Type</label>
                            <select
                                value={item.scholarshipType}
                                onChange={(e) =>
                                    handleInputChange(index, "scholarshipType", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="Merit-Based">Merit-Based</option>
                                <option value="Need-Based">Need-Based</option>
                                <option value="Category-Based">Category-Based</option>
                                <option value="Sports">Sports</option>
                                <option value="Research">Research</option>
                            </select>
                        </div>

                        <div>
                            <label>Category Eligibility</label>
                            <select
                                value={item.categoryEligibility}
                                onChange={(e) =>
                                    handleInputChange(index, "categoryEligibility", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="All">All Categories</option>
                                <option value="SC/ST">SC/ST</option>
                                <option value="SC/ST/OBC">SC/ST/OBC</option>
                                <option value="SC/ST/OBC/EWS">SC/ST/OBC/EWS</option>
                                <option value="General">General</option>
                            </select>
                        </div>

                        <div>
                            <label>Annual Family Income Limit</label>
                            <input
                                type="text"
                                placeholder="e.g. Below ₹8,00,000"
                                value={item.incomeLimit}
                                onChange={(e) =>
                                    handleInputChange(index, "incomeLimit", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label>Scholarship Amount</label>
                            <input
                                type="text"
                                placeholder="e.g. ₹50,000 per year"
                                value={item.amount}
                                onChange={(e) =>
                                    handleInputChange(index, "amount", e.target.value)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label>Renewal Type</label>
                            <select
                                value={item.renewalType}
                                onChange={(e) =>
                                    handleInputChange(index, "renewalType", e.target.value)
                                }
                                required
                            >
                                <option value="">Select</option>
                                <option value="One-Time">One-Time</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <div>
                            <label>Official Website</label>
                            <input
                                type="url"
                                placeholder="https://example.com"
                                value={item.officialWebsite}
                                onChange={(e) =>
                                    handleInputChange(index, "officialWebsite", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button type="button" onClick={handleAddMore} style={{ backgroundColor: "#213547", color: "white", border: "1px solid #535bf2" }}>
                + Add Another Scholarship
            </button>
        </div>
    );
}
