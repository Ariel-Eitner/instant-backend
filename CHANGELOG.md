# Changelog

Todas las modificaciones notables de este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2024-04-11

### Added

- Se agregaron nuevas propiedades opcionales al esquema y DTO de `Users` para enriquecer la información del usuario. Estas incluyen:
  - `field`: Campo de especialización del usuario.
  - `industry`: Industria en la que trabaja el usuario.
  - `experience`: Años de experiencia o experiencia laboral detallada.
  - `licenseNumber`: Número de licencia profesional.

Estos cambios tienen como objetivo permitir una representación más completa del perfil del usuario, reduciendo la necesidad de colecciones adicionales para almacenar esta información. Se espera que estos campos faciliten la gestión de usuarios en aplicaciones que requieran detalles profesionales detallados.

## [0.1.3] - 2024-04-11

### Fixed

- Se acomodaron los archivos con los nuevos props, ya que estaba fallando
