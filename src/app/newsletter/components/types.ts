export interface Newsletter {
  id: string;
  title: string;
  date: string; // ISO format: "2025-03-15"
  filename: string; // e.g., "march-2025.pdf"
  description?: string;
}
