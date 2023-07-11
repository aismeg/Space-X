export default class FetchData {
    startUrl = 'https://api.spacexdata.com/v4/';
    translate = '../jotisk.json';

    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    };

    getRocket = async () => await this.getResource(this.startUrl + 'rockets');

    getLaunch = async () => await this.getResource(this.startUrl + 'launches/past');

    getCompany = async () => await this.getResource(this.startUrl + 'company');

}