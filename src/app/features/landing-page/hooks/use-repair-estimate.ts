import { useMemo, useState } from "react";
import {
  modelsByBrand,
  productBrands,
  serviceTypes,
} from "@/app/constants/repair-data";

/**
 * Calculates the estimated price for a given repair service and device model.
 *
 * @param {string} serviceId - The ID of the repair service.
 * @param {string} modelId - The ID of the device model.
 * @returns {number | null} The calculated price, or null if no price is available.
 */


/**
 * Formats a number as a currency string in Brazilian Reais (BRL).
 *
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string.
 */
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);
};

/**
 * A custom hook to manage the state and logic for the repair estimate form.
 *
 * This hook encapsulates the state for the selected service type, product brand,
 * and model, as well as the logic for calculating the estimated price and
 * handling user interactions.
 *
 * @returns {object} An object containing the state variables, event handlers, and other data for the repair estimate form.
 */
export const useRepairEstimate = () => {
  const [serviceType, setServiceType] = useState<string>("");
  const [productBrand, setProductBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showEstimate, setShowEstimate] = useState(false);

  const availableModels = useMemo(() => {
    return modelsByBrand[productBrand] || [];
  }, [productBrand]);

  const isCustomEstimate = useMemo(() => {
    return serviceType === "outro" || model === "outro";
  }, [serviceType, model]);

  const handleBrandChange = (value: string) => {
    setProductBrand(value);
    setModel("");
    setShowEstimate(false);
  };

  const handleServiceTypeChange = (value: string) => {
    setServiceType(value);
    setShowEstimate(false);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
    setShowEstimate(false);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
    setShowEstimate(false);
  };

  const handleGetEstimate = () => {
    if (serviceType && productBrand && model) {
      setShowEstimate(true);
    }
  };

  const handleCustomEstimate = () => {
    setServiceType("outro");
    setProductBrand("iphone"); // Define um padrão para evitar estado vazio
    setModel("outro");
    setShowEstimate(true);
  };

  return {
    serviceType,
    setServiceType: handleServiceTypeChange,
    productBrand,
    setProductBrand: handleBrandChange,
    model,
    setModel: handleModelChange,
    description,
    setDescription: handleDescriptionChange,
    showEstimate,
    availableModels,
    isCustomEstimate,
    handleGetEstimate,
    handleCustomEstimate,
    formatCurrency,
    serviceTypes,
    productBrands,
  };
};
