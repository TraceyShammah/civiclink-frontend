import { useState } from "react";

export const ContactForm = () => {
    const [issue, setIssue] = useState('');
    const [location, setLocation] = useState('');

    const isFormValid = issue !== '' && location !== '';
    return (
        <div className="contact-issue" >
            <p>Not sure who to contact? Select an issue to find out!</p>
            <select 
                name="issue-category" 
                id="issue-category" 
                className={`issue-category ${issue ? 'selected' : ''}`}
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
            >
                <option value="" disabled selected>Select Issue Category</option>
                <option value="environment">Environment</option>
                <option value="education">Education</option>
            </select>
            <select 
                name="location" 
                id="location"
                className={`location ${location ? 'selected' : ''}`}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            >
                <option value="" disabled selected>Location</option>
                <option value="federal">Federal</option>
                <option value="state">State</option>
                <option value="local">Local</option>
            </select>
            <button 
                className={`find-rep ${isFormValid ? 'active' : 'disabled'}`}
                disabled={!isFormValid}
            > Find Representative</button>
        </div>
    )
}