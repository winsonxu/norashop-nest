import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("t_order_submit_result", { schema: "norait_shop" })
export class OrderSubmitResultEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "token", length: 32 })
  token: string;

  @Column("longtext", { name: "data", nullable: true })
  data: string | null;
}
