import { Agenda } from "./Agenda"
import { Pet } from "./Pet"

export class Cliente{

    public idClient: number
    public email: string
    public senha: string
    public nome: string
    public cpf: string
    public telefone: string
    public imagem: string
    public logradouro: string
    public numero: number
    public bairro: string
    public cidade: string
    public uf: string
    public pet: Pet[]
    public agenda: Agenda[]


}