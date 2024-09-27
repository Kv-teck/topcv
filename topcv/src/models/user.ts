import { Certification } from "./Certification";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Language } from "./Language";
import { Photo } from "./photo";
import { Skill } from "./Skill";

export interface User {
    userName: string;                // Unique username for login
    token: string;                   // Authentication token
    name: string;                    // Full name of the user
    email: string;                   // User's email address
    phoneNumber: string;             // User's phone number
    profileTitle: string;            // Title or headline for the user's profile
    city: string;                    // City where the user resides
    country: string;                 // Country where the user resides
    gender: string;                  // Gender of the user
    introduction: string;            // A brief introduction about the user
    experiences: Experience[];       // Array of work experiences
    educations: Education[];         // Array of education records
    skills: Skill[];                 // Array of skills
    certifications: Certification[];  // Array of certifications
    languages: Language[];           // Array of languages spoken
    interests: string[];             // Array of user interests
    photo: Photo[];
}