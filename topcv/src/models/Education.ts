export interface Education {
    id: number;                      // Unique identifier for the education
    degree: string;                  // Degree obtained
    institution: string;             // Institution name
    location: string;                // Location of the institution
    startDate: string;               // Start date of the education (ISO format)
    endDate: string;                 // End date of the education (ISO format)
    achievements: string[];          // List of achievements
}
