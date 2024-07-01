import { AppDataSource } from './index';
import { Country } from './entities/Country';

async function createFixtures() {
  await AppDataSource.initialize();
  const countryRepository = AppDataSource.getRepository(Country);

  const countries = [
    { code: 'FR', name: 'France', emoji: '🇫🇷', continent: 'EU' },
    { code: 'BE', name: 'Belgium', emoji: '🇧🇪', continent: 'EU' },
    { code: 'AN', name: 'Andorra', emoji: '🇦🇩', continent: 'EU' },
    { code: 'US', name: 'United States', emoji: '🇺🇸', continent: 'NA' },
    { code: 'CA', name: 'Canada', emoji: '🇨🇦', continent: 'NA' },
    { code: 'BR', name: 'Brazil', emoji: '🇧🇷', continent: 'SA' },
    { code: 'AR', name: 'Argentina', emoji: '🇦🇷', continent: 'SA' },
    { code: 'CN', name: 'China', emoji: '🇨🇳', continent: 'AS' },
    { code: 'JP', name: 'Japan', emoji: '🇯🇵', continent: 'AS' },
    { code: 'AU', name: 'Australia', emoji: '🇦🇺', continent: 'OC' },
    { code: 'ZA', name: 'South Africa', emoji: '🇿🇦', continent: 'AF' },
    { code: 'EG', name: 'Egypt', emoji: '🇪🇬', continent: 'AF' },
  ];

  for (const country of countries) {
    const newCountry = countryRepository.create(country);
    await countryRepository.save(newCountry);
  }

  console.log('Fixtures created');
}

createFixtures();
