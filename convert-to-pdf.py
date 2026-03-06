#!/usr/bin/env python3
"""
Script para convertir el CV HTML a PDF
Requiere: pip install weasyprint
"""

from weasyprint import HTML
import os

def convert_html_to_pdf():
    """Convierte el archivo HTML a PDF"""
    
    # Obtener la ruta del directorio actual
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Rutas de archivos
    html_file = os.path.join(current_dir, 'index.html')
    output_pdf = os.path.join(current_dir, 'CV-Profesional.pdf')
    
    # Verificar que el archivo HTML existe
    if not os.path.exists(html_file):
        print(f"❌ Error: No se encontró el archivo {html_file}")
        return
    
    print("🔄 Convirtiendo HTML a PDF...")
    
    try:
        # Convertir HTML a PDF
        HTML(filename=html_file).write_pdf(output_pdf)
        print(f"✅ ¡PDF creado exitosamente!")
        print(f"📄 Archivo guardado en: {output_pdf}")
        
    except Exception as e:
        print(f"❌ Error al convertir: {e}")
        print("\n💡 Asegúrate de tener instalado WeasyPrint:")
        print("   pip install weasyprint")

if __name__ == "__main__":
    convert_html_to_pdf()
