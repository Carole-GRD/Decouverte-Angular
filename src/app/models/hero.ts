export interface Hero {
    id: number;
    name: string;
    images? : any;       
    // ↑ optionnel car il n'y a pas d'image dans le mock-heroes.ts
}