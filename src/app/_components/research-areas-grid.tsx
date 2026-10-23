'use client';

import { ResearchArea } from '@/contents/research-areas';
import { ResearchAreaCard } from './research-area-card';

const researchAreaOrder = [
  'stochastic-control-optimization',
  'mean-field-games-equilibrium',
  'risk-management-robustness',
  'deep-learning-reinforcement-learning',
  'portfolio-theory-asset-management',
  'actuarial-science',
  'trading-market-microstructure',
  'optimal-transport-information-geometry',
  'applied-probability-stochastic-processes',
  'energy-sustainable-finance',
];

export function ResearchAreasGrid({ areas }: { areas: ResearchArea[] }) {
  const orderedAreas = [...areas].sort((a, b) => {
    const aIndex = researchAreaOrder.indexOf(a.slug);
    const bIndex = researchAreaOrder.indexOf(b.slug);

    if (aIndex === -1 && bIndex === -1) {
      return a.title.localeCompare(b.title);
    }

    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });

  return (
    <section className="py-4">
      <div className="space-y-2">
        {orderedAreas.map((area) => (
          <ResearchAreaCard key={area.slug} area={area} />
        ))}
      </div>
    </section>
  );
}
