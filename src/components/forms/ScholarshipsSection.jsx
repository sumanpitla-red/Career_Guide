import { useState } from "react";

export default function ScholarshipsSection({ scholarships, onChange, levelName }) {
    const emptyScholarship = {
        scholarshipName: "",
        providerType: "",
        scholarshipType: "",
        categoryEligibility: "",
        incomeLimit: "",
        categoryAmounts: [{ category: "General", amount: "" }],
        renewalType: "",
        officialWebsite: "",
        note: "",
    };

    const handleInputChange = (index, field, value) => {
        const updated = [...scholarships];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleCategoryAmountChange = (scholarshipIndex, amountIndex, field, value) => {
        const updated = [...scholarships];
        updated[scholarshipIndex].categoryAmounts[amountIndex][field] = value;
        onChange(updated);
    };

    const handleAddCategoryAmount = (scholarshipIndex) => {
        const updated = [...scholarships];
        updated[scholarshipIndex].categoryAmounts.push({ category: "", amount: "" });
        onChange(updated);
    };

    const handleRemoveCategoryAmount = (scholarshipIndex, amountIndex) => {
        const updated = [...scholarships];
        updated[scholarshipIndex].categoryAmounts = updated[scholarshipIndex].categoryAmounts.filter((_, i) => i !== amountIndex);
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
            <h3>Scholarships {levelName ? `for ${levelName}` : ""}</h3>
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
                        <div style={{ gridColumn: 'span 2' }}>
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
                                <option value="NA">NA</option>
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
                                <option value="NA">NA</option>
                            </select>
                        </div>

                        <div>
                            <label>Overall Category Eligibility</label>
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
                                <option value="OBC">OBC</option>
                                <option value="EWS">EWS</option>
                                <option value="General">General</option>
                                <option value="NA">NA</option>
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
                                <option value="NA">NA</option>
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

                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Additional Notes / Disclaimer</label>
                            <textarea
                                placeholder="e.g. Ensure all documents are uploaded before the deadline..."
                                value={item.note || ""}
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

                        <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                            <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Scholarship Amounts by Category</label>
                            {item.categoryAmounts.map((catAmt, catIdx) => (
                                <div key={catIdx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-end' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ fontSize: '12px' }}>Category</label>
                                        <select
                                            value={catAmt.category}
                                            onChange={(e) => handleCategoryAmountChange(index, catIdx, "category", e.target.value)}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="General">General</option>
                                            <option value="OBC">OBC</option>
                                            <option value="SC/ST">SC/ST</option>
                                            <option value="EWS">EWS</option>
                                            <option value="Minority">Minority</option>
                                            <option value="All">All</option>
                                            <option value="NA">NA</option>
                                        </select>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ fontSize: '12px' }}>Amount</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ₹50,000"
                                            value={catAmt.amount}
                                            onChange={(e) => handleCategoryAmountChange(index, catIdx, "amount", e.target.value)}
                                            required
                                        />
                                    </div>
                                    {item.categoryAmounts.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveCategoryAmount(index, catIdx)}
                                            style={{ backgroundColor: "#ff4d4d", padding: '10px', height: '42px' }}
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => handleAddCategoryAmount(index)}
                                style={{ backgroundColor: "#2e7d32", fontSize: '12px', padding: '5px 10px', marginTop: '5px' }}
                            >
                                + Add Category Amount
                            </button>
                        </div>

                    </div>
                </div>
            ))}

            <button type="button" onClick={handleAddMore} className="btn-add">
                {scholarships.length === 0 ? "Add Scholarship" : "+ Add Another Scholarship"}
            </button>
        </div>
    );
}
