# 📄 Cómo Generar el PDF del CV

## Pasos para obtener el PDF perfecto:

### 1. Abrir el CV en el navegador
- Ir a: `http://localhost:8080`
- Asegurarse de que el CV se vea correctamente con los colores azules

### 2. Abrir el diálogo de impresión
- **Método 1:** Presionar `Ctrl + P` (Windows/Linux) o `Cmd + P` (Mac)
- **Método 2:** Clic derecho → "Imprimir"
- **Método 3:** Menú del navegador → Archivo → Imprimir

### 3. Configurar las opciones de impresión

**⚠️ IMPORTANTE - Estas configuraciones son CRÍTICAS para que los colores se vean correctamente:**

#### Configuración obligatoria:
- **Destino:** "Guardar como PDF" o "Microsoft Print to PDF"
- **Gráficos de fondo:** ✅ **ACTIVADO** (Esto hace que se impriman los colores azules del header)
- **Márgenes:** Sin márgenes / Ninguno
- **Escala:** 100%
- **Páginas:** Todas
- **Color:** Color (no en escala de grises)

#### Nombres según el navegador:

**Chrome / Edge:**
- Buscar la opción: "**Gráficos de fondo**" o "**Background graphics**"
- También llamada: "**Imprimir fondos**" 

**Firefox:**
- Buscar: "**Imprimir fondos**" o "**Print backgrounds**"
- En: Más opciones → Opciones de apariencia

**Safari:**
- Buscar: "**Imprimir fondos**" en el panel de opciones

### 4. Verificar la vista previa
- Antes de guardar, verificar en la vista previa que:
  - ✅ El header se vea **AZUL**, no blanco
  - ✅ Los textos se vean **OSCUROS**, no claros
  - ✅ Los badges y tags mantengan sus colores
  - ✅ El CV ocupe máximo 2 páginas

### 5. Guardar el PDF
- Clic en "Guardar" o "Imprimir"
- Elegir ubicación y nombre del archivo
- Recomendado: `Joaquina_Gomez_Manna_CV.pdf`

---

## 🔧 Solución de problemas

### Si el header se ve blanco o las letras muy claras:
1. Verificar que "Gráficos de fondo" esté **ACTIVADO**
2. En Chrome/Edge: Ir a "Más opciones" y buscar la casilla
3. Si no aparece la opción, intentar con otro navegador

### Si los colores se ven desaturados:
- Asegurarse de que esté en modo **Color**, no en "Escala de grises"

### Si el CV ocupa más de 2 páginas:
- Verificar que la escala sea 100%, no mayor
- Los márgenes deben estar en "Ninguno"

---

## ✅ Resultado esperado

El PDF final debe verse EXACTAMENTE como en el navegador:
- Header azul oscuro/navy con textos blancos
- Badges de certificaciones visibles
- Tags azules en habilidades y proyectos
- Textos negros/oscuros (no grises claros)
- Barra lateral gris clara (#f8f9fa)
- Máximo 2 páginas

---

**Nota:** Los ajustes de impresión ahora están configurados para forzar que todos los colores y fondos se impriman correctamente, pero el navegador debe tener la opción "Gráficos de fondo" activada.
