import { NextRequest, NextResponse } from 'next/server';
import ytdl from '@distube/ytdl-core';
import { extractVideoId } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      return NextResponse.json(
        { error: 'Invalid YouTube URL' },
        { status: 400 }
      );
    }

    // Try ytdl-core
    try {
      const info = await ytdl.getInfo(url, {
        requestOptions: {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
        },
      });

      const formats = info.formats
        .filter((f) => f.hasVideo || f.hasAudio)
        .map((f) => ({
          itag: f.itag,
          quality: f.qualityLabel || f.audioQuality || 'unknown',
          type: f.hasVideo && f.hasAudio ? 'video' : f.hasAudio ? 'audio' : 'video',
          container: f.container || 'mp4',
          url: f.url,
          size: f.contentLength ? `${(parseInt(f.contentLength) / 1024 / 1024).toFixed(1)} MB` : undefined,
          bitrate: f.bitrate ? `${Math.round(f.bitrate / 1000)} kbps` : undefined,
        }));

      // Get unique quality options
      const videoFormats = formats.filter((f) => f.type === 'video');
      const audioFormats = formats.filter((f) => f.type === 'audio');

      // Select best options
      const bestVideo = videoFormats.find((f) => f.quality === '1080p') || 
                        videoFormats.find((f) => f.quality === '720p') || 
                        videoFormats[0];

      const bestAudio = audioFormats[0];

      return NextResponse.json({
        success: true,
        data: {
          id: videoId,
          title: info.videoDetails.title,
          thumbnail: info.videoDetails.thumbnails.pop()?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          duration: info.videoDetails.lengthSeconds,
          author: info.videoDetails.author.name,
          formats: {
            video: bestVideo ? [bestVideo] : [],
            audio: bestAudio ? [bestAudio] : [],
            all: formats.slice(0, 10),
          },
        },
      });
    } catch (ytdlError) {
      console.error('ytdl error:', ytdlError);

      // Fallback: return basic info
      return NextResponse.json({
        success: true,
        fallback: true,
        data: {
          id: videoId,
          title: 'YouTube Video',
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          duration: 0,
          author: 'Unknown',
          formats: {
            video: [{
              itag: 18,
              quality: '360p',
              type: 'video' as const,
              container: 'mp4',
              url: `https://www.youtube.com/watch?v=${videoId}`,
            }],
            audio: [{
              itag: 140,
              quality: '128kbps',
              type: 'audio' as const,
              container: 'm4a',
              url: `https://www.youtube.com/watch?v=${videoId}`,
            }],
            all: [],
          },
        },
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
