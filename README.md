# sevengroupfrance/sulu-custom-toggle-bundle

Inspired by [this pull request](https://github.com/sulu/sulu-demo/pull/66).

## What is this bundle's goal?
Importing a custom fonctionality into [sulu](https://github.com/sulu/sulu), in this example, a custom content type.\
This bundle will import a custom toggle from the [react-switch](https://www.npmjs.com/package/react-switch) npm package.

![How the custom toggle looks in sulu's admin](assets/images/ct-6.png)

## Installation
1. Go to your `assets/admin` folder and install the react-switch npm package `npm install react-switch`.
2. Download the [package](https://packagist.org/packages/sevengroupfrance/sulu-custom-toggle-bundle) in your project with the following command line:\
`composer require sevengroupfrance/sulu-custom-toggle-bundle`.
3. In `config/bundles.php` add the following code:\
`SevenGroupFrance\SuluCustomToggleBundle\CustomToggleBundle::class => ['all' => true]`.
4. In `assets/admin/package.json`, add the following line in the "dependencies" object:\
`"sulu-custom-toggle-bundle": "file:node_modules/@sulu/vendor/sevengroupfrance/sulu-custom-toggle-bundle/src/Resources/js"`.
5. In `assets/admin`, `npm install` to initialize the bundle's symlink directory.
6. In `assets/admin/index.js`, add this line:\
`import 'sulu-custom-toggle-bundle'`.
7. In `assets/admin`, `npm run watch` or `npm run build`

For further customisation, please refer to the [official page](https://www.npmjs.com/package/react-switch)

## Use in your template files
Once installed, to use this new content type, you'll have to create a new property with the type `custom_toggle`.

```
<property name="desc" type="custom_toggle">
  <meta>
    <title lang="en">Text / description</title>
  </meta>
</property>
```

## Set your togglable fields
You can use this toggle to show/hide elements on your front application just like a normal Sulu toggle, but you can also toggle elements on your back office so your back office doesn't get too messy.

To do so, you'll need to create properties in your xml config file with a `name` that is the `custom_toggle` property's name, underscore `_` and whatever you want:
```
<property name="desc_text" type="text_editor">
  <meta>
      <title lang="en">Text field</title>
  </meta>
</property>
```
Be careful to put your properties right after the `custom_toggle` type property.
