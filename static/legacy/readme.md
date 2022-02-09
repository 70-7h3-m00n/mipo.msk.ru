# Sass structure: The 7-1 Pattern

## Utils

Holds Sass tools, helper files, variables, functions, mixins and other config files. These files are meant to be just helpers which don’t output any CSS when compiled.

## Base

Holds the boilerplate code for the project. Including standard styles such as resets and typographic rules, which are commonly used throughout the project.

## Components

Holds all of styles for buttons, carousels, sliders, and similar page components (think widgets). The project should contain a lot of component files — as the whole site/app should be mostly composed of small modules.

## Layout

Contains all styles involved with the layout of the project. Such as styles for the header, footer, navigation and the grid system.

## Pages

Any styles specific to individual pages will sit here. For example it’s not uncommon for the home page of the site to require page specific styles that no other page receives.

## Themes

This is likely not used in many projects. It would hold files that create project specific themes. For example if sections of your site contain alternate color schemes.

## Vendors

Contains all third party code from external libraries and frameworks — such as Normalize, Bootstrap, jQueryUI, etc. However, there is often a need to override vendor code. If this is required, its good practice to create a new folder called vendors-extensions/ and then name any files after the vendors they overwrite. The filevendors-extensions/_bootstrap.scss would contain all your Bootstrap overrides — as editing the vendor files themselves, isn’t generally a good idea.

## app.scss

This file should only contain imports
