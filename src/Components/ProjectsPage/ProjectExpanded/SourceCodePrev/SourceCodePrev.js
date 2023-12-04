import React from 'react'

import "./SourceCodePrev.css";

export const SourceCodePrev = () => {
    const code = `
import os

import discord

from discord.ext import commands

from discord import FFmpegPCMAudio

from dotenv import load_dotenv

import youtube_dl

load_dotenv()

TOKEN = os.getenv('BOT_AUTH')

bot = commands.AutoShardedBot(command_prefix="%", description="A bot that plays music from youtube")

print("running")

song_queue = {}

@bot.event
async def on_ready():

    print("Bot has Connected", flush=True)


def check_song_queue(ctx, id):
    if id in song_queue:

        if song_queue[id] != []:

            voice = ctx.guild.voice_client

            source = song_queue[id].pop(0)

            return voice.play(source['source'], after=lambda x=None: check_song_queue(ctx, id))

def clear_song_queue(id):
    
    if id in song_queue:
        if song_queue[id] != []:
            song_queue[id] = []


@bot.command(pass_context=True)
async def join(ctx):
    # check if user is in a voice channel
    if ctx.author.voice:
        channel = ctx.message.author.voice.channel

        voice = await channel.connect()

        await ctx.send("Joined Channel")

    else:
        await ctx.send("Is not in a channel")


@bot.command(pass_context=True)
async def leave(ctx):
    if (ctx.voice_client):
        await ctx.guild.voice_client.disconnect()
        await ctx.send("Left Voice Channel")
    else:
        await ctx.send("I am not in a voice channel")

@bot.command(pass_context=True)
async def pause(ctx):
    voice = discord.utils.get(bot.voice_clients, guild=ctx.guild)

    if voice.is_playing():

        voice.pause()
    
    else:

        await ctx.send("Nothing is playing!")

@bot.command(pass_context=True)
async def resume(ctx):

    voice = discord.utils.get(bot.voice_clients, guild=ctx.guild)

    if voice.is_paused():
        voice.resume()
    else:
        ctx.send("Nothing to resume")

# stopping the bot also clears the song_queue       
@bot.command(pass_context=True)
async def stop(ctx):

    discord_id = ctx.message.guild.id

    voice = discord.utils.get(bot.voice_clients, guild=ctx.guild)

    voice.stop()

    clear_song_queue(discord_id)

    await ctx.send("Stopped playing")

# this command runs the check_song_queue function which also skips to the next song if one exists
@bot.command(pass_context=True)
async def fs(ctx):

    discord_id = ctx.message.guild.id
    voice = ctx.guild.voice_client

    if discord_id in song_queue:
        if song_queue[discord_id] != []:
            
            source = song_queue[discord_id].pop(0)

            if voice.is_playing():
                voice.stop()

            voice.play(source['source'])
            # send notice saying skipped song now playing new song
            await ctx.send(f"Skipped song, now playing {source['title']}")
        else:
            await ctx.send("There is nothing in the song queue")
            voice.stop()
    else:
        await ctx.send("There is nothing in the song queue")
        voice.stop()



@bot.command(name="play")
async def play(ctx, *, args):

    # send message to provide instant feed back
    await ctx.send(f"Ok, looking for {args}")

    # unique discord id
    discord_id = ctx.message.guild.id

    # ydl options dict for fetching youtube context
    ydl_opts = {
        
        'format': 'bestaudio/best',
        'continue_dl': True,
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192'
        },
        ],
        'noplaylist': True,
        'cookiefile': "cookies.txt",
        'age_limit': 21,
        'source_address': '0.0.0.0'
        
    }
    # https://www.youtube.com/
    # if the bot has not yet joined the channel, join channel before playing music
    if not ctx.voice_client:

        channel = ctx.message.author.voice.channel

        await channel.connect()
    
    if ctx.author.voice:
    
        # grab voice ctx from the server
        voice = ctx.guild.voice_client
            
        # open youtube_dl package and pass the options below
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            # if user inputs direct link, use different protocol, as using ytsearch: with direct links sometimes returns different videos
            if "https://www.youtube.com/" in args:

                song_info = ydl.extract_info(args, download=False)

            else:

                song_info = ydl.extract_info(f"ytsearch:{args}", download=False)['entries'][0]      

        song_url = song_info['formats'][1]["url"]

        # is yt source cannot be found send message disclaiming no source found.
        if song_url is None:

            await ctx.send("Cannot find that song")

        else:

            # get source of the song, required before options other wise if a slight connection interruption causes the source to stop playing
            source = FFmpegPCMAudio(song_url, before_options="-reconnect 1 -reconnect_streamed 1 -reconnect_delay_max 5")
            # gather song context into an object
            song = {
                "source": source,
                "title": song_info["title"],
                "thumbnail": song_info["thumbnails"][0]["url"].split('?')[0]
            }

            # if voice is playing or song exists in que, add song to song_queue
            if voice.is_playing() or voice.is_paused():
                # if discord id exists in song_queue append source to existing array
                
                if discord_id in song_queue:

                    song_queue[discord_id].append(song)

                else:
                    # create new array for specified discord id
                    song_queue[discord_id] = [song]

                await ctx.send(f"Song {song['title']}, has been added to the song queue {song['thumbnail']}")

            else:
                # takes the source and plays
                voice.play(song["source"], after=lambda x=None: check_song_queue(ctx, ctx.message.guild.id))
                # send song title and thumbnail to the text channel to confirm what song is being played
                await ctx.send(f"Now playing {song['title']} {song['thumbnail']} !")
    else:
        # if user is not in a channel alert, must be in channel to use bot
        await ctx.send("You are not in a voice channel")

    

    


# place all functionality of the bot above this line ^^^^^^^^^^

bot.run(TOKEN)
    `
    return (
        <div className='source-code-container'>
            <pre>
                <code>
                {code}
                </code>
            </pre>             
        </div>
    )
}
