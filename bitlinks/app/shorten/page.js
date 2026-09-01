"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = async () => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl })
      })
      const result = await res.json()
      
      const host = process.env.NEXT_HOST || window.location.origin
      setGenerated(`${host}/${shortUrl}`)
      setUrl("")
      setShortUrl("")
      alert(result.message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
     <>
    <div className='mx-auto max-w-lg bg-purple-50 my-16 p-8 rounded-xl border border-purple-200 shadow-sm flex flex-col gap-5'>
      <h1 className='font-bold text-2xl text-purple-900'>Generate your short URLs</h1>
      <div className='flex flex-col gap-3'>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)}
          className='px-4 py-2 border border-purple-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 text-purple-900 placeholder-purple-400'
          placeholder='Enter your URL' />

        <input type="text" value={shortUrl} onChange={e => setShortUrl(e.target.value)}
          className='px-4 py-2 border border-purple-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 text-purple-900 placeholder-purple-400'
          placeholder='Enter your preferred short URL text' />
        
        <button onClick={generate} className='bg-purple-600 hover:bg-purple-700 transition-colors rounded-md shadow-md px-4 py-2.5 mt-2 font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-500'>Generate</button>
      </div>
      {generated && <code className="p-2 bg-purple-100 rounded text-purple-800 break-all">Your link: <Link target="_blank" href={generated} >{generated}</Link></code>}
    </div>
    </>
  )
}

export default Shorten
