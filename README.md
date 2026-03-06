# 📄 CV Profesional - Generador de PDF

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)](https://pages.github.com/)

Un curriculum vitae profesional y moderno con diseño elegante, listo para convertir a PDF. Construido con HTML5 y CSS3 puro, sin frameworks.

## 🌟 Demo

**[Ver Demo en Vivo](https://tu-usuario.github.io/cv-profesional-pdf/)**

![Preview del CV](https://via.placeholder.com/800x600/667eea/ffffff?text=Tu+CV+Profesional)

## ✨ Características

- 🎨 **Diseño Moderno**: Inspirado en plantillas premium de Canva
- 📱 **Responsive**: Se adapta perfectamente al formato A4
- 🖼️ **Foto de Perfil**: Espacio para tu fotografía profesional
- 🎯 **Secciones Completas**: Experiencia, educación, habilidades, proyectos, certificaciones
- 📊 **Barras de Progreso**: Visualización de nivel de habilidades
- 🌈 **Colores Profesionales**: Gradientes modernos y elegantes
- 📥 **Fácil Conversión a PDF**: Scripts incluidos

## 🚀 Cómo Usar

### Método 1: Conversión con Python (Recomendado)

1. **Instala las dependencias:**
```bash
pip install weasyprint
```

2. **Personaliza tus datos:**
   - Edita `index.html` con tu información personal
   - Reemplaza `foto.jpg` con tu fotografía (150x150px recomendado)

3. **Genera el PDF:**
```bash
python convert-to-pdf.py
```

4. **¡Listo!** Tu CV estará en `CV-Profesional.pdf`

### Método 2: Directo desde el Navegador

1. **Abre** `index.html` en tu navegador
2. **Presiona** `Ctrl + P` (Windows/Linux) o `Cmd + P` (Mac)
3. **Selecciona** "Guardar como PDF"
4. **Ajusta** los márgenes a "Ninguno" para mejor resultado
5. **Guarda** tu PDF

### Método 3: Conversión con Node.js

1. **Instala las dependencias:**
```bash
npm install
```

2. **Genera el PDF:**
```bash
npm run convert
```

El archivo `convert-node.js` ya está incluido y configurado.

## 📝 Personalización

### Cambiar Colores

En `styles.css`, busca estos valores y cámbialos:

```css
/* Color principal del gradiente */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cambia #667eea y #764ba2 por tus colores favoritos */
```

### Agregar tu Foto

1. Guarda tu foto como `foto.jpg` en el mismo directorio
2. O cambia la ruta en `index.html`:
```html
<img src="tu-foto.jpg" alt="Foto de perfil">
```

### Modificar Secciones

Edita el archivo `index.html`:
- **Datos personales**: Líneas 12-32
- **Perfil profesional**: Líneas 38-44
- **Habilidades**: Líneas 47-80
- **Experiencia**: Líneas 135-190
- **Educación**: Líneas 193-206
- **Proyectos**: Líneas 209-227

## 🎨 Secciones Incluidas

1. **Header con Foto**: Nombre, título profesional, información de contacto
2. **Perfil Profesional**: Resumen ejecutivo
3. **Habilidades Técnicas**: Con barras de progreso visuales
4. **Idiomas**: Niveles de dominio
5. **Certificaciones**: Títulos y fechas
6. **Experiencia Profesional**: Historial laboral detallado
7. **Educación**: Formación académica
8. **Proyectos Destacados**: Portfolio de trabajos
9. **Intereses**: Tags con áreas de interés

## 💡 Tips para un CV Perfecto

✅ **Usa una foto profesional** - Fondo neutro, vestimenta formal
✅ **Sé conciso** - Máximo 2 páginas
✅ **Cuantifica logros** - Usa números y porcentajes
✅ **Adapta el contenido** - Personaliza según la posición
✅ **Revisa ortografía** - Sin errores
✅ **Formato consistente** - Mantén el mismo estilo

## 🛠️ Requisitos

- **Para Python**: Python 3.6+ y WeasyPrint
- **Para Node.js**: Node.js 12+ y Puppeteer
- **Para navegador**: Cualquier navegador moderno (Chrome, Firefox, Edge)

## 📦 Estructura de Archivos

```
cv-profesional-pdf/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions para deployment
├── index.html               # Archivo HTML principal
├── styles.css               # Estilos CSS
├── convert-to-pdf.py        # Script de conversión Python
├── convert-node.js          # Script de conversión Node.js
├── package.json             # Configuración npm
├── foto.jpg                 # Tu foto de perfil (agregar)
├── .gitignore              # Archivos ignorados por Git
├── LICENSE                  # Licencia MIT
└── README.md               # Esta documentación
```

## 🚀 Deploy en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. **Sube el proyecto a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: CV profesional"
git branch -M main
git remote add origin https://github.com/tu-usuario/cv-profesional-pdf.git
git push -u origin main
```

2. **Habilita GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente
   - El workflow se ejecutará automáticamente

3. **¡Listo!** Tu CV estará disponible en:
   `https://tu-usuario.github.io/cv-profesional-pdf/`

## 🐛 Solución de Problemas

**El PDF no mantiene los estilos:**
- Asegúrate de usar `printBackground: true` en la conversión
- En impresión del navegador, activa "Gráficos de fondo"

**La foto no aparece:**
- Verifica que el archivo `foto.jpg` existe
- Usa rutas absolutas si es necesario

**Errores con WeasyPrint:**
```bash
# En Linux/Mac puede requerir dependencias adicionales:
sudo apt-get install python3-dev python3-pip python3-cffi libcairo2 libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si tienes ideas para mejorar este CV:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/MejoraNombre`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/MejoraNombre`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

Libre para uso personal y comercial. ¡Personalízalo como quieras!

## ⭐ ¿Te gusta el proyecto?

Si este CV te fue útil, considera darle una estrella ⭐ en GitHub. ¡Ayuda a otros a encontrarlo!

## 📞 Contacto

¿Preguntas o sugerencias? Abre un [Issue](https://github.com/tu-usuario/cv-profesional-pdf/issues) en GitHub.

---

**Hecho con ❤️ | ¡Buena suerte en tu búsqueda de empleo! 🚀**
