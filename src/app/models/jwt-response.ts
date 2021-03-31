export  interface  JwtResponseI {

    dataUser: {
        cuenta: string,
        nombre: string,
        pass: string,
        accessToken: string,
        expireIn: string
    };
}
