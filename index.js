const fs = require('fs')
const http = require('http')
// Reqs
// when I pass --create-file file-name , the app should create file
// when I pass --delete-file filename , the app should delete this file if it exist
// when I pass --help I should see help menu
const server = http.createServer((req, res) => {})
server.listen(8000, 'localhost', () => {
  console.log('hi listen to 8000')
})

const addFile = (fileName) => {
  console.log('loading........')
  fs.writeFile(
    `./filesFolder/${fileName}.txt`,
    `${fileName} file has been created`,
    (err) => {
      if (err) console.log(err)
      console.log('Creation is done !')
    }
  )
}

const deleteFile = (fileName) => {
  console.log('loading........')
  fs.unlink(`./filesFolder/${fileName}.txt`, (err, resolve) => {
    if (err) console.log(err)
    console.log('Deletion is done !')
  })
}

if (process.argv[2] === '--create-file') {
  addFile(process.argv[3])
} else if (process.argv[2] === '--delete-file') {
  deleteFile(process.argv[3])
}
