import { AppDataSource } from '../index';
import { Country } from '../entities/Country';

export class CountryService {
  private countryRepository = AppDataSource.getRepository(Country);

  async getAllCountries(): Promise<Country[]> {
    return await this.countryRepository.find();
  }

  // Here i do an uppercase comparison to avoid case sensitivity
  async getCountryByCode(code: string): Promise<Country | null> {
    return await this.countryRepository
      .createQueryBuilder('country')
      .where('UPPER(country.code) = UPPER(:code)', { code })
      .getOne();
  }

  async getCountriesByContinent(continent: string): Promise<Country[]> {
    return await this.countryRepository.findBy({ continent });
  }

  async addCountry(code: string, name: string, emoji: string, continent: string): Promise<Country> {
    const country = this.countryRepository.create({ code, name, emoji, continent });
    return await this.countryRepository.save(country);
  }
}
