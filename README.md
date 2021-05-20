# Demo app to demonstrate the use icomoon in a react appp

This project demonstrate the use of the icomoon tool using 2 differents methods:
* Using the webfont provided by the tool (converted to woff|woff2)
* Using a json file that icludes the path of all the icons (also provided by the icomoon tool)

## Getting Started
```console
git clone git@github.com:MedSghaier/aos-icomoon-demo.git
```

```console
yarn install
```

```console
yarn start
```

## Results and highlights
The use of this tool seems to be very promising, with around **100 icons** (which is an absurd number of icons for any giving app) the size of the  generated webfonts is around **10kb** and will eventually get cached in rhe browser, even with the json file method (found at */components/ico-s/selection.json*) the file size is around **186kb**
### Pros

1. Have the flexibility to add our own icons (no need for extra icons but third party icons librairies that might not treeshake weel)
2. Reference the icon only by its name, and pass it as a *string* prop to the Icon component
3. With the webfont method, icons behave just like regular text, and can be styled as such
4. Smaller bundle size and no svg in the final rendered output (using webfonts)

### Cons
1. Each time we need to add a new icon, either a new webfont or a selection.json file needs to be generated to updated the icons list (alse update the variables.scss file found at *scss/vendors/icomoon/variables.scss* to update the before pseudo element content variable), and maually convert the webfont to woff|woff2 (because icomoon in its free version only gives ttf fonts but that can be easily done)
2. Referencing the webfont in the scss file may be tricky and differs from module bundler to another (laravel-mix or simple webpack.config)
3. When using the webfont approach, the same settings same of the previously generated font must be set (the prefix ``-ico`` and denerate ``scss file variables`` )
![Settings](https://i.imgur.com/blNasBt.png)

