export async function onRequest(context) {

  const query =
    context.request.url.split("?query=")[1];

  const apiKey = context.env.TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    }
  });

}
