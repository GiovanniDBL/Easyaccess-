export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export interface User{
    cuenta: string;
    pass: string;
}
export interface UserResponse extends User{
    message: string;
    token: string;
    userId: number;
    role: Roles;
}