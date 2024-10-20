export enum UserRole {
    Admin = 'admin',
    Reader = 'reader'
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    role: UserRole;
}