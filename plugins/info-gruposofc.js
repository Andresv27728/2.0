import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  const namegrupo = 'Grupo Oficial'
  const gp1 = 'https://chat.whatsapp.com/nohay' // ← tu link real

  const namechannel = 'Canal del Bot'
  const channel = 'https://whatsapp.com/channel/no hay' // ← tu canal real

  const dev = '👾 Desarrollador: @thecarlos19'
  const catalogo = 'https://qu.ax/TJRoN.jpg' // o './media/grupos.jpg'
  const emojis = '📡'

  let grupos = `
╭─⟪ *🌐 GRUPOS OFICIALES * 
│
│ ⚔️ *${namegrupo}*
│ ${gp1}
│
│ ⚡ *${namechannel}*
│ ${channel}
│
│ ${dev}
╰─────────────────╯
`

  await conn.sendFile(m.chat, catalogo, 'grupos.jpg', grupos.trim(), m)
  await m.react(emojis)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
