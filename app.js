const Reader = require("./class/Reader");
const Processor = require("./class/Processor");
const Table = require("./class/Table");
const HtmlParser = require("./class/HtmlParser");
const Writer = require("./class/Writer");
const PDFWriter = require("./class/PDFWriter");

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const dados = await leitor.Read("./users.csv");
  const dadosProcessados = Processor.Process(dados);

  const usuarios = new Table(dadosProcessados);

  const html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePdf(Date.now() + ".PDF", html);
}

main();
