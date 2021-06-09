import * as bcrypt from "bcryptjs";

export const hash = async (s:string): Promise<string> => {

    //definindo a complexidade/cost (o quão fundo vamos cavar)
    const rounds: number = Number(process.env.BCRYPT_COST);

    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("O cost precisa ser um número");
    }

    //gerar o salt (começar a cavar, tendo como parametro o quao fundo)    
    const salt = await bcrypt.genSalt(rounds);

    //esconder o nosso tesouro (usando como parametro o nosso salt)
    const result = await bcrypt.hash(s, salt);

    return result;
}

export const compare = (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}