export default class DBUsersService {
  private dbIndDB: any;
  private dbFirestoreDB: any;
  private dbFireAuthDB: any;
  private dbName: string;

  constructor() {
    this.dbIndDB = (window as any).indDB;
    this.dbFirestoreDB = (window as any).firestore;
    this.dbFireAuthDB = (window as any).fireauth;
    this.dbName = 'DB  DBPetsService Service';
  }

  public signinByEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.dbFireAuthDB
        .signInWithEmailAndPassword(email, password)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error: any) => {
          const authError: any = {};
          if (error.code === 'auth/invalid-email') {
            authError.type = 'ERROR_EMAIL';
            authError.message = error.message;
          }
          if (error.code === 'auth/user-not-found') {
            authError.type = 'ERROR_EMAIL';
            authError.message = error.message.split('.')[0];
          }
          if (error.code === 'auth/wrong-password') {
            authError.type = 'ERROR_PASSWORD';
            authError.message = 'Forgot Password';
          }
          reject(authError);
        });
    });
  }

  public sendPasswordResetEmail(email: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.dbFireAuthDB
        .sendPasswordResetEmail(email)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}
