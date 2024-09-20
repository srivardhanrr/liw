import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const load: PageServerLoad = async () => {
  const caseStudies = await api.getCaseStudies();
  return { caseStudies };
};

