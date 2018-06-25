import {
  createReadStream,
  createWriteStream,
  lstat,
  chmod,
  chown,
  utimes
} from 'fs'
import makethen from 'makethen'

const pChmod = makethen(chmod)
const pChown = makethen(chown)
const pLstat = makethen(lstat)
const pUtimes = makethen(utimes)

// TODO: extract me
const toUnixTimestamp = (date: Date): number => Math.trunc(date.getTime() / 1000)

const copie = async (fromPath: string, toPath: string) => {
  await new Promise<void>((resolve, reject) => {
    const readStream = createReadStream(fromPath)
    const writeStream = createWriteStream(toPath)

    readStream.on('error', reject)
    writeStream.on('error', reject)
    writeStream.on('finish', resolve)

    readStream.pipe(writeStream)
  })

  const stats = await pLstat(fromPath)

  await Promise.all([
    pChown(toPath, stats.uid, stats.gid),
    pChmod(toPath, stats.mode),
    pUtimes(toPath, toUnixTimestamp(stats.atime), toUnixTimestamp(stats.mtime))
  ])
}

export default copie
