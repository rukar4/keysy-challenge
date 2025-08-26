import Head from "next/head";
import { api } from "~/utils/api";

export default function Listings() {
  const { data: listings, isLoading, error } = api.post.list.useQuery();

  if (isLoading) {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold">Loading listings...</h1>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
          <p>Error: {error.message}</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Listings Page</title>
        <meta name="description" content="Browse all listings"/>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Browse Car Listings</h1>
        <div className="mt-4">
          {listings && listings.length > 0 ? (
            <ul className="grid grid-cols-5 gap-4">
              {listings.map((listing) => (
                <li key={listing.id} className="p-4 border rounded shadow">
                  <h2 className="text-2xl font-semibold">{listing.year} {listing.make} {listing.model}</h2>
                  <p>Price: {listing.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No listings available.</p>
          )}
        </div>
      </main>
    </>
  );
}