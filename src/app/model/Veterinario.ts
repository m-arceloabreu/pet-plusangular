import { Clinica } from "./Clinica"



export class Veterinario{

    public idVeterinario: number
    public nome: string
    public cpf: string
    public rg: string
    public email: string
    public senha: string
    public telefone: string
    public imagem: string
    public logradouro: string
    public numero: number
    public bairro: string
    public cidade: string
    public uf: string
    public crmv: number
    public clinicaVeterinario: Clinica[]


}