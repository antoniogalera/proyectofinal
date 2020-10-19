export interface Juego {
    id: number;
    nombre: string;
    descripcion?: string; //Si lleva el ? es porque NO es un campo obligatorio
    fecha_lanzamiento?: string;
    precio?: number;
    imagen?: string;
}
