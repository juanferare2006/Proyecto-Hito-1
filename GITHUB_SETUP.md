# Instrucciones para Subir el Proyecto a GitHub

## ✅ Estado Actual

El repositorio Git local está configurado y tiene el commit inicial. El `.gitignore` está configurado correctamente para excluir `node_modules/`.

## 📝 Pasos para Subir a GitHub

### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Completa el formulario:
   - **Repository name**: `farmanova` (o el nombre que prefieras)
   - **Description**: "Plataforma de clasificación médica con IA - Backend y Frontend"
   - **Visibility**: Selecciona **Public** (o Private si prefieres)
   - **NO marques** "Initialize this repository with a README" (ya tenemos uno)
   - **NO agregues** .gitignore ni licencia (ya los tenemos)
5. Haz clic en **"Create repository"**

### 2. Conectar el Repositorio Local con GitHub

GitHub te mostrará las instrucciones. Ejecuta estos comandos en tu terminal:

```bash
cd "/Users/juanfernandoarenas/Library/Mobile Documents/com~apple~CloudDocs/Universidad de los Andes/MAIT/IA para negocios digitales/Hito 1"

# Reemplaza TU_USUARIO y NOMBRE_REPO con tus valores
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git branch -M main
git push -u origin main
```

**Ejemplo:**
```bash
git remote add origin https://github.com/juanfernando/farmanova.git
git branch -M main
git push -u origin main
```

### 3. Verificar la Subida

Una vez completado el push, verifica que todo esté correcto:
- Ve a tu repositorio en GitHub
- Verifica que todos los archivos estén presentes
- Verifica que `node_modules/` NO esté en el repositorio (debe estar excluido)

## 📋 Resumen de Archivos Subidos

- ✅ `server.js` - Backend Express
- ✅ `frontend/` - Todo el código del frontend React
- ✅ `README.md` - Documentación principal
- ✅ `.gitignore` - Configuración de archivos ignorados
- ✅ `frontend/.gitignore` - Configuración adicional del frontend
- ✅ `package.json` y `package-lock.json` del frontend
- ❌ `node_modules/` - **EXCLUIDO** (correcto)

## 🔐 Si te pide autenticación

Si GitHub te pide credenciales al hacer push, puedes usar:
- **Personal Access Token** (recomendado)
- O configurar SSH keys

Para crear un Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Selecciona los permisos necesarios (al menos `repo`)
4. Copia el token y úsalo como contraseña cuando te lo pida

## ✨ Listo!

Una vez completados estos pasos, tendrás tu repositorio público en GitHub con ambos proyectos (backend y frontend) listos para compartir.

