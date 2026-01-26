import type {
  SelectItem,
  ModelsByBrand,
  BasePrices,
} from "@/app/types/repair.type";

/**
 * An array of objects representing the available types of repair services.
 * Each object has an `id` and a `label` for the service.
 */
export const serviceTypes: SelectItem[] = [
  { id: "tela", label: "Tela rachada" },
  { id: "bateria", label: "Troca de bateria" },
  { id: "conector", label: "Troca de conector de carga" },
  { id: "botao", label: "Reparo de botões" },
  { id: "camera", label: "Troca de câmera" },
  { id: "alto_falante", label: "Troca de alto-falante" },
];

/**
 * An array of objects representing the supported product brands.
 * Each object has an `id` and a `label` for the brand.
 */
export const productBrands: SelectItem[] = [
  { id: "iphone", label: "iPhone" },
  { id: "ipad", label: "iPad" },
  { id: "macbook", label: "MacBook" },
  { id: "apple_watch", label: "Apple Watch" },
  { id: "samsung", label: "Samsung" },
  { id: "xiaomi", label: "Xiaomi" },
];

/**
 * An object that maps product brand IDs to an array of their corresponding models.
 * Each model is an object with an `id` and a `label`.
 */
export const modelsByBrand: ModelsByBrand = {
  iphone: [
    { id: "iphone_15_pro_max", label: "iPhone 15 Pro Max" },
    { id: "iphone_15_pro", label: "iPhone 15 Pro" },
    { id: "iphone_15", label: "iPhone 15" },
    { id: "iphone_14_pro_max", label: "iPhone 14 Pro Max" },
    { id: "iphone_14_pro", label: "iPhone 14 Pro" },
    { id: "iphone_14", label: "iPhone 14" },
    { id: "iphone_13_pro_max", label: "iPhone 13 Pro Max" },
    { id: "iphone_13_pro", label: "iPhone 13 Pro" },
    { id: "iphone_13", label: "iPhone 13" },
    { id: "iphone_12", label: "iPhone 12" },
    { id: "iphone_11", label: "iPhone 11" },
    { id: "iphone_se", label: "iPhone SE" },
  ],
  ipad: [
    { id: "ipad_pro_12", label: 'iPad Pro 12.9"' },
    { id: "ipad_pro_11", label: 'iPad Pro 11"' },
    { id: "ipad_air", label: "iPad Air" },
    { id: "ipad_mini", label: "iPad Mini" },
    { id: "ipad_10", label: "iPad 10ª geração" },
  ],
  macbook: [
    { id: "macbook_pro_16", label: 'MacBook Pro 16"' },
    { id: "macbook_pro_14", label: 'MacBook Pro 14"' },
    { id: "macbook_pro_13", label: 'MacBook Pro 13"' },
    { id: "macbook_air_15", label: 'MacBook Air 15"' },
    { id: "macbook_air_13", label: 'MacBook Air 13"' },
  ],
  apple_watch: [
    { id: "watch_ultra", label: "Apple Watch Ultra" },
    { id: "watch_series_9", label: "Apple Watch Series 9" },
    { id: "watch_series_8", label: "Apple Watch Series 8" },
    { id: "watch_se", label: "Apple Watch SE" },
  ],
  samsung: [
    { id: "galaxy_s24_ultra", label: "Galaxy S24 Ultra" },
    { id: "galaxy_s24", label: "Galaxy S24" },
    { id: "galaxy_s23", label: "Galaxy S23" },
    { id: "galaxy_z_fold", label: "Galaxy Z Fold" },
    { id: "galaxy_z_flip", label: "Galaxy Z Flip" },
    { id: "galaxy_a54", label: "Galaxy A54" },
  ],
  xiaomi: [
    { id: "xiaomi_14", label: "Xiaomi 14" },
    { id: "xiaomi_13", label: "Xiaomi 13" },
    { id: "redmi_note_13", label: "Redmi Note 13" },
    { id: "poco_x6", label: "POCO X6" },
  ],
};

/**
 * An object representing the base prices for various repair services and device models.
 * The keys of the outer object are service type IDs, and the keys of the inner objects
 * are device model IDs. The values are the prices in Brazilian Reais (BRL).
 */
export const basePrices: BasePrices = {
  tela: {
    iphone_15_pro_max: 2849,
    iphone_15_pro: 2499,
    iphone_15: 1899,
    iphone_14_pro_max: 2299,
    iphone_14_pro: 1999,
    iphone_14: 1499,
    iphone_13_pro_max: 1899,
    iphone_13_pro: 1699,
    iphone_13: 1299,
    iphone_12: 999,
    iphone_11: 799,
    iphone_se: 599,
    ipad_pro_12: 2999,
    ipad_pro_11: 2499,
    ipad_air: 1999,
    ipad_mini: 1499,
    ipad_10: 1299,
    macbook_pro_16: 4999,
    macbook_pro_14: 3999,
    macbook_pro_13: 2999,
    macbook_air_15: 2499,
    macbook_air_13: 1999,
    watch_ultra: 1499,
    watch_series_9: 999,
    watch_series_8: 899,
    watch_se: 699,
    galaxy_s24_ultra: 1999,
    galaxy_s24: 1499,
    galaxy_s23: 1199,
    galaxy_z_fold: 2999,
    galaxy_z_flip: 1999,
    galaxy_a54: 699,
    xiaomi_14: 899,
    xiaomi_13: 799,
    redmi_note_13: 399,
    poco_x6: 449,
  },
  bateria: {
    iphone_15_pro_max: 599,
    iphone_15_pro: 549,
    iphone_15: 499,
    iphone_14_pro_max: 549,
    iphone_14_pro: 499,
    iphone_14: 449,
    iphone_13_pro_max: 499,
    iphone_13_pro: 449,
    iphone_13: 399,
    iphone_12: 349,
    iphone_11: 299,
    iphone_se: 249,
    ipad_pro_12: 899,
    ipad_pro_11: 799,
    ipad_air: 699,
    ipad_mini: 599,
    ipad_10: 549,
    macbook_pro_16: 1499,
    macbook_pro_14: 1299,
    macbook_pro_13: 999,
    macbook_air_15: 899,
    macbook_air_13: 799,
    watch_ultra: 399,
    watch_series_9: 299,
    watch_series_8: 279,
    watch_se: 249,
    galaxy_s24_ultra: 449,
    galaxy_s24: 399,
    galaxy_s23: 349,
    galaxy_z_fold: 599,
    galaxy_z_flip: 449,
    galaxy_a54: 249,
    xiaomi_14: 299,
    xiaomi_13: 279,
    redmi_note_13: 199,
    poco_x6: 219,
  },
};
