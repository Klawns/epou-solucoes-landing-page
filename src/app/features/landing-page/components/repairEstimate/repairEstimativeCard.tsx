import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface RepairEstimateResultCardProps {
  isCustomEstimate: boolean;
  estimatedPrice: number | null;
  formatCurrency: (value: number) => string;
  whatsappLink: string;
}

export default function RepairEstimateResultCard({
  isCustomEstimate,
  estimatedPrice,
  formatCurrency,
  whatsappLink,
}: RepairEstimateResultCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 animate-fade-up">
      <CardContent className="pt-8 pb-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          {isCustomEstimate ? "Orçamento sob consulta" : "Seu custo estimado"}
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          {isCustomEstimate
            ? "Entre em contato para avaliarmos seu caso específico."
            : "Os valores são estimativas e podem variar de acordo com a condição do dispositivo."}
        </p>
        {!isCustomEstimate && estimatedPrice && (
          <div className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            {formatCurrency(estimatedPrice)}
          </div>
        )}

        <Button
          variant="default"
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {isCustomEstimate ? "Falar no WhatsApp" : "Entre em contato"}
          </a>
        </Button>
        {!isCustomEstimate && (
          <p className="text-gray-400 text-1x1 mt-4">
            Para analisarmos melhor o orçamento do seu dispositivo.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
