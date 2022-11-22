import { DatePipe } from "@angular/common";
import { Timestamp, TimestampProvider } from "rxjs";
import { Cliente } from "./Cliente";
import { Clinica } from "./Clinica";

export class Agenda{
    public horario: string;
    public idAgenda: number;

    public petID: number;
    public servicoID: number;
    public clinicaAgenda: Clinica
    public clienteAgenda: Cliente


}