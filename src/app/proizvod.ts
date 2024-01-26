export class ProizvodPromenjive{
    
    constructor(id: number, naziv: string, opis: string, cena: number, slika: string, zivotinja: string)
    {
        this.id = id;
        this.naziv = naziv;
        this.zivotinja = zivotinja;
        this.opis = opis;
        this.cena = cena;
        this.slika = slika;
    }

    id: number;
    naziv: string;
    zivotinja: string;
    opis: string;
    cena: number;
    slika: string;
}