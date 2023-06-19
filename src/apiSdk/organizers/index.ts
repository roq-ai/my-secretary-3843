import axios from 'axios';
import queryString from 'query-string';
import { OrganizerInterface, OrganizerGetQueryInterface } from 'interfaces/organizer';
import { GetQueryInterface } from '../../interfaces';

export const getOrganizers = async (query?: OrganizerGetQueryInterface) => {
  const response = await axios.get(`/api/organizers${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createOrganizer = async (organizer: OrganizerInterface) => {
  const response = await axios.post('/api/organizers', organizer);
  return response.data;
};

export const updateOrganizerById = async (id: string, organizer: OrganizerInterface) => {
  const response = await axios.put(`/api/organizers/${id}`, organizer);
  return response.data;
};

export const getOrganizerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/organizers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOrganizerById = async (id: string) => {
  const response = await axios.delete(`/api/organizers/${id}`);
  return response.data;
};
