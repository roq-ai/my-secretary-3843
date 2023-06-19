const mapping: Record<string, string> = {
  organizers: 'organizer',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
