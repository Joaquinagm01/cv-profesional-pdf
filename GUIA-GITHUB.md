# 🚀 Guía Rápida: Subir a GitHub

Sigue estos pasos para subir tu CV a GitHub:

## 📋 Paso 1: Crear un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Nombra tu repositorio: `cv-profesional-pdf`
4. Descripción: `Mi CV profesional con HTML/CSS y conversión a PDF`
5. Déjalo **Público** (para GitHub Pages)
6. ⚠️ **NO** marques "Initialize with README" (ya tienes uno)
7. Click en **"Create repository"**

## 📤 Paso 2: Conectar y subir

Copia y pega estos comandos en tu terminal (ya estás en la carpeta correcta):

```bash
# Configurar tu usuario de git (si no lo has hecho)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"

# Conectar con tu repositorio (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/cv-profesional-pdf.git

# Subir a GitHub
git push -u origin main
```

Si te pide autenticación, usa un **Personal Access Token** en lugar de contraseña:
- Ve a: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token → Marca "repo" → Generate
- Copia el token y úsalo como contraseña

## 🌐 Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** → **Pages**
2. En "Source", selecciona **"GitHub Actions"**
3. Espera 1-2 minutos (el deployment es automático)
4. Tu CV estará en: `https://TU-USUARIO.github.io/cv-profesional-pdf/`

## 🎨 Paso 4: Personalizar tu CV

Antes de compartir, edita `index.html` con tus datos:
- Tu nombre, email, teléfono
- Experiencia laboral
- Educación
- Proyectos
- Habilidades

Y agrega tu foto como `foto.jpg` (150x150px recomendado)

## 📥 Paso 5: Generar el PDF

Después de personalizar:

```bash
# Opción Python
pip install weasyprint
python convert-to-pdf.py

# O Opción Node.js
npm install
npm run convert
```

El archivo `CV-Profesional.pdf` estará listo para enviar.

## 🔄 Actualizar después de cambios

Cada vez que modifiques tu CV:

```bash
git add .
git commit -m "Actualizado CV - [describe el cambio]"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

## ✅ Checklist antes de compartir

- [ ] Personalizaste todos los datos en `index.html`
- [ ] Agregaste tu foto profesional
- [ ] Revisaste ortografía y gramática
- [ ] Probaste que se vea bien en el navegador
- [ ] Generaste el PDF y verificaste el resultado
- [ ] Subiste los cambios a GitHub
- [ ] Verificaste que GitHub Pages funciona

## 💡 Tips

✨ **Comparte tu CV online**: Envía el link de GitHub Pages en aplicaciones
📄 **PDF para emails**: Usa el PDF generado para adjuntar en correos
🔒 **Privacidad**: Si no quieres que sea público, usa un repo privado (sin Pages)
⭐ **Portfolio**: Puedes agregar otros proyectos a tu perfil de GitHub

---

¿Listo? ¡Comienza con el Paso 1! 🚀
