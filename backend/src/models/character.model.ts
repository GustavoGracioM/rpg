import { 
  Model, 
  Table, 
  Column, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
@Table({
  tableName: 'character',
  timestamps: false,
})
export default class Character extends Model {
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
    type: DataType.INTEGER,
    field: 'health_points',
    defaultValue: 0,
  })
    healthPoints?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'sanity',
    defaultValue: 0,
  })
    sanity?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'effort_points',
    defaultValue: 0,
  })
    effortPoints?: number;

  @ForeignKey(() => Attributes)
  @Column({
    type: DataType.INTEGER,
    field: 'attributes_id',
  })
    attributesId?: number;

  @BelongsTo(() => Attributes)
    attributes?: Attributes;

  @ForeignKey(() => Class)
  @Column({
    type: DataType.INTEGER,
    field: 'class_id',
  })
    classId?: number;

  @BelongsTo(() => Class)
    class?: Class;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
    userId?: number;

  @BelongsTo(() => User)
    user?: User;

}