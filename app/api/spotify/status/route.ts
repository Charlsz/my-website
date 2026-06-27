const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

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

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    const nowRes = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data.item) {
        return Response.json({
          isPlaying: data.is_playing,
          title: data.item?.name,
          artist: data.item?.artists?.map((a: any) => a.name).join(", "),
          previewUrl: data.item?.preview_url,
          songUrl: data.item?.external_urls?.spotify,
          playedAt: data.is_playing ? null : new Date().toISOString(),
        });
      }
    }

    const recentRes = await fetch(RECENTLY_PLAYED_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (recentRes.ok) {
      const data = await recentRes.json();
      const item = data.items?.[0];
      if (item) {
        return Response.json({
          isPlaying: false,
          title: item.track?.name,
          artist: item.track?.artists?.map((a: any) => a.name).join(", "),
          previewUrl: item.track?.preview_url,
          songUrl: item.track?.external_urls?.spotify,
          playedAt: item.played_at,
        });
      }
    }

    return Response.json({
      isPlaying: false,
      title: null,
      artist: null,
      previewUrl: null,
      songUrl: null,
      playedAt: null,
    });
  } catch {
    return Response.json({
      isPlaying: false,
      title: null,
      artist: null,
      previewUrl: null,
      songUrl: null,
      playedAt: null,
    });
  }
}
