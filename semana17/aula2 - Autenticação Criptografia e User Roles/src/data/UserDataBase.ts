import knex from "knex";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase{
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME
        },
    });

    private static TABLE_NAME = "AuthenticationUser"

    public async createUser(id: string, email: string, password: string, role: string): Promise<void> {
        await this.getConnection()
        .insert({id, email, password, role})
        .into(UserDataBase.TABLE_NAME)

        console.log('apos execucao')
    };   

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.connection
        .select("*")
        .from(UserDataBase.TABLE_NAME)
        .where({ email })
        .first();

        return result
    };

    public async getUserById(id: string): Promise<any> {
        const result = await this.connection
        .select("*")
        .from(UserDataBase.TABLE_NAME)
        .where({ id })
        .first();

        return result
    }

    public async deleteUser(id: string): Promise<any> {
        await this.connection
        .delete("*")
        .from(UserDataBase.TABLE_NAME)
        .where({ id })
    }
}

