import { Veterinario } from "./Veterinario";
import { Servico } from "./Servico";

export class Clinica{
    
    public idClinica: number;
    public nome: string
    public email: string
    public telefone: string
    public logradouro: string
    public numero: number
    public bairro: string
    public cidade: string
    public uf: string
    public imagem: string
    public servicoClinica: Servico[]
    public veterinario: Veterinario

}