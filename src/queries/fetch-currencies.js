export default function fetchCurrencies (queryKey, vsCurrency = "usd", order = "market_cap_desc", perPage = 9, page = 1, sparkline = false) {
        return fetch(
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}`
).then((res) => res.json())
}