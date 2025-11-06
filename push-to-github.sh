#!/bin/bash

# Script para subir el proyecto FarmaNova a GitHub
# Uso: ./push-to-github.sh TU_USUARIO NOMBRE_REPO

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "❌ Error: Debes proporcionar tu usuario de GitHub y el nombre del repositorio"
    echo ""
    echo "Uso: ./push-to-github.sh TU_USUARIO NOMBRE_REPO"
    echo "Ejemplo: ./push-to-github.sh juanfernando farmanova"
    exit 1
fi

USUARIO=$1
REPO=$2
REMOTE_URL="https://github.com/${USUARIO}/${REPO}.git"

echo "🚀 Configurando conexión con GitHub..."
echo "   Usuario: $USUARIO"
echo "   Repositorio: $REPO"
echo "   URL: $REMOTE_URL"
echo ""

# Verificar si ya existe un remote
if git remote get-url origin 2>/dev/null; then
    echo "⚠️  Ya existe un remote 'origin'. ¿Deseas reemplazarlo? (s/n)"
    read -r respuesta
    if [ "$respuesta" = "s" ] || [ "$respuesta" = "S" ]; then
        git remote remove origin
        git remote add origin "$REMOTE_URL"
    else
        echo "❌ Operación cancelada"
        exit 1
    fi
else
    git remote add origin "$REMOTE_URL"
fi

echo ""
echo "📤 Subiendo código a GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Éxito! Tu código ha sido subido a GitHub"
    echo "   Visita: https://github.com/${USUARIO}/${REPO}"
else
    echo ""
    echo "❌ Error al subir el código. Verifica:"
    echo "   1. Que el repositorio exista en GitHub"
    echo "   2. Que tengas permisos de escritura"
    echo "   3. Que tu autenticación esté configurada correctamente"
fi

