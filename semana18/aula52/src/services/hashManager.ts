import {hash, genSalt, compare} from "bcryptjs"
  
export const compareHash = async (
    plainText: string,
    cypherText: string
): Promise<boolean> => {
    return await compare(plainText, cypherText);
}
  
export const createHash = async (plainText: string): Promise<string> => {
    const salt = await genSalt(12);
    const result = await hash(plainText, salt);
    return result;
}