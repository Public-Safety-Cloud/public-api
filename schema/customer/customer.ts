import {Country} from '../country/country';

export interface Customer {
    id: string;
    lang: string;
    country: Country;
    organizationName: string;
}