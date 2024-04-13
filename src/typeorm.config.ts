import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'bioface',
    entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
    migrationsRun: false,
    logging: true,
    synchronize: true
}

export = typeOrmConfig