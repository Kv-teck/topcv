export interface Experience {
    id: number;                      // Unique identifier for the experience
    jobTitle: string;                // Job title
    company: string;                 // Company name
    location: string;                // Location of the job
    startDate: string;               // Start date of the job (ISO format)
    endDate: string;                 // End date of the job (ISO format)
    responsibilities: string[];      // List of responsibilities
}