import { Cliente } from "./Cliente";
import { Clinica } from "./Clinica";

export class Agenda{

    public horario: Date
    public idAgenda: number;
    public petID: number;
    public servicoID: number;
    public clinicaAgenda: Clinica
    public clienteAgenda: Cliente


}