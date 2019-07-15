import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

exports.module = (sequelize: Sequelize) => {
    class Payable extends Model {
        public id!: number;
        public ownerId!: number;
        public name!: string;
      
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
      }
      
      Payable.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED, 
            autoIncrement: true,
            primaryKey: true,
        },
        value: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        transaction_type: {
            type: new DataTypes.STRING(60),
            allowNull: false,
        },
        payment_method: {
            type: new DataTypes.STRING(60),
            allowNull: false,
        },
        card_owner: {
            type: new DataTypes.STRING(240),
            allowNull: false,
        },
        card_number: {
            type: new DataTypes.BIGINT(),
            allowNull: false,
        },
        card_name: {
            type: new DataTypes.STRING(240),
            allowNull: false,
        },
        card_expire_date: {
            type: new DataTypes.DATE(),
            allowNull: false,
          },
        card_cvv: {
            type: new DataTypes.INTEGER(),
            allowNull: false,
        },
        status: {
            type: new DataTypes.SMALLINT(),
            allowNull: false,
        },
        fee_applied: {
            type: new DataTypes.SMALLINT(),
            allowNull: true,
        }
      }, {
        sequelize,
        tableName: 'payables',
      });
      
      
}