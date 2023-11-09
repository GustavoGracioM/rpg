import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'expertise',
  timestamps: false,
})
export default class Expertise extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'name',
  })
    name?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'attribute_base',
  })
    attributeBase?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'trained',
  })
    trained?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'charge_fine',
  })
    chargeFine?: string;
}