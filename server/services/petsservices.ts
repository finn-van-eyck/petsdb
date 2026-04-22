// Importeer sql uit db.ts
import sql from "./db";

// Interface voor een nieuwsartikel
export interface Pets {
  id: number;
  firstname: string;
  lastname: string;
  email?: string;
  street?: string;
  number?: string;
  city?: string;
  postal_code?: string;
  country?: string;

}

// Alle nieuwsartikelen ophalen
export async function getAllPets(): Promise<Pets[]> {
    const data : Pets[] = await sql`select * from owners`;
    return data;
}