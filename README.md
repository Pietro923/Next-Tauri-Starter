# 🧪 create-next-tauri

> 🚀 Crea aplicaciones de escritorio modernas con Tauri + Next.js 14 + Tailwind CSS + shadcn/ui con un solo comando  
> Perfecto para iniciar apps de escritorio livianas, seguras y rápidas utilizando tecnologías web.

![Tauri](https://img.shields.io/badge/tauri-%23FFC131?logo=tauri&logoColor=black&style=flat)
![Next.js](https://img.shields.io/badge/next.js-000000?logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-38BDF8?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?logo=radixui&logoColor=white)
![npm](https://img.shields.io/npm/v/create-next-tauri)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Características

- 🚀 **Instalación con un solo comando** - Comienza en segundos, no en horas
- ⚙️ **Configuración cero** - Todo pre-configurado para empezar a desarrollar inmediatamente
- 🔄 **Desarrollo en tiempo real** - Hot reloading para una experiencia de desarrollo fluida
- 🌗 **Modo oscuro** - Sistema de temas claro/oscuro listo para usar
- 🧩 **Componentes reutilizables** - Construido con shadcn/ui para una UI consistente
- 📱 **Responsivo** - Diseñado para verse bien en cualquier tamaño de pantalla
- 🛠️ **TypeScript** - Tipado completo para una experiencia de desarrollo robusta

## 📦 Stack Tecnológico

- ⚡ **Next.js 14** – App Router, Server Components y optimización por defecto
- 🦀 **Tauri** – Motor de apps de escritorio súper liviano y seguro
- 💨 **Tailwind CSS** – Styling utility-first con control total
- 🧱 **shadcn/ui** – Componentes hermosos y accesibles usando Radix UI
- 🌗 **Dark Mode** – Toggle de tema claro/oscuro listo para usar
- 🔄 **Estado Global** – Sistema de gestión de estado configurado y listo

## 🚀 Inicio Rápido

### Creación de un nuevo proyecto

```bash
# Crea una nueva aplicación con un solo comando
npx create-next-tauri mi-app

# Navega al directorio del proyecto
cd mi-app

# Inicia el servidor de desarrollo
npm run tauri dev
```

¡Eso es todo! Tu nueva aplicación Tauri + Next.js estará funcionando en segundos.

## 🧰 Requisitos Previos

Antes de usar `create-next-tauri`, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (18+)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites/)

## 📋 Estructura del Proyecto

```
mi-app/
├── src/                  # Código fuente de Tauri (Rust)
│   ├── main.rs           # Punto de entrada de Rust
│   └── ...
├── src-tauri/            # Configuración de Tauri
│   ├── tauri.conf.json   # Configuración principal de Tauri
│   └── ...
├── app/                  # Componentes de Next.js
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout principal
│   └── ...
├── components/           # Componentes React reutilizables
│   ├── ui/               # Componentes de interfaz de usuario (shadcn/ui)
│   └── ...
├── lib/                  # Utilidades y helpers
├── styles/               # Estilos globales
└── public/               # Archivos estáticos
```

## 🛠️ Scripts Disponibles

- `npm run tauri dev` - Inicia el servidor de desarrollo de Next.js y Tauri
- `npm run tauri build` - Compila la aplicación para producción
- `npm run dev` - Inicia solo el servidor de desarrollo de Next.js
- `npm run build` - Compila solo la parte web de la aplicación
- `npm run lint` - Ejecuta el linter para verificar la calidad del código

## ⚙️ Personalización

### Configuración de Tauri

Puedes personalizar la configuración de Tauri editando el archivo `src-tauri/tauri.conf.json`:

```json
{
  "build": {
    "beforeBuildCommand": "npm run build",
    "beforeDevCommand": "npm run dev",
    "devPath": "http://localhost:3000",
    "distDir": "../out"
  },
  "package": {
    "productName": "Mi Aplicación",
    "version": "0.1.0"
  },
  // ... más configuraciones
}
```

### Componentes UI

Este starter utiliza [shadcn/ui](https://ui.shadcn.com/), que proporciona componentes hermosos y personalizables. Puedes añadir más componentes con:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# etc.
```

## 📚 Ejemplos Incluidos

El starter incluye ejemplos de:

- Implementación de tema claro/oscuro
- Comunicación entre Rust y JavaScript
- Uso de componentes shadcn/ui
- Layouts responsivos con Tailwind CSS

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia, problema o mejora:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## 👏 Agradecimientos

- [Next.js](https://nextjs.org/)
- [Tauri](https://tauri.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

<p align="center">
  Creado con ❤️ por <a href="https://github.com/Pietro923">Pietro923</a>
</p>

<p align="center">
  <a href="https://github.com/Pietro923/Next-Tauri-Starter/issues">Reportar Bug</a> ·
  <a href="https://github.com/Pietro923/Next-Tauri-Starter/issues">Solicitar Feature</a>
</p>
