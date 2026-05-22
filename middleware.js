const EU_COUNTRIES = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "GB",
  "CH",
]);

export const config = {
  matcher: "/api/privacy-region",
};

export default function middleware(request) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const continent = request.headers.get("x-vercel-ip-continent")?.toUpperCase();
  const requiresConsent = continent === "EU" || (country ? EU_COUNTRIES.has(country) : false);

  return Response.json(
    {
      country: country ?? null,
      continent: continent ?? null,
      requiresConsent,
    },
    {
      headers: {
        "cache-control": "private, no-store",
      },
    }
  );
}
