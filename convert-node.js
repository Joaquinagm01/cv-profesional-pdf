#!/usr/bin/env node
/**
 * Script para convertir CV HTML a PDF usando Puppeteer
 * Uso: npm install puppeteer && npm run convert
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function convertHtmlToPdf() {
  const htmlFile = path.join(__dirname, 'index.html');
  const outputPdf = path.join(__dirname, 'CV-Profesional.pdf');

  // Verificar que el archivo HTML existe
  if (!fs.existsSync(htmlFile)) {
    console.error('❌ Error: No se encontró el archivo index.html');
    process.exit(1);
  }

  console.log('🚀 Iniciando conversión de HTML a PDF...');
  console.log('📂 Archivo: index.html');

  try {
    // Configurar navegador
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Cargar el archivo HTML
    await page.goto(`file://${htmlFile}`, {
      waitUntil: 'networkidle0'
    });

    // Generar PDF con configuración A4
    await page.pdf({
      path: outputPdf,
      format: 'A4',
      printBackground: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });

    await browser.close();

    console.log('✅ ¡PDF creado exitosamente!');
    console.log(`📄 Archivo guardado en: ${outputPdf}`);
    console.log(`📊 Tamaño: ${(fs.statSync(outputPdf).size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error al convertir:', error.message);
    console.log('\n💡 Tips:');
    console.log('   1. Asegúrate de tener instalado Puppeteer: npm install puppeteer');
    console.log('   2. Verifica que index.html existe y es válido');
    console.log('   3. Si estás en Docker/Codespaces, pueden faltar dependencias');
    process.exit(1);
  }
}

// Ejecutar si es el script principal
if (require.main === module) {
  convertHtmlToPdf();
}

module.exports = { convertHtmlToPdf };
