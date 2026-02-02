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
  { id: "tela_quebrada", label: "Tela quebrada" },
  { id: "tela_trincada", label: "Tela trincada" },
  { id: "bateria", label: "Troca de bateria" },
  { id: "conector", label: "Troca de conector de carga" },
  { id: "botao", label: "Reparo de botões" },
  { id: "camera", label: "Troca de câmera" },
  { id: "alto_falante", label: "Troca de alto-falante" },
  { id: "outro", label: "Outro" },
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
    { id: "iphone_17_pro_max", label: "iPhone 17 Pro Max" },
    { id: "iphone_17_pro", label: "iPhone 17 Pro" },
    { id: "iphone_17_plus", label: "iPhone 17 Plus" },
    { id: "iphone_17", label: "iPhone 17" },
    { id: "iphone_16_pro_max", label: "iPhone 16 Pro Max" },
    { id: "iphone_16_pro", label: "iPhone 16 Pro" },
    { id: "iphone_16_plus", label: "iPhone 16 Plus" },
    { id: "iphone_16", label: "iPhone 16" },
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
    { id: "outro", label: "Outro" },
  ],
  ipad: [
    { id: "ipad_pro_12", label: 'iPad Pro 12.9"' },
    { id: "ipad_pro_11", label: 'iPad Pro 11"' },
    { id: "ipad_air", label: "iPad Air" },
    { id: "ipad_mini", label: "iPad Mini" },
    { id: "ipad_10", label: "iPad 10ª geração" },
    { id: "outro", label: "Outro" },
  ],
  macbook: [
    { id: "macbook_pro_16", label: 'MacBook Pro 16"' },
    { id: "macbook_pro_14", label: 'MacBook Pro 14"' },
    { id: "macbook_pro_13", label: 'MacBook Pro 13"' },
    { id: "macbook_air_15", label: 'MacBook Air 15"' },
    { id: "macbook_air_13", label: 'MacBook Air 13"' },
    { id: "outro", label: "Outro" },
  ],
  apple_watch: [
    { id: "watch_ultra", label: "Apple Watch Ultra" },
    { id: "watch_series_9", label: "Apple Watch Series 9" },
    { id: "watch_series_8", label: "Apple Watch Series 8" },
    { id: "watch_se", label: "Apple Watch SE" },
    { id: "outro", label: "Outro" },
  ],
  samsung: [
    { id: "galaxy_s24_ultra", label: "Galaxy S24 Ultra" },
    { id: "galaxy_s24", label: "Galaxy S24" },
    { id: "galaxy_s23", label: "Galaxy S23" },
    { id: "galaxy_z_fold", label: "Galaxy Z Fold" },
    { id: "galaxy_z_flip", label: "Galaxy Z Flip" },
    { id: "galaxy_a54", label: "Galaxy A54" },
    { id: "outro", label: "Outro" },
  ],
  xiaomi: [
    { id: "xiaomi_14", label: "Xiaomi 14" },
    { id: "xiaomi_13", label: "Xiaomi 13" },
    { id: "redmi_note_13", label: "Redmi Note 13" },
    { id: "poco_x6", label: "POCO X6" },
    { id: "outro", label: "Outro" },
  ],
};