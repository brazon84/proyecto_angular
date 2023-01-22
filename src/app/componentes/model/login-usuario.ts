export class LoginUsuario {
    nombreusuario!: string;
    email!: string;
    password!: string;

constructor({ nombreusuario, email, password }: { nombreusuario: 'jose'; email: 'abg.brazon@gmail.com'; password: '12345678'; }){
        this.nombreusuario = 'jose';
        this.email = 'abg.brazon@gmail.com';
        this.password = '12345678';
    }

}
