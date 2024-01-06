import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
export class Nationalize {
    private name: string;
    private countryMapping: { [code: string]: string };

    constructor(name: string) {
        this.name = name;
        const filePath = path.join(__dirname, 'country.json');
        this.countryMapping = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    }

    async getNationality() {
        const apiUrl = `https://api.nationalize.io/?name=${this.name}`;
        const response = await axios.get(apiUrl);

        // Assuming response.data.country is an array and has at least one element
        const countryCode = response.data.country[0].country_id;
        const country = this.countryMapping[countryCode];

        const probabilityPercentage = response.data.country[0].probability;

        console.log(`${country} ${probabilityPercentage * 100}%`);
    }
}
