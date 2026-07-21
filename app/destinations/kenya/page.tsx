import { getCountryBySlug } from "@/lib/countriesData"
import CountryDetail from "@/components/destinations/CountryDetail"

const country = getCountryBySlug('kenya')!

export const metadata = {
    title: 'Kenya Safaris — African Citril Safaris',
    description: country.summary,
}

const KenyaPage = () => <CountryDetail country={country} />

export default KenyaPage
