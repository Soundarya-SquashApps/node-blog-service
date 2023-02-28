import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'containers-us-west-88.railway.app',
    port: 6070,
    username: 'root',
    password: 'popKWsM0uDNYNXAZg2qQ',
    database: 'railway',
});

export default sequelize;