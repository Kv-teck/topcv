export interface Certification {
    id: number;                      // Unique identifier for the certification
    name: string;                    // Name of the certification
    issuedBy: string;                // Issuing organization
    issueDate: string;               // Date of issue (ISO format)
    credentialId: string;            // Credential identifier
}