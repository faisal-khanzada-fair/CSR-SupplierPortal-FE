export class AppConfigModel {
    public google: GoogleConfig = new GoogleConfig();
    public metrics: MetricsConfig = new MetricsConfig();
    public csat: CsatConfig = new CsatConfig();
}

export class GoogleConfig {
    public mapsApiKey: string;

    constructor() {
        this.mapsApiKey = '';
    }
}

export class MetricsConfig {
    public apiKey: string;

    constructor() {
        this.apiKey = '';
    }
}

export class CsatConfig {
    public dismissMinutes: number;
    public delayProductStockCheck: number;
    public delayProductDetailsViewed: number;
    public delayProductSearched: number;

    constructor() {
        this.dismissMinutes = 0;
        this.delayProductStockCheck = 0;
        this.delayProductDetailsViewed = 0;
        this.delayProductSearched = 0;
    }
}