const TOKEN_URL = "https://accounts.spotify.com/api/token";

async function getAccessToken(): Promise<string> {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

const USER_ID = "0cxaozs3a5z8m26vwzzc80wb9";

export async function GET() {
  try {
    const token = await getAccessToken();

    const playlistsRes = await fetch(
      `https://api.spotify.com/v1/users/${USER_ID}/playlists?limit=50`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!playlistsRes.ok) throw new Error("Failed to fetch playlists");
    const playlistsData = await playlistsRes.json();
    const playlists = playlistsData.items?.filter((p: any) => p.tracks?.total > 0);
    if (!playlists?.length) throw new Error("No playlists with tracks");

    const playlist = playlists[Math.floor(Math.random() * playlists.length)];

    const tracksRes = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?limit=50`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!tracksRes.ok) throw new Error("Failed to fetch tracks");
    const tracksData = await tracksRes.json();
    const valid = tracksData.items?.filter(
      (i: any) => i.track?.preview_url
    );
    if (!valid?.length) throw new Error("No tracks with preview");

    const item = valid[Math.floor(Math.random() * valid.length)].track;

    return Response.json({
      title: item.name,
      artist: item.artists?.map((a: any) => a.name).join(", "),
      previewUrl: item.preview_url,
      songUrl: item.external_urls?.spotify,
    });
  } catch {
    return Response.json({ title: null, artist: null, previewUrl: null, songUrl: null });
  }
}
