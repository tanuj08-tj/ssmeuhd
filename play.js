addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Real stream URL — keep secret
  const streamUrl = 'http://alpha-2ott.me:80/play/live.php?mac=A0:BB:3E:26:EA:92&stream=1608071&extension=ts&play_token=aHTaWITAVH'

  // Forward the stream to the client
  const response = await fetch(streamUrl, {
    headers: {
      'User-Agent': 'VLC media player',
      'Referer': 'http://example.com' // Some stream servers require this
    }
  })

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Content-Type': 'video/MP2T',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
