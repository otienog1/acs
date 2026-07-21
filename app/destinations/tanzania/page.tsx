import { getCountryBySlug } from "@/lib/countriesData"
import CountryDetail from "@/components/destinations/CountryDetail"

const country = getCountryBySlug('tanzania')!

export const metadata = {
    title: 'Tanzania Safaris — African Citril Safaris',
    description: country.summary,
}

const TanzaniaPage = () => <CountryDetail country={country} />

export default TanzaniaPage
