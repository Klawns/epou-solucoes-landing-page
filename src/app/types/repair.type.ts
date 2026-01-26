/**
 * Represents a generic item for a select list, with an ID and a display label.
 */
export type SelectItem = {
  /**
   * The unique identifier for the item.
   */
  id: string;
  /**
   * The text to be displayed for the item.
   */
  label: string;
};

/**
 * A record that maps a brand's string ID to an array of `SelectItem` objects,
 * which represent the models available for that brand.
 */
export type ModelsByBrand = Record<string, SelectItem[]>;

/**
 * A nested record representing the base prices for repairs.
 * The first level of keys represents the service type ID (e.g., "tela", "bateria").
 * The second level of keys represents the device model ID.
 * The final value is the price of the repair as a number.
 */
export type BasePrices = Record<string, Record<string, number>>;
