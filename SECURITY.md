# Seguridad del repositorio

## 1. Autenticación
El acceso al repositorio se realiza mediante una cuenta de GitHub.
Para las operaciones Git por HTTPS se utiliza un token de acceso personal
(PAT) en lugar de la contraseña de la cuenta.

## 2. Permisos
Se aplica el principio de mínimo privilegio: cada colaborador debe tener
únicamente los permisos necesarios para realizar su trabajo.
La rama main está protegida y requiere Pull Requests para integrar cambios.

## 3. Gestión de secretos
Los tokens, contraseñas y claves privadas nunca deben almacenarse en el
código fuente ni subirse al repositorio.
Los secretos necesarios para automatizaciones deben guardarse en GitHub
Secrets. Los archivos locales con información sensible deben incluirse
en .gitignore.

## 4. Copias de seguridad
El repositorio remoto de GitHub permite conservar el historial de cambios.
Además, se recomienda mantener copias locales o respaldos periódicos
del repositorio para poder recuperarlo ante pérdidas o incidencias.