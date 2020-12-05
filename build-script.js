const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const javascriptFiles = [
    './dist/chatbot/runtime.js',
    './dist/chatbot/polyfills.js',
    './dist/chatbot/main.js'
  ]

  const cssFiles = [
    './dist/chatbot/styles.css',
  ]

  await fs.ensureDir('sumadi-chatbot')

  await concat(javascriptFiles, 'sumadi-chatbot/sumadi-chatbot.js')
  await concat(cssFiles, 'sumadi-chatbot/sumadi-chatbot.css')

  console.info('Sumadi-Chatbot Element created successfully!')
})()
