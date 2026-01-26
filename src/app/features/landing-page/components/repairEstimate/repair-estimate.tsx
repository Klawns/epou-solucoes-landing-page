import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Calculator, HelpCircle, ChevronRight } from "lucide-react";
import { useRepairEstimate } from "@/app/features/landing-page/hooks/use-repair-estimate";

/**
 * Renders an interactive form for users to get an estimated cost for a repair.
 *
 * This component utilizes the `useRepairEstimate` custom hook to manage its
 * state and logic, which includes handling user selections for service type,
 * product brand, and model. Once the user provides all the necessary information
 * and clicks the "Get Estimate" button, the component displays the calculated
 * estimated price in a clear and prominent way.
 *
 * @returns {JSX.Element} The rendered repair estimate section.
 */
export default function RepairEstimate() {
  const {
    serviceType,
    setServiceType,
    productBrand,
    setProductBrand,
    model,
    setModel,
    showEstimate,
    availableModels,
    estimatedPrice,
    handleGetEstimate,
    formatCurrency,
    serviceTypes,
    productBrands,
  } = useRepairEstimate();

  return (
    <section id="orçamento" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-400 mb-4">
            <Calculator className="w-4 h-4 inline mr-2" />
            Calculadora
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Obter uma Estimativa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Faça suas seleções abaixo e descubra o valor estimado do reparo.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Form */}
          <div className="space-y-4 mb-8">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Tipo de serviço</label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white rounded-xl">
                  <SelectValue
                    placeholder="Selecione o serviço"
                    className="text-white"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {serviceTypes.map((s) => (
                    <SelectItem
                      key={s.id}
                      value={s.id}
                      className="text-white hover:bg-gray-700 focus:bg-gray-700"
                    >
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">
                Produto ou acessório
              </label>
              <Select value={productBrand} onValueChange={setProductBrand}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white rounded-xl">
                  <SelectValue placeholder="Selecione a marca" className="text-white"/>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {productBrands.map((b) => (
                    <SelectItem
                      key={b.id}
                      value={b.id}
                      className="text-white hover:bg-gray-700 focus:bg-gray-700"
                    >
                      {b.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Modelo</label>
              <Select
                value={model}
                onValueChange={setModel}
                disabled={!productBrand}
              >
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white rounded-xl disabled:opacity-50">
                  <SelectValue
                    placeholder={
                      productBrand
                        ? "Selecione o modelo"
                        : "Selecione a marca primeiro"
                    }
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 max-h-60">
                  {availableModels.map((m) => (
                    <SelectItem
                      key={m.id}
                      value={m.id}
                      className="text-white hover:bg-gray-700 focus:bg-gray-700"
                    >
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              Precisa de ajuda para identificar seu modelo?
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <Button
            onClick={handleGetEstimate}
            disabled={!serviceType || !productBrand || !model}
            variant="outline"
            size="lg"
            className="w-full mb-8 h-15 rounded-xl border-gray-600 text-white hover:bg-gray-800 disabled:opacity-50"
          >
            Obter estimativa
          </Button>

          {/* Result */}
          {showEstimate && estimatedPrice && (
            <Card className="bg-gray-800/50 border-gray-700 animate-fade-up">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Seu custo estimado
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Analisaremos a sua cobertura de serviço
                  <br />
                  para confirmar a taxa de serviço final.
                </p>
                <div className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                  {formatCurrency(estimatedPrice)}
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12"
                  asChild
                >
                  <a href="#contato">Obter serviço</a>
                </Button>
              </CardContent>
            </Card>
          )}

          <p className="text-center text-xs text-gray-500 mt-6">
            * Os valores são estimativas e podem variar de acordo com a condição
            do dispositivo.
          </p>
        </div>
      </div>
    </section>
  );
}
