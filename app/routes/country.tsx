import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.countryName}`
  );
  const data = await res.json();
  return data;
}


export default function Country({ loaderData }: Route.ComponentProps) {
  return <div>
    <ul>
      {loaderData.map((country: any) => (
        <li key={country.name.common}>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
        </li>
      ))}
    </ul>
  </div>;
}
