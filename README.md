# Gestión de Obras | Tus obras bajo control, desde el celular

Landing page interactiva para constructores y contratistas con control de gastos, cobros, bitácora de días y simulador de liquidación de personal.

---

## 🚀 Cómo publicar esta web en GitHub Pages

Ya dejamos el proyecto 100% configurado con:
1. `base: './'` en `vite.config.ts` (para que los enlaces y recursos funcionen en cualquier subcarpeta o dominio de GitHub).
2. Flujo de despliegue automático en `.github/workflows/deploy.yml`.

### Pasos para subirlo a tu cuenta de GitHub:

1. **Crea un nuevo repositorio en GitHub**:
   - Entra a [github.com/new](https://github.com/new).
   - Nómbralo por ejemplo: `gestion-de-obras`.
   - Déjalo en **Public** (Público).
   - No marques "Add README" ni ".gitignore" (ya los tenemos en el proyecto).
   - Haz clic en **Create repository**.

2. **Sube tus archivos al repositorio**:
   Abre una terminal en la carpeta de este proyecto y ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Gestión de Obras"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/gestion-de-obras.git
   git push -u origin main
   ```
   *(Reemplaza `TU-USUARIO` por tu usuario de GitHub).*

3. **Activar GitHub Pages (Solo una vez)**:
   - En tu repositorio de GitHub, ve a la pestaña **Settings** (Configuración).
   - En el menú izquierdo, entra a **Pages**.
   - En **Build and deployment > Source**, selecciona:
     👉 **GitHub Actions**.

¡Listo! Cada vez que hagas `git push`, GitHub compilará automáticamente el proyecto y te entregará tu enlace público:
`https://TU-USUARIO.github.io/gestion-de-obras/`
