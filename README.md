# MARSUPIAL RF Web

Sitio institucional de MARSUPIAL RF desarrollado con React + Vite + Tailwind CSS v4.

## Requisitos

- Node.js 20+ (recomendado LTS)
- npm 10+

Verificación rápida:

```bash
node -v
npm -v
```

## Instalación e inicio local

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar entorno de desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

- `http://localhost:5173`

## Build de producción

Generar versión optimizada:

```bash
npm run build
```

La salida queda en la carpeta `dist/`.

Probar el build localmente:

```bash
npm run preview
```

## Deploy en servidor

Este proyecto es estático en producción (servir contenido de `dist/`).

### Opción A: Nginx (Linux)

1. Construir proyecto (`npm run build`).
2. Copiar contenido de `dist/` a, por ejemplo, `/var/www/mrf-web`.
3. Configurar Nginx:

```nginx
server {
		listen 80;
		server_name tu-dominio.com;

		root /var/www/mrf-web;
		index index.html;

		location / {
				try_files $uri $uri/ /index.html;
		}
}
```

4. Recargar Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Opción B: IIS (Windows Server)

1. Construir proyecto (`npm run build`).
2. Crear un sitio en IIS apuntando a la carpeta `dist`.
3. Habilitar fallback a `index.html` con URL Rewrite.

Ejemplo de `web.config` dentro de `dist/`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
	<system.webServer>
		<rewrite>
			<rules>
				<rule name="SPA Fallback" stopProcessing="true">
					<match url=".*" />
					<conditions logicalGrouping="MatchAll">
						<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
						<add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
					</conditions>
					<action type="Rewrite" url="/index.html" />
				</rule>
			</rules>
		</rewrite>
	</system.webServer>
</configuration>
```

### Opción C: Node (rápido para staging)

```bash
npm install -g serve
serve -s dist -l 8080
```

## Scripts disponibles

- `npm run dev`: desarrollo con recarga en caliente
- `npm run build`: build de producción
- `npm run preview`: previsualización local del build
- `npm run lint`: lint del proyecto
