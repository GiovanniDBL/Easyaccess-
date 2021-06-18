// *MODELO CON LOS DATOS QUE SE NECESITAN PARA HACER UN REPORTE

export class ReportUser{

    // tslint:disable-next-line:variable-name
    id_usuario = localStorage.getItem('id');
    usuario: string | undefined;
    departamento: string | undefined;
    prioridad: string | undefined;
    reporte: string | undefined;
    multimedia: string | undefined;
    asunto: string | undefined;
    created: string | undefined;

}
export class Departamentos{
    departamentos: string | undefined;
}