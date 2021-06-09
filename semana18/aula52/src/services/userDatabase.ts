import knex from 'knex';
import connection from "../connection";

export const createUser = async (id: string, email: string, password: string, role:string) => {
  await connection
  .insert({id, email, password, role})
.into("User");
};

export const getUserByEmail = async(email: string): Promise<any> => {
  try {
      const result = await connection
      .select()
      .from("User")
      .where({email});
       return result[0];
  }
  catch (error) {
      throw new Error(error.message);
  }
}

export const  getUserById = async(id: string): Promise<any> => {
  try {
    const result = await connection("User").where({
      id
    });
    return result[0];
  } catch (error) {
    throw new Error(error.message);
  }
}