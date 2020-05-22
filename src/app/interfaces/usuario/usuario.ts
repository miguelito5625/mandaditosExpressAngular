export interface Usuario {
    id?: string;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    correo: string;
    contrasenia?: string;
    tipoUsuario?: string;
    estado?: string;
}
