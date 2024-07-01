import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Country } from '../entities/Country';
import { CountryService } from '../services/CountryService';

@Resolver()
export class CountryResolver {
  private countryService = new CountryService();

  @Query(() => [Country])
  async countries() {
    return await this.countryService.getAllCountries();
  }

  @Query(() => Country, { nullable: true })
  async country(@Arg('code') code: string): Promise<Country | null> {
    return await this.countryService.getCountryByCode(code);
  }

  @Query(() => [Country])
  async countriesByContinent(@Arg('continent') continent: string) {
    return await this.countryService.getCountriesByContinent(continent);
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg('code') code: string,
    @Arg('name') name: string,
    @Arg('emoji') emoji: string,
    @Arg('continent') continent: string
  ): Promise<Country> {
    return await this.countryService.addCountry(code, name, emoji, continent);
  }
}
