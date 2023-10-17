import {Sequelize} from "sequelize";

const db = new Sequelize('freedb_auth.database', 'freedb_user.auth', 'yY#buz?rJD!g?3*', {
  host: 'sql.freedb.tech',
    dialect: "mysql"
});

export default db;