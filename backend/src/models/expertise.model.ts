import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';

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

  @HasMany(() => Character)
    character?: Character;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'acrobacia' })
    acrobacia?: string;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'adestramento' })
    adestramento?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'atletismo' })
    atletismo?: string;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'atualidades' })
    atualidades?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'ciencias' })
    ciencias?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'crime' })
    crime?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'diplomacia' })
    diplomacia?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'enganacao' })
    enganacao?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'fortitude' })
    fortitude?: string;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'furtividade' })
    furtividade?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'iniciativa' })
    iniciativa?: string;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'intimidacao' })
    intimidacao?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'intuicao' })
    intuicao?: string;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'investigacao' })
    investigacao?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'luta' })
    luta?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'medicina' })
    medicina?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'ocultismo' })
    ocultismo?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'percepcao' })
    percepcao?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'pilotagem' })
    pilotagem?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'pontaria' })
    pontaria?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'profissao' })
    profissao?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'reflexos' })
    reflexos?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'religiao' })
    religiao?: string;

  @Column({ 
    type: DataType.STRING(255), 
    field: 'sobrevivencia' })
    sobrevivencia?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'tatica' })
    tatica?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'tecnologia' })
    tecnologia?: string;

  @Column({ type: DataType.STRING(255), 
    field: 'vontade' })
    vontade?: string;
}