Monorepo with Microfrontend Using Module Federation
Overview
This project implements a monorepo architecture combined with microfrontend architecture leveraging Webpack Module Federation. The main_app serves as the host application, while the micro_frontend projects (header, footer, and innersection) are remote modules dynamically integrated into the host at runtime.

Key Features
1.) Monorepo Structure: All applications are managed in a single repository for better development experience and dependency sharing.
2.) Microfrontend Architecture: Independent frontends (header, footer, innersection) are integrated into the main_app dynamically at runtime.
3.) Webpack Module Federation: Enables sharing and loading of modules between projects seamlessly.
Prerequisites
Node.js (>= 16.x)
Yarn or npm
Webpack (>= 5.x)

