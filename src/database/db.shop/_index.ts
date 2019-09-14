
export default class DBShopService {

    private dbIndDB: any;
    private dbFirestoreDB: any;
    private dbName: string;

    constructor() {
        this.dbIndDB = (window as any).indDB;
        this.dbFirestoreDB = (window as any).firestore;
        this.dbName = 'DB  DBPetsService Service';
    }
}
