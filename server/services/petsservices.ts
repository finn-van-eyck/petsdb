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

//alle gegevens ophalen voor 1 id 
export async function getOnePet(id:number): Promise<Pets> {
    const data : Pets[] = await sql`select * from owners WHERE id = ${id}`;
    return data[0];
}

export async function saveAnimal(id:number, data:any): Promise<void> {
    await sql`
    UPDATE owners 
    SET 
    firstname = ${data.firstname},
    lastname = ${data.lastname},
    email = ${data.email},
    street = ${data.email},
    number = ${data.number},
    postal_code = ${data.postal_code},
    city = ${data.city},
    country = ${data.country} 
    WHERE id = ${id}`;
    
}

export async function deleteAnimal(id:number): Promise<void> {
    await sql`
    DELETE FROM owners
    WHERE id = ${id}`;
    
}