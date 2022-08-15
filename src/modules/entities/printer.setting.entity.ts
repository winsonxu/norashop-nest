import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("is_delete", ["isDelete"], {})
@Index("mall_id", ["mallId"], {})
@Index("mch_id", ["mchId"], {})
@Index("status", ["status"], {})
@Index("store_id", ["storeId"], {})
@Entity("t_printer_setting", { schema: "norait_shop" })
export class PrinterSettingEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mall_id" })
  mallId: number;

  @Column("int", { name: "mch_id", default: () => "'0'" })
  mchId: number;

  @Column("int", { name: "printer_id", comment: "打印机id" })
  printerId: number;

  @Column("int", { name: "block_id", comment: "模板id", default: () => "'0'" })
  blockId: number;

  @Column("tinyint", {
    name: "status",
    comment: "0关闭 1启用",
    width: 1,
    default: () => "'0'",
  })
  status: boolean;

  @Column("tinyint", {
    name: "is_attr",
    comment: "0不使用规格 1使用规格",
    width: 1,
    default: () => "'0'",
  })
  isAttr: boolean;

  @Column("longtext", {
    name: "type",
    comment:
      "order(下单打印)-> 0关闭 1开启 \r\npay (付款打印)-> 0关闭 1开启 \r\nconfirm (确认收货打印)-> 0关闭 1开启 \r\n ",
  })
  type: string;

  @Column("tinyint", {
    name: "is_delete",
    comment: "删除",
    width: 1,
    default: () => "'0'",
  })
  isDelete: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("timestamp", {
    name: "deleted_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  deletedAt: Date;

  @Column("int", { name: "big", comment: "放大倍数", default: () => "'0'" })
  big: number;

  @Column("longtext", {
    name: "show_type",
    comment: "打印参数 attr 规格 goods_no 货号 form_data 下单表单",
  })
  showType: string;

  @Column("varchar", { name: "order_send_type", length: 255 })
  orderSendType: string;

  @Column("int", { name: "store_id", default: () => "'0'" })
  storeId: number;
}
