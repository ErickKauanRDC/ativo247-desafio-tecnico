export interface Paciente{
    codigo?:Number|String,
    nome:String,
    telefone:Number|String,
    complemento:String,
    observacao:String,
    cep:Number|String,
    cpf:Number|String,
    status:String,
    last:String|undefined,
    medico:String,
    numero:String,
}