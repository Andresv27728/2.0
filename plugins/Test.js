let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let name = await conn.getName(m.sender);

    let text = `‼️ ¡Hola! *@${m.sender.split('@')[0]}* soy *Makima (OficialBot)*

╭━━ I N F O - B O T ━━
┃ Creador: 𓆩‌۫᷼ ִֶָღܾ݉͢ғ꯭ᴇ꯭፝ℓɪ꯭ͨא𓆪
┃ Tiempo activo: 00:01:26
┃ Baileys: Multi device
┃ Base: Oficial
┃ Registros: 63
╰━━━━━━━━━━━━━

╭─❀ INFO-USER ❀─╮
┃ ➤ Creador: Félix
┃ ➤ Cliente: ${name}
┃ ➤ Rango: Nuv
┃ ➤ Nivel: 0
┃ ➤ País: Dominican Republic 🇩🇴
╰━━━━━━━━━━━━━

➪ 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦

╭─❀ PRINCIPALES ❀─╮
┃ ➤ #estado
┃ ➤ #botreglas
┃ ➤ #menu
┃ ➤ #menu2
┃ ➤ #uptime
┃ ➤ #menulista
╰━━━━━━━━━━━━━

╭─❀ BUSCADORES ❀─╮
┃ ➤ #gitthubsearch
┃ ➤ #google [texto]
┃ ➤ #tiktoksearch
┃ ➤ #pinterest
┃ ➤ #imagen [query]
╰━━━━━━━━━━━━━

╭─❀ JUEGOS ❀─╮
┃ ➤ #abrazar #acertijo #agarrar #ahorcado #besar
┃ ➤ #acariciar #golpear #pregunta #reto #triste
┃ ➤ #bot #love #consejo #dance #nombreninja
┃ ➤ #meme #dormir #rata #enamorada #gay #manco
┃ ➤ #apostar #piropo #sonrojarse
╰━━━━━━━━━━━━━

╭─❀ WAIFU ❀─╮
┃ ➤ #robarpersonaje #obtenidos #sacar #guardar #carrw
┃ ➤ #confirmar #character #roll #top
╰━━━━━━━━━━━━━

╭─❀ REGISTROS ❀─╮
┃ ➤ #reg #unreg #profile #usuarios
╰━━━━━━━━━━━━━

╭─❀ ECONOMÍA ❀─╮
┃ ➤ #daily #bank #robar #robarxp #rob2 #levelup
┃ ➤ #lb #mine #retirar #trabajar #transferir
╰━━━━━━━━━━━━━

╭─❀ DESCARGAS ❀─╮
┃ ➤ #fb #play #playvid #mediafire #apkmod
┃ ➤ #ytmp3doc #ytmp4doc #ig #gitclone #tiktok
┃ ➤ #spotify #tw #ytmp4 #imagen [query]
╰━━━━━━━━━━━━━

╭─❀ GRUPOS ❀─╮
┃ ➤ #group abrir/cerrar #delete #setppgroup
┃ ➤ #encuesta #rentar #kick #promote #demote
┃ ➤ #tagall #tag #invite
╰━━━━━━━━━━━━━

╭─❀ STICKERS ❀─╮
┃ ➤ #wm [autor] #s #qc #toimg
╰━━━━━━━━━━━━━

╭─❀ DATABASE ❀─╮
┃ ➤ #delvn #demsg #delimg #delsticker #infobot
╰━━━━━━━━━━━━━

╭─❀ EXPERIENCIA ❀─╮
┃ ➤ #buy #buyall
╰━━━━━━━━━━━━━

╭─❀ CONFIGURACIÓN ❀─╮
┃ ➤ #enable #disable #on #off
╰━━━━━━━━━━━━━

╭─❀ ANIME ❀─╮
┃ ➤ #toanime #tts #remini #enhance #hd
┃ ➤ #nuevafotochannel #nosilenciarcanal
┃ ➤ #silenciarcanal #seguircanal #inspect
┃ ➤ #infobot #readvo
╰━━━━━━━━━━━━━

╭─❀ INFORMACIÓN ❀─╮
┃ ➤ #creador #owner #reportar #ping #links
╰━━━━━━━━━━━━━

╭─❀ CREADOR ❀─╮
┃ ➤ #addprem #copia #broadcastgroup #bcgb
┃ ➤ #bcgb2 #broadcast #bc #cheat #delprem
┃ ➤ #dsowner #get #prefix #reiniciar #saveplugin
┃ ➤ #update #resetpersonajes
╰━━━━━━━━━━━━━

╭─❀ DESARROLLADORES ❀─╮
┃ ➤ #autoadmin #banuser #unbanuser
┃ ➤ #banchat #unbanchat #ip #join
╰━━━━━━━━━━━━━

╭─❀ A - I ❀─╮
┃ ➤ #dalle #simi #ai #tovideo #togifaud
╰━━━━━━━━━━━━━

> © ⍴᥆ᥕᥱrᥱძ ᑲᥡ Félix Manuel`

    await conn.sendMessage(m.chat, {
      image: { url: 'https://files.catbox.moe/0ro3o9.jpg' },
      caption: text,
      footer: '💙makima💎',
      buttons: [
        { buttonId: `${_p}grupos`, buttonText: { displayText: '🌐 ＧＲＵＰＯＳ' }, type: 1 },
        { buttonId: `${_p}code`, buttonText: { displayText: '🕹 ＳＥＲＢＯＴ' }, type: 1 }
      ],
      viewOnce: true
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '❎ Error al mostrar el menú.', m);
  }
};

handler.help = ['menutest'];
handler.tags = ['main'];
handler.command = ['menutest'];
handler.register = true;

export default handler;