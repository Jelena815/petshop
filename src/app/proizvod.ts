export class ProizvodPromenjive{
    
    constructor(id: number, naziv: string, opis: string, cena: number, slika: string)
    {
        this.id = id;
        this.naziv = naziv;
        this.opis = opis;
        this.cena = cena;
        this.slika = slika;
    }

    id: number;
    naziv: string;
    opis: string;
    cena: number;
    slika: string;
}