// *MODELO CON LOS DATOS QUE SE NECESITAN PARA INICIAR SESIÓN 
export class LoginUser{

    cuenta: string | undefined;
    nombre: string | undefined;
    pass: string | undefined;
    accessToken: string | undefined;
    expiresIn: string | undefined;

}
export class UserResponse{

    token: string | undefined;

}