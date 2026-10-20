import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  formatMemory,
  formatNotesHours,
  formatUsd,
  getPlans,
} from "@/lib/copper/catalog";

export function PlusPricing() {
  const plans = getPlans();

  return (
    <section
      data-testid="plus-pricing"
      id="plus"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16"
    >
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        Choose your plan
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => {
          const highlighted = plan.id === "copper-plus";
          const details = [
            ["Memory kept", formatMemory(plan.memoryDays)],
            ["Notes recording", formatNotesHours(plan.notesHoursPerMonth)],
            ["Refined answers", plan.refinedAnswers ? "Included" : "Not included"],
          ];
          return (
            <Card
              key={plan.id}
              className={highlighted ? "border-primary ring-primary ring-2" : ""}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  {plan.name}
                  {highlighted && <Badge>Best value</Badge>}
                </CardTitle>
                <CardDescription>
                  {formatUsd(plan.monthlyUsd)}/month or{" "}
                  {formatUsd(plan.annualUsd)}/year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="flex flex-col gap-3">
                  {details.map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
